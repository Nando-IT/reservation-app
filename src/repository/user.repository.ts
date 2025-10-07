import { User, Prisma } from "../prisma/src/prisma";
import { createBaseRepository } from "./base.repository";
import { prisma } from "../lib/prisma";

export const userRepository = {
    ...createBaseRepository<
    User,
    Prisma.UserCreateInput,
    Prisma.UserUpdateInput,
    Prisma.UserWhereUniqueInput>
    (prisma.user),
}