import {CreateSkill} from './createSkill'
import {Request, Response} from 'express'

export class CreateSkillController {
    private useCase: CreateSkill

    constructor(createSkill: CreateSkill){
        this.useCase = createSkill
    }

    public async execute(req: Request , res: Response){
        const { name, description } = req.body
        console.log(req.body);
        
        if(!name){
            res.status(400).json({
                "message": "Name is required"
            })
        }

        if(!description){
            res.status(400).json({
                "message": "Description is required"
            })
        }
        const skills = await this.useCase.execute({ name, description})
        res.status(200).json(skills)
    }
}