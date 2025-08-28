
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    // Prevent multiple instances of Prisma Client in development
    if (!(global as any).prisma) {
        (global as any).prisma = prisma;
    }
    prisma = (global as any).prisma;
}    

export default prisma;