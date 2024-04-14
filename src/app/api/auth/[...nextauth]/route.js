import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { connectDB } from "../../../../../utils/connect";
import User from "../../../../../models/userModel";
import bcrypt from "bcryptjs"
import { authOptions } from "./options"

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


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }