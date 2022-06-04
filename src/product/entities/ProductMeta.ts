import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductMeta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column()
    name: string;
}