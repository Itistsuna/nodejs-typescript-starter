import { entitiesObject } from '../../../../app/database/typeorm/entities/index'
import { SkillRepo } from '../../skillRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillController } from './createSkillControler'

const skillRepo = new SkillRepo(entitiesObject)
const createSkill = new CreateSkill(skillRepo)
const createSkillController = new CreateSkillController(createSkill)

export { createSkill, createSkillController }