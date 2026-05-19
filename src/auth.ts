import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.access_token) {
        token.accessToken = account.access_token
      }
      if (profile) {
        token.githubLogin = (profile as { login?: string }).login
      }
      return token
    },
    async session({ session, token }) {
      session.user.githubLogin = (token.githubLogin ?? "") as string
      session.user.accessToken = (token.accessToken ?? "") as string
      return session
    },
  },
})
