import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Progress } from './progress';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(_type => Progress, progress => progress.id)
    progress: Progress[]
}