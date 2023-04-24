import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './user/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.get('/users-name', userController.findByName)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)
routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products/:id', productController.find)
routes.get('/products-name', productController.findByName)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get("/products-random", productController.random)
routes.get("/products-write", productController.write)
routes.get("/products-read", productController.read)
routes.post("/stock", stockController.create)
routes.get('/stock-value', stockController.getStockValue)

export default routes
