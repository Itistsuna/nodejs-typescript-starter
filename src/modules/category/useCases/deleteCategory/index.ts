import { entitiesObject } from '../../../../app/database/typeorm/entities'
import {CategoryRepo} from '../../categoryRepo'
import {DeleteCategoryController} from './deleteCategoryController'
import {DeleteCategory} from './deleteCategory'

const categoryRepo = new CategoryRepo(entitiesObject)
const deleteCategory = new DeleteCategory(categoryRepo)
const deleteCategoryController = new DeleteCategoryController(deleteCategory)

export {deleteCategory,deleteCategoryController}