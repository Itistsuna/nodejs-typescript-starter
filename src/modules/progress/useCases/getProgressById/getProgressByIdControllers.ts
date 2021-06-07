import { GetProgressById } from './getProgressById'
import {Request, Response} from 'express'

export class GetProgressByIdController {
    private useCase: GetProgressById;

    constructor(getProgress: GetProgressById){
        this.useCase = getProgress
    }

    public async execute(req: Request, res: Response){
        const progress = await this.useCase.execute(req.params)
        console.log("progress :" + progress);
        
        res.status(200).json(progress)
    }
}