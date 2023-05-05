import { Router } from 'express'
import auth from './middlewares/auth'
import SessionsController from './controllers/SessionsController'
import HelloController from './controllers/HelloController'
import UsersController from './controllers/UsersController'
const routes = new Router()

routes.get('/hello', HelloController.index)

// ROUTER AUTHENTICATION
routes.post('/sessions', SessionsController.create)
// POST USER - CREATE USER
routes.post('/users', UsersController.create)

// MIDDLEWARE PRIVATE ROUTES 
routes.use(auth)

// GET ALL USERS
routes.get('/users', UsersController.index)

// GET USER INFO
routes.get('/users/:id', UsersController.show)


// PUT USER INFO - UPDATE USER
routes.put('/users/:id', UsersController.update)

// DELETE USER INFO
routes.delete('/users/:id', UsersController.destroy)

export default routes