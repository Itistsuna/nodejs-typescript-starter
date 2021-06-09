import { CreateUser } from './createUser'
import { Request, Response } from 'express'

export class CreateUserController {
    private useCase : CreateUser

    constructor (createUser: CreateUser){
        this.useCase = createUser
    }

    public async execute(req: Request, res: Response){
        const { email , password, isAdmin } = req.body
        if(!email){
            return res.status(400).json({
                error: {
                    message: "email incorrect"
                }
            })
        }
        if(!password){
            return res.status(400).json({
                error: {
                    message: "password incorrect"
                }
            })
        }        
        if(isAdmin != 0 && isAdmin != 1){
            return res.status(400).json({
                error:{
                    message: 'Valeur incorrect'
                }
            })
        }
        const user = await this.useCase.execute({email,password,isAdmin,})
        console.log('Controller User result : ' + user)
        res.status(200).json({
            message: "Good"
        })
    }
}