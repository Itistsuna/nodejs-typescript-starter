//UseCase -> Service -> de la logique
import { ProgressRepo } from "../../progressRepo";
import { progressTypes } from '../../progressTypes'

export class CreateProgress {
    private progressRepo: ProgressRepo;

    constructor(progressRepo: ProgressRepo) {
        this.progressRepo = progressRepo
    }

    public async execute(props: progressTypes) {
        return await this.progressRepo.create(props);
    }
}