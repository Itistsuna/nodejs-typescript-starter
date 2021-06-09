import { UserRepo } from "../../userRepo"
// import { UserTypes } from '../../userType'
export class CreateUser{
    private userRepo: UserRepo

    constructor(userRepo: UserRepo){
        this.userRepo = userRepo
    }

    public async execute(props: any){
        return await this.userRepo.create(props)
    }
}