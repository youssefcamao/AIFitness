//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Step1Client {
    private http: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>};
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>}) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Login Step1
     * @return Successful Response
     */
    post(body: Body_login_step1_token_step1_post): Promise<SecurityResponseForm> {
        let url_ = this.baseUrl + "/token/step1";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = Object.keys(body as any).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent((body as any)[key]);
        }).join('&')

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<SecurityResponseForm> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = SecurityResponseForm.fromJS(resultData200);
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SecurityResponseForm>(null as any);
    }
}

export class Step2Client {
    private http: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>};
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>}) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Login For Access Token
     * @return Successful Response
     */
    post(body: SecurityQuestionAnswer): Promise<SuccessfulAuth> {
        let url_ = this.baseUrl + "/token/step2";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<SuccessfulAuth> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = SuccessfulAuth.fromJS(resultData200);
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SuccessfulAuth>(null as any);
    }
}

export class SignupClient {
    private http: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>};
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>}) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Signup New User
     * @return Successful Response
     */
    post(body: UserCreate): Promise<SuccessfulAuth> {
        let url_ = this.baseUrl + "/signup";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<SuccessfulAuth> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = SuccessfulAuth.fromJS(resultData200);
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SuccessfulAuth>(null as any);
    }
}

export class Client {
    private http: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>};
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>}) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Chat
     * @return Successful Response
     */
    post(session_id: string, message: string, token: string): Promise<HandleChat> {
        let url_ = this.baseUrl + "/chat/{session_id}?";
        if(session_id === undefined || session_id === null)
            throw new Error("The parameter 'session_id' must be defined.");
        url_ = url_.replace("{session_id}", encodeURIComponent("" + session_id));
        if(message === undefined || message === null)
            throw new Error("The parameter 'message' must be defined and cannot be null.");
        else
            url_ += "message=" + encodeURIComponent("" + message) + "&";
        if(token === undefined || token === null)
            throw new Error("The parameter 'token' must be defined and cannot be null.");
        else
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<HandleChat> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = HandleChat.fromJS(resultData200);
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<HandleChat>(null as any);
    }

    /**
     * Delete Session
     * @return Successful Response
     */
    delete(session_id: string, token: string): Promise<void> {
        let url_ = this.baseUrl + "/chat/{session_id}?";
        if(session_id === undefined || session_id === null)
            throw new Error("The parameter 'session_id' must be defined.");
        url_ = url_.replace("{session_id}", encodeURIComponent("" + session_id));
        if(token === undefined || token === null)
            throw new Error("The parameter 'token' must be defined and cannot be null.");
        else
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 204) {
            return response.text().then((_responseText) => {
                return;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(null as any);
    }
}

export class ChatClient {
    private http: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>};
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: {fetch(url: RequestInfo, init?: RequestInit): Promise<Response>}) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * Start New Session
     * @return Successful Response
     */
    post(message: string, token: string): Promise<CreateNewChat> {
        let url_ = this.baseUrl + "/chat?";
        if(message === undefined || message === null)
            throw new Error("The parameter 'message' must be defined and cannot be null.");
        else
            url_ += "message=" + encodeURIComponent("" + message) + "&";
        if(token === undefined || token === null)
            throw new Error("The parameter 'token' must be defined and cannot be null.");
        else
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "POST",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<CreateNewChat> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = CreateNewChat.fromJS(resultData200);
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CreateNewChat>(null as any);
    }

    /**
     * List Sessions
     * @return Successful Response
     */
    get(token: string): Promise<ChatSession[]> {
        let url_ = this.baseUrl + "/chat?";
        if(token === undefined || token === null)
            throw new Error("The parameter 'token' must be defined and cannot be null.");
        else
            url_ += "token=" + encodeURIComponent("" + token) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<ChatSession[]> {
        const status = response.status;
        let _headers: any = {}; if(response.headers && response.headers.forEach) {response.headers.forEach((v: any, k: any) => _headers[k] = v);};
        if(status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if(Array.isArray(resultData200)) {
                    result200 = [] as any;
                    for(let item of resultData200)
                        result200!.push(ChatSession.fromJS(item));
                }
                else {
                    result200 = <any>null;
                }
                return result200;
            });
        } else if(status === 422) {
            return response.text().then((_responseText) => {
                let result422: any = null;
                let resultData422 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result422 = HTTPValidationError.fromJS(resultData422);
                return throwException("Validation Error", status, _responseText, _headers, result422);
            });
        } else if(status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ChatSession[]>(null as any);
    }
}

export class Body_login_step1_token_step1_post implements IBody_login_step1_token_step1_post {
    grant_type?: string;
    username!: string;
    password!: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;

