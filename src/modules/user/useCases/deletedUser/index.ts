import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { DeletedUser } from './deletedUser'
import { DeleteUserController } from './deletedUserController'

const userRepo = new UserRepo(entitiesObject)
const deletedUser = new DeletedUser(userRepo)
const deletedUserController = new DeleteUserController(deletedUser)

export { deletedUser, deletedUserController }