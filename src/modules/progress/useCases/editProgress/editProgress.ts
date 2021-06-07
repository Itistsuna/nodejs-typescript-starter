import { ProgressRepo } from "../../progressRepo"

export class EditProgress {
    private progressRepo : ProgressRepo

    constructor(progressRepo: any){
        this.progressRepo = progressRepo
    }

    public async execute(props: any){
        return await this.progressRepo.editProgress(props)
    }
}