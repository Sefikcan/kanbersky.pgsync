import { CategoryProduct } from "../../Category/Entities/CategoryProduct";
import { 
    Column, 
    Entity,
    Index, 
    OneToMany, 
    PrimaryGeneratedColumn
} from "typeorm";
import { ProductMeta } from "./ProductMeta";

@Entity()
export class Product {
    constructor(metas: ProductMeta[]) {
        this.metas = metas;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    name: string;

    @OneToMany(() => CategoryProduct, categoryProduct => categoryProduct.product)
    categoryProduct: CategoryProduct[];

    @OneToMany(() => ProductMeta, meta => meta.product, { cascade: [ 'insert' ] })
    metas: ProductMeta[];
}