import { User } from './user'
import { Skill } from './skill'
import { Category } from './category'
import { Progress } from './progress'
import { Level } from './level'
import { Student } from './student'

const entities = [User, Skill, Category, Progress, Level, Student]
const entitiesObject = {User, Skill, Category, Progress, Level, Student}

export {entities, entitiesObject }