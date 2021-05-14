import { Router, Request, Response } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { getCategoriesController } from './useCases/getCategories/index';
import { getCategoryByIdController } from './useCases/getCategoryById/index'
import { editCategoryController } from './useCases/editCategory/index'
import { deleteCategoryController } from './useCases/deleteCategory';

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (_: Request,res: Response) => getCategoriesController.execute(_,res))
categoryRouter.get(`/:id`,(req: Request, res: Response) => getCategoryByIdController.execute(req,res) )
categoryRouter.put('/update/:id',(req:Request, res:Response) => editCategoryController.execute(req,res))
categoryRouter.get('/delete/:id',(req:Request,res:Response) => deleteCategoryController.execute(req,res))

export { categoryRouter }