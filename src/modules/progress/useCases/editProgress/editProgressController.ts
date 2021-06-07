import { Request, Response } from 'express'
import { EditProgress } from './editProgress'

export class EditProgressController {
    private useCase : EditProgress

    constructor(editProgress: EditProgress){
        this.useCase = editProgress
    }

    public async execute(req :Request, res: Response){
        const {name, level} = req.body
        const id = req.params
        const progress = await this.useCase.execute({id, name ,level})
        res.status(200).json({
            progress
        })
    }
}