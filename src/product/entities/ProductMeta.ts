import { 
    Column, 
    Entity, 
    Index, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    RelationId 
} from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductMeta {
    @PrimaryGeneratedColumn()
    id: string;

    @Index()
    @Column()
    name: string;

    @Index()
    @JoinColumn()
    @ManyToOne(_=> Product)
    product: Product;

    @RelationId((m: ProductMeta) => m.product)
    productId: number;
}