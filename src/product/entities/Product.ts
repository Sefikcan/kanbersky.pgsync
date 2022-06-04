import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column()
    name: string;
}