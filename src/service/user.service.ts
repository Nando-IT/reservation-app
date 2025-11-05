import { UserCreateDto } from "../dto/userCreate.dto";
import { createBaseRepository } from "../repository/base.repository";
import { userRepository } from "../repository/user.repository";
import { createBaseService } from "./base.service";

export const userService = {
    ...createBaseService(userRepository),
} 