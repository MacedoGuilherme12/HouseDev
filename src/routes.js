import { Router } from 'express'
import multer from 'multer'

import UserController from './controller/UserController'
import HouseController from './controller/HouseController'
import upload from './config/upload'


const routes = new Router()
const uploade = multer(upload)


routes.get('/houses', HouseController.index )

routes.post('/session', UserController.store)
routes.post('/house', uploade.single("image"), HouseController.store)




routes.delete('/house', HouseController.destroy)


export default  routes