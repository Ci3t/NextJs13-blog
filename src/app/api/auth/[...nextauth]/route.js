import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            //check PW
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User Not Found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
