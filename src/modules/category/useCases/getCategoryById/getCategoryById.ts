import { CategoryRepo } from '../../categoryRepo'

export class GetCategoryById {
    private categoryRepo : CategoryRepo

    constructor(categoryRepo: CategoryRepo){
        this.categoryRepo = categoryRepo
    }

    public async execute(props: any){
        return await this.categoryRepo.getCategoryById(props)
    }
}