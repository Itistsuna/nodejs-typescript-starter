import { entitiesObject } from '../../../../app/database/typeorm/entities'
import {ProgressRepo} from '../../progressRepo'
import {EditProgress} from './editProgress'
import {EditProgressController} from './editProgressController'

const progressRepo = new ProgressRepo(entitiesObject)
const editProgress = new EditProgress(progressRepo)
const editProgressController = new EditProgressController(editProgress)

export {editProgress,editProgressController}