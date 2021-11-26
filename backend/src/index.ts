import express, { Application} from "express";
import { createConnection } from "typeorm"
import "reflect-metadata";
import config from "./config/ormconfig"
import cors from "cors"

import { GetProductController } from "./controllers/GetProduct"
import { GetProductsController } from "./controllers/GetProducts"
import { CreateProductController } from "./controllers/CreateProduct"
import { UpdateProductController } from "./controllers/UpdateProduct"
import { DeleteProductController } from "./controllers/DeleteProduct"

const app: Application = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/product/:id", (req, res) => GetProductController.execute(req, res))
app.get("/products", (req, res) => GetProductsController.execute(req, res))
app.post("/product", (req, res) => CreateProductController.execute(req, res))
app.put("/product", (req, res) => UpdateProductController.execute(req, res))
app.delete("/product/:id", (req, res) => DeleteProductController.execute(req, res))

createConnection(config).then(() => {
    console.log("Connected to DB!");

    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
}).catch((error: any) => {
    console.error(`Error occured: ${error.message}`)
})
