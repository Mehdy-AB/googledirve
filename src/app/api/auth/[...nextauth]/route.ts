import { authOptions } from "@/app/lib/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions as any);

// Export named handlers for each HTTP method
export { handler as GET, handler as POST };
