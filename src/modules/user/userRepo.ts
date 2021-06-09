import { UserTypes } from "./userType"
import bcrypt  from "bcrypt"

export class UserRepo {
    private entities: any
    
    constructor(entities: any){
        this.entities = entities
    }

    public async create(userProps: UserTypes){
        const UserEntity = this.entities.User
        bcrypt.genSalt(10,function(err,salt){
            if(err) console.log(err)
            bcrypt.hash(userProps.password,salt,async function(err,hash){
                if (err) console.log(err)
                userProps.password = hash
                return await UserEntity.create({email: userProps.email, password: userProps.password, isAdmin: userProps.isAdmin, lastLoggin: Date()}).save()
            })
        })
    }

    public async deleteUser(props: any){
        const UserEntity = this.entities.User
        let deletedUser = await UserEntity.findOne({id:props})
        return await UserEntity.remove(deletedUser)
    }
}