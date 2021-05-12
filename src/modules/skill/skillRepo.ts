export class SkillRepo {
    private entities: any 

    constructor(entities: any) {
        this.entities = entities    
    }

    public async getSkills(){
        const SkillEntity  = this.entities.Skill
        return await SkillEntity.find()
    }
}