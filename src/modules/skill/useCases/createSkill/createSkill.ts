import {SkillRepo} from '../../skillRepo'

export class CreateSkill {
    private skillRepo : SkillRepo;

    constructor(skillRepo: SkillRepo){
        this.skillRepo = skillRepo
    }

    public async getSkill(){
        return await this.skillRepo.getSkills();
    }
}