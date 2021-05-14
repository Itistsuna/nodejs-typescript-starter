import { Router, Request, Response } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { getCategoriesController } from './useCases/getCategories/index';

const categoryRouter: Router = Router();

///api/v1/skills/
categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.get('/', (_: Request,res: Response) => {console.log("Categories : " + getCategoriesController);
 getCategoriesController.execute(_,res)})

export { categoryRouter }