import { CreateProgress } from './createProgress'
import { Request, Response } from 'express'
//Controller

export class CreateProgressController {
    private useCase: CreateProgress;

    constructor(createCategory: CreateProgress) {
        this.useCase = createCategory;
    }

    public async execute(req: Request, res: Response) {        
        const { name, level } = req.body
        //Si le body est pas valide, on renvoie une 400
        if (!name) {
            return res.status(400).json({
                error: {
                    message: 'Name is required'
                }
            });
        }

        if (!level) {
            return res.status(400).json({
                error: {
                    message: 'Description is required'
                }
            });
        }

        const categories = await this.useCase.execute({ name, level });
        console.log('Controller categories result', categories);

        res.status(200).json(categories);
    }
}   