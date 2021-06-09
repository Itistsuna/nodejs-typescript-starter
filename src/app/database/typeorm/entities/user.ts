import {Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity} from 'typeorm'
import { Student } from './student';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    email: String;

    @Column()
    password: String;

    @Column()
    isAdmin: Boolean;

    @Column()
    lastLoggin: Date;

    @OneToOne(_type => Student, student => student.id)
    student: Student[]
}