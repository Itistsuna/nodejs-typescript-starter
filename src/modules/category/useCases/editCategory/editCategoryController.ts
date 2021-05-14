import { Request, Response } from 'express'
import { EditCategory } from './editCategory'

export class EditCategoryController {
    private useCase : EditCategory

    constructor(editCategory: EditCategory){
        this.useCase = editCategory
    }

    public async execute(req :Request, res: Response){
        const {name, description} = req.body
        const id = req.params
        const category = await this.useCase.execute({id, name ,description})
        res.status(200).json({
            category
        })
    }
}