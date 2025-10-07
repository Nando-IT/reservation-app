import { Request, Response } from "express";
import { userService } from "../service/user.service"
import { UserCreateDto } from "../dto/userCreateDto.dto";

export const userController = {
    getAllUser: async (req: Request, res: Response) => {
        try {
            const users = await userService.findMany();
            res.json(users);
        } catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userService.findByUnique({ id: parseInt(id) });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            console.error('Error getting user by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    createUser: async (req: Request, res: Response) => {
        try{
            const dto = req.body as UserCreateDto;
            var newUser = await userService.create(dto);
            if (!newUser) {
                return res.status(400).json({ error: 'User not created' });
            }
            res.json(newUser);
        }catch(error){
            console.error('Error getting user by id:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}