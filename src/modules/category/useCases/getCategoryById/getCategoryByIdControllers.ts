import { GetCategoryById } from './getCategoryById'
import {Request, Response} from 'express'

export class GetCategoryByIdController {
    private useCase: GetCategoryById;

    constructor(getCategory: GetCategoryById){
        this.useCase = getCategory
    }

    public async execute(req: Request, res: Response){
        const category = await this.useCase.execute(req.params)
        console.log("category :" + category);
        
        res.status(200).json(category)
    }
}