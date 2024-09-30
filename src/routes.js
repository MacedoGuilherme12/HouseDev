import { Router } from 'express'
import multer from 'multer'

import UserController from './controller/UserController'
import HouseController from './controller/HouseController'
import upload from './config/upload'


const routes = new Router()
const atualizar = multer(upload)


routes.post('/session', UserController.store)
routes.get('/houses', HouseController.index )
routes.post('/house', atualizar.single("image"), HouseController.store)
routes.put('/houses/:house_id',atualizar.single('image'), HouseController.update)
routes.delete('/house', HouseController.destroy)


export default  routes