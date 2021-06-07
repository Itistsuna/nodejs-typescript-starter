import { ProgressRepo } from '../../progressRepo'

export class GetProgress {
    private progressRepo : ProgressRepo

    constructor(progressRepo: ProgressRepo){
        this.progressRepo = progressRepo
    }

    public async execute(){
        return await this.progressRepo.getProgress()
    }
}