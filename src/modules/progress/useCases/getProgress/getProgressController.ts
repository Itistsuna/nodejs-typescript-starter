import {GetProgress } from './getProgress'
import {Request, Response} from 'express'

export class GetProgressController {
    private useCase: GetProgress;

    constructor(getProgress: GetProgress){
        this.useCase = getProgress
    }

    public async execute(_: Request, res: Response){

        const progress = await this.useCase.execute()
        console.log("progress :" + progress);
        
        res.status(200).json(progress)
    }
}