from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from ..models.chat_session import User
from ..services.user_service import UserService, UserCreate
from ..llm.sigunp_matcher import SignupMatcher
from ..llm.security_question_validator import SecurityQuestionValidator
from ..models.endpoint_models import SuccessfulAuth, Token, SecurityQuestionAnswer, SecurityResponseForm
from ..models.llm_models import ErrorMessage, MatchedSignup

ACCESS_TOKEN_EXPIRE_MINUTES = 500

router = APIRouter()
user_service = UserService()
signup_matcher = SignupMatcher()
security_question_validator = SecurityQuestionValidator()


@router.post("/token/step1", response_model=SecurityResponseForm)
async def login_step1(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await user_service.authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )

    intermediate_token = user_service.create_intermediate_token(
        data={"sub": user.email, "intermediate": True}
    )
    return SecurityResponseForm(security_question=user.security_question.question, intermediate_token=intermediate_token)


@router.post("/token/step2", response_model=SuccessfulAuth)
async def login_for_access_token(answer_data: SecurityQuestionAnswer, user_service: UserService = Depends()):
    email = user_service.validate_intermediate_token(
        answer_data.intermediate_token)
    user = await user_service.get_user_by_email(email)
    if not user or not security_question_validator.validate_security_question(user.security_question, answer_data.answer):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect security answer",
            headers={"WWW-Authenticate": "Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = user_service.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires)
    token = Token(access_token=access_token, token_type="bearer")
    return SuccessfulAuth(token=token, full_name=user.full_name)


@router.post("/signup", response_model=SuccessfulAuth)
async def signup_new_user(user_data: UserCreate):
    if not user_data.text:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="empty restration text")

    matched_result = await signup_matcher.match_sigunup_text(user_data.text)

    if isinstance(matched_result, ErrorMessage):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail=matched_result.error)
    elif isinstance(matched_result, MatchedSignup):
        existing_user = await user_service.get_user_by_email(matched_result.email)
        if existing_user:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="Email already registered")

        new_user = await user_service.signup_user(matched_result)
        if not new_user:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                                detail="User registration failed")

        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = user_service.create_access_token(
            data={"sub": new_user.email}, expires_delta=access_token_expires)
        token = Token(access_token=access_token, token_type="bearer")
        return SuccessfulAuth(token=token, full_name=matched_result.full_name)
