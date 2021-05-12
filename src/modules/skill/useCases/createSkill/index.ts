import { entitiesObject } from '../../../../app/database/typeorm/entities/index'
import { SkillRepo } from '../../skillRepo'
import { CreateSkill } from './createSkill'
import { CreateSkillControler } from './createSkillControler'

const skillRepo = new SkillRepo(entitiesObject)
const createSkill = new CreateSkill(skillRepo)
const createSkillControler = new CreateSkillControler(createSkill)

export { createSkill, createSkillControler }