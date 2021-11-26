import e from 'express';
import { getRepository } from "typeorm";
import { Product } from "../../entity/Product"

export class GetProduct {
    public async execute(req: e.Request, res: e.Response): Promise<any> {
        const id = req.params.id
        if (id === undefined) return res.status(400)

        const fetchedProduct = await getRepository(Product).createQueryBuilder().select()
            .where(`product.id = :id`, { id })
            .getOne();

        if (fetchedProduct === undefined) {
            return res.status(404).send({ message: "Product not found" })
        }
        return res.send(fetchedProduct)
    }
}