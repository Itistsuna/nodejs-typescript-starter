interface IUser {
    id: number,
    isAdmin: Boolean,
    lastLoggin: Date
}

export type UserProps = {
    id: number,
    isAdmin: Boolean,
    lastLoggin: Date
}

export class User implements IUser {
    public id : number
    private email : string
    private password: string
    public isAdmin : Boolean
    public lastLoggin : Date

    constructor(props: UserProps){
        this.id = props.id
        this.email = this.email
        this.password = this.password
        this.isAdmin = props.isAdmin
        this.lastLoggin = props.lastLoggin
    }
}