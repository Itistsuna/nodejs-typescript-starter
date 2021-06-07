//Domain : Progress

interface IProgress {
    id: number
    name: string
}

export type ProgressProps = {
    id: number
    name: string
}

export class Progress implements IProgress {
    public id: number
    public name: string

    constructor(props: ProgressProps) {
        this.id = props.id
        this.name = props.name
    }
}