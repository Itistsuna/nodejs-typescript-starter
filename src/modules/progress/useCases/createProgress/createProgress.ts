//UseCase -> Service -> de la logique
import { ProgressRepo } from "../../progressRepo";
import { progressType } from '../../progressType'

export class CreateProgress {
    private progressRepo: ProgressRepo;

    constructor(progressRepo: ProgressRepo) {
        this.progressRepo = progressRepo
    }

    public async execute(props: progressType) {
        return await this.progressRepo.create(props);
    }
}