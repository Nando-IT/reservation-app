export class UserRepository{

    constructor() {
        
    }

    getUserByName(userName:string) : User {
        const user: User = db.users.get({
            where:{
                name: userName
            }
        })
        return user;
    }
}