import {CreateSkill} from './createSkill'
import {Request, Response} from 'express'

export class CreateSkillControler {
    private useCase: CreateSkill

    constructor(CreateSkill: CreateSkill){
        this.useCase = CreateSkill
    }

    public async execute(_: Request , res: Response){
        const skills = await this.useCase.getSkill()
        res.status(200).json(skills)
    }
}