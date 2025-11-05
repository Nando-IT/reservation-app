import { BaseUpdateDto } from "./baseUpdate.dto";

export interface UserUpdateDto extends BaseUpdateDto {
    email: string
    firstName: string
    lastName: string
    userName: string
}