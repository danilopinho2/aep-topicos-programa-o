import { Request, Response } from 'express'
import { ProductService } from './product.service'

class ProductController {
    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().list()

        return res.status(200).json(product)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)

        return res.status(200).json(product)
    }

    async findByName(req: Request, res: Response) {
        const product = await new ProductService().findByName(req.query.name)

        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(
            req.params.id,
            req.body
        )

        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
        const deleteStatus = await new ProductService().delete(req.params.id)

        return res.status(200).json(deleteStatus)
    }

    async random(req: Request, res: Response) {
        const product = await new ProductService().random()

        return res.status(200).json(product)
    }

    async write(req: Request, res: Response) {
        const product = await new ProductService().write()

        return res.status(200).json(product)
    }

    async read(req: Request, res: Response) {
        const product = await new ProductService().read()

        return res.status(200).json(product)
    }
}

export default new ProductController()
