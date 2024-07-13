import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Emaila",
          type: "email",
          required: true,
          placeholder: "Enter email",
        },
        password: {
          label: "Passwordi",
          type: "password",
          required: true,
          placeholder: "Enter password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        const user = { id: "1", email: "r@gmail.com", password: "123456" };
        if (!credentials) {
          return null;
        }
        if (user.email === email) {
          return true;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  //   pages: {
  //     signIn: "/auth/signin", // Displays a custom sign-in page
  //     signOut: "/auth/signout", // Displays a custom sign-out page
  //     error: "/auth/error", // Error code passed in query string as ?error=
  //     verifyRequest: "/auth/verify-request", // For verification emails
  //     newUser: "/auth/new-user", // Redirect here after user signs up
  //   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
