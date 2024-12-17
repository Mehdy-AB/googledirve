import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
 
 
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        username: { label: "username", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        try{
          const res = await fetch(process.env.Backend_URL + "/auth", {
            method: "POST",
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 401) {
            
            return null;
          }
  
          const user = await res.json();
          return user;
        }catch(error:any){
          console.log(error.message)
        }
      },
    }),
  ],
  callbacks: {
    
    async jwt({token, user}) {
    
        if(user)return{...token, ...user}
        return token;
    },
    async session({token,session}){
        session.user = token.user;
        session.token = token.token;
        session.refresh_token = token.refresh_token;
        return session;
    }
  },
  pages:{
    signIn:"/auth/signin",
    signOut:"/auth/signout"
  }
};

const handler = NextAuth(authOptions as any);

// Export named handlers for each HTTP method
export { handler as GET, handler as POST };
