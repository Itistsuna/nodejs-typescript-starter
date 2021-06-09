import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity} from 'typeorm'
import { Category } from './category';
import { Progress } from './progress';

@Entity()
export class Skill extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(_type => Category, Category => Category.id)
    category: Category[]

    @OneToMany(_type => Progress, progress => progress.id)
    progress: Progress[]
}