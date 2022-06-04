import { Repository } from "typeorm";
import { Product } from "../Entities/Product";

export class ProductRepository extends Repository<Product> {}