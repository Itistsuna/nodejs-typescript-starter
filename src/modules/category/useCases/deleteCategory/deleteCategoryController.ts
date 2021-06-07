import { Request, Response } from 'express'
import { DeleteCategory } from './deleteCategory'

export class DeleteCategoryController{
    private useCase: DeleteCategory

    constructor(deleteCategory: DeleteCategory){
        this.useCase = deleteCategory
    }

    public async execute(req: Request, res: Response){
        const id = req.params
        await this.useCase.execute(id)
        res.status(200).json({
            "message": "Deleted"
        })
    }
}
