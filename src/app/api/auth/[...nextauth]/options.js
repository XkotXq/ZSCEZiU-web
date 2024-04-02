import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    // const user = login(credentials)
                    const user = {id : "42", login: "pablo", password: "ad", role: "admin"}
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                    throw new Error("Nie udało się zalogować.")
                }
            }

        })
    ],
}