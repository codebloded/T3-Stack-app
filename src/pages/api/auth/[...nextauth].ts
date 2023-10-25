import NextAuth from "next-auth";

import { authOptions } from "nextdemo/server/auth";

export default NextAuth(authOptions);
