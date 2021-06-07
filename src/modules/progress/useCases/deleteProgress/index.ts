import { entitiesObject } from '../../../../app/database/typeorm/entities'
import {ProgressRepo} from '../../progressRepo'
import {DeleteProgressController} from './deleteProgressController'
import {DeleteProgress} from './deleteProgress'

const progressRepo = new ProgressRepo(entitiesObject)
const deleteProgress = new DeleteProgress(progressRepo)
const deleteProgressController = new DeleteProgressController(deleteProgress)

export {deleteProgress,deleteProgressController}