    [key: string]: any;

    constructor(data?: IBody_login_step1_token_step1_post) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if(!data) {
            this.scope = "";
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.grant_type = _data["grant_type"];
            this.username = _data["username"];
            this.password = _data["password"];
            this.scope = _data["scope"] !== undefined ? _data["scope"] : "";
            this.client_id = _data["client_id"];
            this.client_secret = _data["client_secret"];
        }
    }

    static fromJS(data: any): Body_login_step1_token_step1_post {
        data = typeof data === 'object' ? data : {};
        let result = new Body_login_step1_token_step1_post();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["grant_type"] = this.grant_type;
        data["username"] = this.username;
        data["password"] = this.password;
        data["scope"] = this.scope;
        data["client_id"] = this.client_id;
        data["client_secret"] = this.client_secret;
        return data;
    }
}

export interface IBody_login_step1_token_step1_post {
    grant_type?: string;
    username: string;
    password: string;
    scope?: string;
    client_id?: string;
    client_secret?: string;

    [key: string]: any;
}

export class ChatMessage implements IChatMessage {
    role!: string;
    content!: string;

    [key: string]: any;

    constructor(data?: IChatMessage) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.role = _data["role"];
            this.content = _data["content"];
        }
    }

    static fromJS(data: any): ChatMessage {
        data = typeof data === 'object' ? data : {};
        let result = new ChatMessage();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["role"] = this.role;
        data["content"] = this.content;
        return data;
    }
}

export interface IChatMessage {
    role: string;
    content: string;

    [key: string]: any;
}

export class ChatSession implements IChatSession {
    session_id?: string;
    session_title?: string;
    messages?: ChatMessage[];

    [key: string]: any;

    constructor(data?: IChatSession) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if(!data) {
            this.session_title = "New Chat with AI";
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.session_id = _data["session_id"];
            this.session_title = _data["session_title"] !== undefined ? _data["session_title"] : "New Chat with AI";
            if(Array.isArray(_data["messages"])) {
                this.messages = [] as any;
                for(let item of _data["messages"])
                    this.messages!.push(ChatMessage.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ChatSession {
        data = typeof data === 'object' ? data : {};
        let result = new ChatSession();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["session_id"] = this.session_id;
        data["session_title"] = this.session_title;
        if(Array.isArray(this.messages)) {
            data["messages"] = [];
            for(let item of this.messages)
                data["messages"].push(item.toJSON());
        }
        return data;
    }
}

export interface IChatSession {
    session_id?: string;
    session_title?: string;
    messages?: ChatMessage[];

    [key: string]: any;
}

export class CreateNewChat implements ICreateNewChat {
    session_id!: string;
    session_title!: string;
    response!: string;

    [key: string]: any;

    constructor(data?: ICreateNewChat) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.session_id = _data["session_id"];
            this.session_title = _data["session_title"];
            this.response = _data["response"];
        }
    }

    static fromJS(data: any): CreateNewChat {
        data = typeof data === 'object' ? data : {};
        let result = new CreateNewChat();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["session_id"] = this.session_id;
        data["session_title"] = this.session_title;
        data["response"] = this.response;
        return data;
    }
}

export interface ICreateNewChat {
    session_id: string;
    session_title: string;
    response: string;

    [key: string]: any;
}

export class HTTPValidationError implements IHTTPValidationError {
    detail?: ValidationError[];

    [key: string]: any;

    constructor(data?: IHTTPValidationError) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if(Array.isArray(_data["detail"])) {
                this.detail = [] as any;
                for(let item of _data["detail"])
                    this.detail!.push(ValidationError.fromJS(item));
            }
        }
    }

    static fromJS(data: any): HTTPValidationError {
        data = typeof data === 'object' ? data : {};
        let result = new HTTPValidationError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if(Array.isArray(this.detail)) {
            data["detail"] = [];
            for(let item of this.detail)
                data["detail"].push(item.toJSON());
        }
        return data;
    }
}

export interface IHTTPValidationError {
    detail?: ValidationError[];

    [key: string]: any;
}

export class HandleChat implements IHandleChat {
    session_id!: string;
    response!: string;

    [key: string]: any;

    constructor(data?: IHandleChat) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.session_id = _data["session_id"];
            this.response = _data["response"];
        }
    }

    static fromJS(data: any): HandleChat {
        data = typeof data === 'object' ? data : {};
        let result = new HandleChat();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["session_id"] = this.session_id;
        data["response"] = this.response;
        return data;
    }
}

export interface IHandleChat {
    session_id: string;
    response: string;

    [key: string]: any;
}

