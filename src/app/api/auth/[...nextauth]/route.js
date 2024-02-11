import CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { connectDB } from "../../../../../utils/connect";
import User from "../../../../../models/userModel";
import bcrypt from "bcryptjs"

async function login(credentials) {
    try {
        connectDB();
        const user = await User.findOne({username:credentials.username});
        if(!user) throw new Error("Błędne dane uwierzytelniające.");
        const isCorret = await bcrypt.compare(credentials.password, user.password);
        if(!isCorret) throw new Error("Błędne dane uwierzytelniające.");
        return user
    } catch (error) {
        throw new Error("Coś poszło nie tak.")
    }
}

export const authOptions = {
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                    throw new Error("Nie udało się zalogować.")
                }
            }

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.email = user.email;
                token.permissions = user.permissions
                token.id = user.id;
            }
            return token;
        
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.permissions = token.permissions
                session.user.id = token.id;
            }

            return session;
        },
    },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }