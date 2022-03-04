import {Entity, Column, PrimaryGeneratedColumn, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
@Index('user_id')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    username: String;

    @Column()
    password: String;
}