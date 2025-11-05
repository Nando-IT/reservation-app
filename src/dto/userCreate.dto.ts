import { BaseCreateDto } from "./baseCreate.dto";

export interface UserCreateDto extends BaseCreateDto{
    userName: string,
    firstName: string,
    lastName: string,
    email: string
}