import { categoryProps } from "./categoryTypes"

export class CategoryRepo {
    private entities: any

    constructor(entities: any) {
        //Category //User //Skill
        this.entities = entities
    }

    public async create(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.create({name: categoryProps.name, description: categoryProps.description}).save()
    }

    public async getCategories() {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.find();
    }
}