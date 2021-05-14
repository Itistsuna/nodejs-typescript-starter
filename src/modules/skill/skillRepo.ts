import {SkillType,SkillId,SkillEntity} from './skillType'

export class SkillRepo {
    private entities: any 

    constructor(entities: any) {
        this.entities = entities  
    }

    public async createSkill(props: SkillType ){
        const SkillEntity = this.entities.Skill
        console.log(SkillEntity)
        console.log(props)
        
        return await SkillEntity.create({name: props.name,description: props.description}).save()
    }

    public async getSkills(){
        const SkillEntity  = this.entities.Skill
        return await SkillEntity.find()
    }

    public async getSkillById(props: SkillId){
        const SkillEntity = this.entities.skill
        return await SkillEntity.findOne({id:props.id})
    }

    public async editSkill(props: SkillEntity){
        const SkillEntity = this.entities.skill
        let skillUpdated = await SkillEntity.findOne(props.id)
        skillUpdated.name = props.name
        skillUpdated.description = props.description
        return await SkillEntity.save(skillUpdated)
    }

    public async deleteSkill(props: SkillId){
        const SkillEntity = this.entities.skill
        let deletedSkill = await SkillEntity.findOne(props.id)
        return await SkillEntity.remove(deletedSkill)
    }

}