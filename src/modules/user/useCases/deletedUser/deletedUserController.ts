import { DeletedUser } from './deletedUser'
import { Request, Response } from 'express'

export class DeleteUserController {
    private useCase: DeletedUser

    constructor(deleteUser: DeletedUser){
        this.useCase = deleteUser
    }

    public async execute(req: Request, res: Response){
        await this.useCase.execute(req.params.id)
        res.status(200).json({
            message: "Deleted"
        })
        
    }
}