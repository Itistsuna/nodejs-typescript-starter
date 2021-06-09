import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from 'typeorm'
import { Progress } from './progress';

@Entity()
export class Level extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    name: string;

    @OneToMany(_type => Progress, progress => progress.id)
    progress: Progress[]
}