import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Progress } from './progress';

@Entity()
export class Level {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    name: string;

    @OneToMany(_type => Progress, progress => progress.id)
    progress: Progress[]
}