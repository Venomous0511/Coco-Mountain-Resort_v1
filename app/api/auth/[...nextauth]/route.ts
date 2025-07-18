import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_ID!,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET!,
        }),
    ],
}

export default NextAuth(authOptions)