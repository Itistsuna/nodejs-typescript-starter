import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ProgressRepo } from '../../progressRepo'
import { GetProgress } from './getProgress'
import { GetProgressController } from './getProgressController'


//Je construit mon repo avec les entités dont j'ai besoin
const progressRepo = new ProgressRepo(entitiesObject)
const getProgress = new GetProgress(progressRepo)
const getProgressController = new GetProgressController(getProgress)

export { getProgress, getProgressController }