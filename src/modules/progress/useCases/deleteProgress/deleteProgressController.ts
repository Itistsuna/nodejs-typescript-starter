import { Request, Response } from 'express'
import { DeleteProgress } from './deleteProgress'

export class DeleteProgressController{
    private useCase: DeleteProgress

    constructor(deleteProgress: DeleteProgress){
        this.useCase = deleteProgress
    }

    public async execute(req: Request, res: Response){
        const id = req.params
        await this.useCase.execute(id)
        res.status(200).json({
            "message": "Deleted"
        })
    }
}
