import {SkillRepo} from '../../skillRepo'
import { SkillType } from '../../skillType';

export class CreateSkill {
    private skillRepo : SkillRepo;

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async execute(props: SkillType){
        console.log(props);
        
        return await this.skillRepo.createSkill(props);
    }
}