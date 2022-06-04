import { Product } from "src/Product/Entities/Product";
import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Category } from "./Category";

@Entity()
export class CategoryProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @JoinColumn()
    @ManyToOne(_=> Category)
    category: Category;

    @RelationId((m: CategoryProduct) => m.category)
    categoryId: number;

    @Index()
    @JoinColumn()
    @ManyToOne(_=> Product)
    product: Product;

    @RelationId((m: CategoryProduct) => m.product)
    productId: number;
}