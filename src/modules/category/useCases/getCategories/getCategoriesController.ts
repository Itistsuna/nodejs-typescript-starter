import {GetCategories } from './getCategories'
import {Request, Response} from 'express'

export class GetCategoriesController {
    private useCase: GetCategories;

    constructor(getCategories: GetCategories){
        this.useCase = getCategories
    }

    public async execute(_: Request, res: Response){

        const categories = await this.useCase.execute()
        console.log("categories :" + categories);
        
        res.status(200).json(categories)
    }
}