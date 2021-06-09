import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from 'typeorm'
import { Level } from './level';
import { Skill } from './skill';
import { User } from './user';

@Entity()
export class Progress extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @ManyToOne(_type => Level, level => level.id)
    level: Level[]

    @ManyToOne(_type => User, user => user.id)
    User: User[]

    @ManyToOne(_type => Skill, skill => skill.id)
    Skill: Skill[]
}
