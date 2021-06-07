import { Router, Request, Response } from 'express'
import { createSkillController } from './useCases/createSkill/index'
// import { getSkillByIdController } from './useCases/getSkillById/index'
// import { getSkillsController } from './useCases/getSkills/index'
// import { editSkillController } from './useCases/editSkill'
// import {deleteSkillController} from './useCases/deletedSkill'

const skillRouter: Router = Router();

skillRouter.post('/',(req: Request,res: Response) => createSkillController.execute(req,res))
// skillRouter.get('/',(_:Request, res: Response) => getSkillsController.execute(_,res))
// skillRouter.get('/:id', (req:Request,res:Response) => getSkillByIdController.execute(req,res))
// skillRouter.put('/update/:id', (req:Request, res:Response) => editSkillController.execute(req,res))
// skillRouter.delete('/delete/:id',(_:Request,res:Response) => deleteSkillController.execute(_,res))

export { skillRouter }
