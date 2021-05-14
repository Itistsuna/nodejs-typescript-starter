import { CategoryRepo } from "../../categoryRepo"

export class EditCategory {
    private categoryRepo : CategoryRepo

    constructor(categoryRepo: any){
        this.categoryRepo = categoryRepo
    }

    public async execute(props: any){
        return await this.categoryRepo.editCategory(props)
    }
}