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

    public async getCategoryById(categoryProps: any) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.findOne({id: categoryProps.id})
    }

    public async editCategory(categoryProps: any ){
        const CategoryEntity = this.entities.Category
        let updatedCategory = await CategoryEntity.findOne({id: categoryProps.id.id})
        updatedCategory.name = categoryProps.name
        updatedCategory.description = categoryProps.description
        return await CategoryEntity.save(updatedCategory)
    }

    public async deleteCategory(categoryProps: any){
        const CategoryEntity = this.entities.Category
        let deletedCategory = await CategoryEntity.findOne({id: categoryProps.id})
        return await CategoryEntity.remove(deletedCategory)
    }
}