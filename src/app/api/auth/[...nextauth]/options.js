import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const user = login(credentials)
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                    throw new Error("Nie udało się zalogować.")
                }
            }

        })
    ],
}