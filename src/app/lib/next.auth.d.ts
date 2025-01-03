import NextAuth from "next-auth";

declare module "next-auth"{
    interface Session{
        user: {
            id: number,
            fullName: string,
            email: string,
            jobTitle: string,
            username: string,
            password: string,
            role: string,
            enabled: boolean,
            createdAt: string | Date,
            lastActive: string | Date
        },
        token: string,
        refresh_token: string
    }
}

import {JWT} from "next-auth/jwt"
declare module "next-auth/jwt"{
    interface JWT{
        user: {
            id: number,
            fullName: string,
            email: string,
            jobTitle: string,
            username: string,
            password: string,
            role: string,
            enabled: boolean,
            createdAt: string | Date,
            lastActive: string | Date
        },
        token: string,
        refresh_token: string
    }
}