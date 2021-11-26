import e from 'express';
import { getRepository } from "typeorm";
import { Product } from "../../entity/Product"

export interface CreateProductDTO{
    name: string;
    description: string;
    price: number;
    image_url: string;
}

export class CreateProduct {
    public async execute(req: e.Request, res: e.Response): Promise<any> {
        try {
            const dto = {...req.body} as CreateProductDTO;

            const _product = new Product();
            _product.name = dto.name;
            _product.description = dto.description;
            _product.price = dto.price;
            _product.image_url = dto.image_url;

            await getRepository(Product).save(_product);
            return res.send(_product)
        } catch (err) {
            return res.status(500)
        }

    }
}