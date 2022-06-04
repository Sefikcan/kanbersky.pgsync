import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column()
    name: string;
}