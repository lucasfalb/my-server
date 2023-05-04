import { Router } from 'express'
import HelloController from './controllers/HelloController'
import UsersController from './controllers/UsersController'
const routes = new Router()

routes.get('/hello', HelloController.index)

// GET ALL USERS
routes.get('/users', UsersController.index)

// GET USER INFO
routes.get('/users/:id', UsersController.show)

// POST USER - CREATE USER
routes.post('/users', UsersController.create)

// PUT USER INFO - UPDATE USER
routes.put('/users/:id', UsersController.update)

// DELETE USER INFO
routes.delete('/users/:id', UsersController.destroy)

export default routes