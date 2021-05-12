import {GetCategories } from './getCategories'
import {Request, Response} from 'express'

export class GetCategoriesController {
    private useCase: GetCategories;

    constructor(getCategories: GetCategories){
        this.useCase = getCategories
    }

    public async execute(req: Request, res: Response){
        const {name, description} = req.body
        if(!name){
            return res.status(400).json({
                error: {
                    message: "Name is required"
                }
            })
        }

        if(!description){
            return res.status(400).json({
                error: {
                    message: "Description is required"
                }
            })
        }

        const categories = await this.useCase.execute({name,description})
        res.status(200).json(categories)
    }
}