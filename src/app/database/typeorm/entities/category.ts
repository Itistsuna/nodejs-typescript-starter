import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Skill } from './skill';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(_type => Skill, skill => skill.name)
    category: Skill[]
}