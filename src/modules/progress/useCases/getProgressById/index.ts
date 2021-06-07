import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { ProgressRepo } from '../../progressRepo'
import { GetProgressById } from './getProgressById'
import { GetProgressByIdController } from './getProgressByIdControllers'


//Je construit mon repo avec les entités dont j'ai besoin
const progressRepo = new ProgressRepo(entitiesObject)
const getProgressById = new GetProgressById(progressRepo)
const getProgressByIdController = new GetProgressByIdController(getProgressById)

export { getProgressById, getProgressByIdController }