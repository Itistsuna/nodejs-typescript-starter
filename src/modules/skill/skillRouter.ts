import { Router } from 'express'
import { createSkillControler } from './useCases/createSkill/index'

const skillRouter: Router = Router();

skillRouter.get('/',(req,res) => createSkillControler.execute(req,res))

export { skillRouter }
