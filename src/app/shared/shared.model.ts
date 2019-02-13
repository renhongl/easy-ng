

export interface HttpResponse {
    statusCode: string;
    msg: string;
    data: any;
}

export interface User {
    id: string;
    userName: string;
    password: string;
    token: string;
}

export interface Message {
    title: string;
    content: string;
}

export interface Auth {
    hasError: boolean;
    redirectUrl: string;
    msg: string;
    user: User;
}
