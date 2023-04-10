"use client"
import { api } from "@/lib/api/axios";
import { createContext, useEffect, useState } from "react"
import bcrypt from "bcryptjs";
import Cookies from 'js-cookie';



type SignInData = {
    username: string;
    email: string;
    password: string;
}

type User = {
    id: string;
    username: string;
    email: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signUp: (data: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children } : { children: React.ReactNode }) {
    const [user, setUser] = useState<User>({ id: '', username: '', email: '' });

    useEffect(() => {
        const token = Cookies.get('heytec.token');
        if (token) {
          const decodedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf-8'));
          setUser(decodedToken);
        }
        console.log(user);
    }, [user]);

    const isAuthenticated = Boolean(user);

    async function signUp({ username, email, password }: SignInData) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        try {

            const res = await api.post("/user/signup", {
                username: username,
                email: email,
                password: hashedPassword,
            })

            res.status == 201 ? alert("Usuário cadastrado com sucesso.") : alert("Deu ruim aq");

        } catch (error) {
            alert("Falha ao cadastrar usuário.")
        }

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signUp }}>
            { children }
        </AuthContext.Provider>
    )
}