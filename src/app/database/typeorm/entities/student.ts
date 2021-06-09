import {Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity} from 'typeorm'
import { Progress } from './progress';

@Entity()
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(_type => Progress, progress => progress.id)
    progress: Progress[]
}