

export interface Message {
    title: string;
    content: string;
}

export interface HttpResponse {
    status: string;
    data: any;
}

export interface User {
    id: string;
    userName: string;
    password: string;
    token: string;
}

export interface Auth {
    hasError: boolean;
    redirectUrl: string;
    msg: string;
    user: User;
}

export interface Link {
    icon: string;
    displayName: string;
    path: string;
}
