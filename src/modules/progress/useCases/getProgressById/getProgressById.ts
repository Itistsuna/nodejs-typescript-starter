import { ProgressRepo } from '../../progressRepo'

export class GetProgressById {
    private progressRepo : ProgressRepo

    constructor(progressRepo: ProgressRepo){
        this.progressRepo = progressRepo
    }

    public async execute(props: any){
        return await this.progressRepo.getProgressById(props)
    }
}