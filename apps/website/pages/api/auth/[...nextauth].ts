import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { post } from "../../../utils/api";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  // Callbacks
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const response = await post("/api/login", { email: user.email });
      if (response.email) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
