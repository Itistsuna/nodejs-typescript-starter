import {UserRepo} from '../../userRepo'

export class DeletedUser {
    private userRepo: UserRepo

    constructor(userRepo: UserRepo){
        this.userRepo = userRepo
    }

    public async execute(props: any){
        return await this.userRepo.deleteUser(props)
    }
}