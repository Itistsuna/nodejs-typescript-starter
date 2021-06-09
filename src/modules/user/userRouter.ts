import {Router ,Request,Response} from "express"
import {createUserController} from './useCases/createUser'
import {deletedUserController} from './useCases/deletedUser'
const userRouter: Router = Router()

userRouter.post('/',(req: Request,res: Response)=>createUserController.execute(req,res))
userRouter.delete('/delete/:id',(req: Request, res: Response)=> deletedUserController.execute(req,res))

export { userRouter }