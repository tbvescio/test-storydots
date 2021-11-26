import e from 'express';
import { getRepository } from "typeorm";
import { Product } from "../../entity/Product"

export class DeleteProduct {
    public async execute(req: e.Request, res: e.Response): Promise<any> {
        try {
            await getRepository(Product).delete(req.params.id);
            return res.send({message: "Product deleted"})
        } catch (err) {
            return res.status(500)
        }
    }
}