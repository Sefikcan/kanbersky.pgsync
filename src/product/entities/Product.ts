import { CategoryProduct } from "../../Category/Entities/CategoryProduct";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductMeta } from "./ProductMeta";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Index()
    @Column()
    name: string;

    @OneToMany(() => CategoryProduct, categoryProduct => categoryProduct.product)
    categoryProduct: CategoryProduct[];

    @OneToMany(() => ProductMeta, meta => meta.product)
    metas: ProductMeta[];
}