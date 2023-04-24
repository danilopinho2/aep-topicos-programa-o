import { ProductType } from "./types/product.type"
import ProductModel from "./product.schema"
import { writeFile, readFile } from "fs/promises"

export class ProductService {
    constructor() {}

    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const listedProducts = await ProductModel.find()

        return listedProducts
    }

    async find(id) {
        const findedProduct = await ProductModel.findById(id)

        return findedProduct
    }

    async findByName(name) {
        const findedProducts = await ProductModel.find({
            firstName: name,
        })

        return findedProducts
    }

    async update(id, data: ProductType) {
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { _id: id },
            {
                name: data.name,
                quantity: data.quantity,
                price: data.price,
            },
            { new: true }
        )

        return updatedProduct
    }

    async delete(id) {
        await ProductModel.findByIdAndDelete(id)

        return "successfully deleted product!"
    }

    async random() {
        const products = await ProductModel.find().limit(10)

        let randomProducts: any = []

        while (randomProducts.length < 4) {
            let randomNumber = Math.floor(Math.random() * products.length)
            let checkObjectValue = false

            for (let i = 0; i < randomProducts.length; i++) {
                if (randomProducts[i] === products[randomNumber]) {
                    checkObjectValue = true
                }
            }

            if (!checkObjectValue) randomProducts.push(products[randomNumber])
        }

        return randomProducts
    }

    async write() {
        const products = await this.list()

        writeFile("products.json", JSON.stringify(products, null, 2))
    }

    async read() {
        const products = JSON.parse(await readFile("products.json", "utf-8"))

        return products
    }
}
