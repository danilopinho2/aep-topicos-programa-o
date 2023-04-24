import { ProductService } from "../products/product.service"
import StockModel from "./stock.schema"

export class StockService {
    constructor() {}

    async create() {
        const products = await new ProductService().list()

        const stock = products.map((product) => {
            let stock = {
                name: product.name,
                quantity: product.quantity,
                price: product.price,
                stock_value: product.quantity * product.price,
            }

            StockModel.create(stock)

            return stock
        })

        return stock
    }

    async list() {
        const listedStock = await StockModel.find()

        return listedStock
    }

    async getStockValue() {
        const stock = await this.list()

        const stockValue = stock.reduce((acc, curr) => {
            acc += curr.stock_value

            return acc
        }, 0)

        return stockValue
    }
}
