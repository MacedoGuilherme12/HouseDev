import { Router } from 'express'
import multer from 'multer'
import upload from './config/upload'

import UserController from './controller/UserController'
import HouseController from './controller/HouseController'
import DashboardController from './controller/DashboardController'
import ReservaController from './controller/ReservaController'


const routes = new Router()
const atualizar = multer(upload)

// Get
routes.get('/houses', HouseController.index )
routes.get('/show', DashboardController.show)
routes.get('/reserva', ReservaController.show)

// Post
routes.post('/session', UserController.store)
routes.post('/house', atualizar.single("image"), HouseController.store)
routes.post('/reserva', ReservaController.store)

// Put
routes.put('/houses/:house_id',atualizar.single('image'), HouseController.update)

// Delete
routes.delete('/house', HouseController.destroy)


export default  routes