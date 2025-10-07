import { PrismaClient } from '../prisma/src/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// Adatbázis kapcsolati string
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/reservation_app?schema=public";

console.log('DATABASE_URL:', connectionString);

// PostgreSQL adapter inicializálása
const adapter = new PrismaPg({ connectionString });

// Prisma kliens inicializálása adapter-rel
export const prisma = new PrismaClient({ adapter });

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
