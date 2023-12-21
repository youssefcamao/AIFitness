import json


class ErrorMessage:
    def __init__(self, error: str):
        self.error = error

    @classmethod
    def from_json(cls, json_string):
        json_dict = json.loads(json_string)
        return cls(**json_dict)


class SecurityQuestion:
    def __init__(self, question: str, response: str):
        self.question = question
        self.response = response

    @classmethod
    def from_json(cls, json_dict):
        return cls(**json_dict)


class MatchedSignup:
    def __init__(self, full_name: str, email: str, password: str, security: SecurityQuestion):
        self.full_name = full_name
        self.email = email
        self.password = password
        self.security = security

    @classmethod
    def from_json(cls, json_string):
        json_dict = json.loads(json_string)
        security_question = SecurityQuestion.from_json(json_dict['security'])
        return cls(json_dict['full_name'], json_dict['email'], json_dict['password'], security_question)
