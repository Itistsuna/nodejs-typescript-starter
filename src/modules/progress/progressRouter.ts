import { Router, Request, Response } from 'express'
import { createProgressController } from '../progress/useCases/createProgress'
import { getProgressController } from '../progress/useCases/getProgress/index';
import { getProgressByIdController } from '../progress/useCases/getProgressById/index'
import { editProgressController } from '../progress/useCases/editProgress/index'
import { deleteProgressController } from '../progress/useCases/deleteProgress';

const progressRouter: Router = Router();

///api/v1/skills/
progressRouter.post('/', (req, res) => createProgressController.execute(req, res))
progressRouter.get('/', (_: Request,res: Response) => getProgressController.execute(_,res))
progressRouter.get(`/:id`,(req: Request, res: Response) => getProgressByIdController.execute(req,res) )
progressRouter.put('/update/:id',(req:Request, res:Response) => editProgressController.execute(req,res))
progressRouter.delete('/delete/:id',(req:Request,res:Response) => deleteProgressController.execute(req,res))

export { progressRouter } 