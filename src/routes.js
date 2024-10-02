import { Router } from 'express'
import multer from 'multer'

import UserController from './controller/UserController'
import HouseController from './controller/HouseController'
import DashboardController from './controller/DashboardController'
import upload from './config/upload'
import ReservaController from './controller/ReservaController'


const routes = new Router()
const atualizar = multer(upload)


routes.post('/session', UserController.store)
routes.get('/houses', HouseController.index )
routes.post('/house', atualizar.single("image"), HouseController.store)
routes.put('/houses/:house_id',atualizar.single('image'), HouseController.update)
routes.get('/show', DashboardController.show)
routes.delete('/house', HouseController.destroy)
routes.post('/reserva', ReservaController.store)
routes.get('/reserva', ReservaController.show)


export default  routes