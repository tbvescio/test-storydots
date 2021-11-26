import e from 'express';
import { getRepository } from "typeorm";
import { Product} from "../../entity/Product"

export class GetProducts {
    public async execute(req: e.Request, res: e.Response): Promise<any> {
        const fetchedProducts = await getRepository(Product).createQueryBuilder().select()
            .getMany();
        return res.send(fetchedProducts)
    }
}