export class SecurityQuestionAnswer implements ISecurityQuestionAnswer {
    intermediate_token!: string;
    answer!: string;

    [key: string]: any;

    constructor(data?: ISecurityQuestionAnswer) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.intermediate_token = _data["intermediate_token"];
            this.answer = _data["answer"];
        }
    }

    static fromJS(data: any): SecurityQuestionAnswer {
        data = typeof data === 'object' ? data : {};
        let result = new SecurityQuestionAnswer();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["intermediate_token"] = this.intermediate_token;
        data["answer"] = this.answer;
        return data;
    }
}

export interface ISecurityQuestionAnswer {
    intermediate_token: string;
    answer: string;

    [key: string]: any;
}

export class SecurityResponseForm implements ISecurityResponseForm {
    security_question!: string;
    intermediate_token!: string;

    [key: string]: any;

    constructor(data?: ISecurityResponseForm) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.security_question = _data["security_question"];
            this.intermediate_token = _data["intermediate_token"];
        }
    }

    static fromJS(data: any): SecurityResponseForm {
        data = typeof data === 'object' ? data : {};
        let result = new SecurityResponseForm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["security_question"] = this.security_question;
        data["intermediate_token"] = this.intermediate_token;
        return data;
    }
}

export interface ISecurityResponseForm {
    security_question: string;
    intermediate_token: string;

    [key: string]: any;
}

export class SuccessfulAuth implements ISuccessfulAuth {
    token!: Token;
    full_name!: string;

    [key: string]: any;

    constructor(data?: ISuccessfulAuth) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if(!data) {
            this.token = new Token();
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.token = _data["token"] ? Token.fromJS(_data["token"]) : new Token();
            this.full_name = _data["full_name"];
        }
    }

    static fromJS(data: any): SuccessfulAuth {
        data = typeof data === 'object' ? data : {};
        let result = new SuccessfulAuth();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["token"] = this.token ? this.token.toJSON() : <any>undefined;
        data["full_name"] = this.full_name;
        return data;
    }
}

export interface ISuccessfulAuth {
    token: Token;
    full_name: string;

    [key: string]: any;
}

export class Token implements IToken {
    access_token!: string;
    token_type!: string;

    [key: string]: any;

    constructor(data?: IToken) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.access_token = _data["access_token"];
            this.token_type = _data["token_type"];
        }
    }

    static fromJS(data: any): Token {
        data = typeof data === 'object' ? data : {};
        let result = new Token();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["access_token"] = this.access_token;
        data["token_type"] = this.token_type;
        return data;
    }
}

export interface IToken {
    access_token: string;
    token_type: string;

    [key: string]: any;
}

export class UserCreate implements IUserCreate {
    text!: string;

    [key: string]: any;

    constructor(data?: IUserCreate) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.text = _data["text"];
        }
    }

    static fromJS(data: any): UserCreate {
        data = typeof data === 'object' ? data : {};
        let result = new UserCreate();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["text"] = this.text;
        return data;
    }
}

export interface IUserCreate {
    text: string;

    [key: string]: any;
}

export class ValidationError implements IValidationError {
    loc!: Loc[];
    msg!: string;
    type!: string;

    [key: string]: any;

    constructor(data?: IValidationError) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if(!data) {
            this.loc = [];
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            if(Array.isArray(_data["loc"])) {
                this.loc = [] as any;
                for(let item of _data["loc"])
                    this.loc!.push(item);
            }
            this.msg = _data["msg"];
            this.type = _data["type"];
        }
    }

    static fromJS(data: any): ValidationError {
        data = typeof data === 'object' ? data : {};
        let result = new ValidationError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        if(Array.isArray(this.loc)) {
            data["loc"] = [];
            for(let item of this.loc)
                data["loc"].push(item);
        }
        data["msg"] = this.msg;
        data["type"] = this.type;
        return data;
    }
}

export interface IValidationError {
    loc: Loc[];
    msg: string;
    type: string;

    [key: string]: any;
}

export class Loc implements ILoc {

    [key: string]: any;

    constructor(data?: ILoc) {
        if(data) {
            for(var property in data) {
                if(data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if(_data) {
            for(var property in _data) {
                if(_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
        }
    }

    static fromJS(data: any): Loc {
        data = typeof data === 'object' ? data : {};
        let result = new Loc();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for(var property in this) {
            if(this.hasOwnProperty(property))
                data[property] = this[property];
        }
        return data;
    }
}

export interface ILoc {

    [key: string]: any;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {[key: string]: any;};
    result: any;

    constructor(message: string, status: number, response: string, headers: {[key: string]: any;}, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: {[key: string]: any;}, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}