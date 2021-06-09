import { progressTypes } from "./progressTypes"

export class ProgressRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill
        this.entities = entities
    }
    
    public async create(progressType: progressTypes) {
        const ProgressEntity = this.entities.Progress
        return await ProgressEntity.create({user: progressType.user, level: progressType.level, skill: progressType.skill}).save()
    }

    public async getProgress() {
        const ProgressEntity = this.entities.Progress
        return await ProgressEntity.find();
    }

    public async getProgressById(progressProps: any) {
        const ProgressEntity = this.entities.Progress
        return await ProgressEntity.findOne({id: progressProps.id})
    }

    public async editProgress(progressProps: any ){
        const ProgressEntity = this.entities.Progress
        let updatedProgress = await ProgressEntity.findOne({id: progressProps.id.id})
        updatedProgress.skill = progressProps.skill
        updatedProgress.level = progressProps.level
        updatedProgress.user = progressProps.user
        return await ProgressEntity.save(updatedProgress)
    }

    public async deleteProgress(progressProps: any){
        const ProgressEntity = this.entities.Progress
        let deletedProgress = await ProgressEntity.findOne({id: progressProps.id})
        return await ProgressEntity.remove(deletedProgress)
    }
}