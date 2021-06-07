import {ProgressRepo} from '../../progressRepo'

export class DeleteProgress {
    private progressRepo: ProgressRepo

    constructor(progressRepo: any){
        this.progressRepo = progressRepo
    }

    public async execute(props: any){
        return await this.progressRepo.deleteProgress(props)
    }
}