import { 
    Column, 
    Entity, 
    Index, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { CategoryProduct } from "./CategoryProduct";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    name: string;

    @OneToMany(() => CategoryProduct, categoryProduct => categoryProduct.category)
    categoryProduct: CategoryProduct[];
}