import { userRepository } from "../repository/user.repository";
import { createBaseService } from "./base.service";

export const userService = {
    ...createBaseService(userRepository)
} 