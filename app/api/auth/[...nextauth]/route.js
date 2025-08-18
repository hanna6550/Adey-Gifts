import connectMongoDB from '@/utils/db';
import User from '@/models/User';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

async function login({ username, password }) {
  await connectMongoDB();

  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error('Invalid username or password');
  }

  // Return only safe fields
  return {
    id: user._id.toString(),
    username: user.username,
  };
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.error("Login error:", err.message);
          return null; // Returning null makes NextAuth send 401
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    maxAge: 60 * 60 * 24, // 24 hours
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
