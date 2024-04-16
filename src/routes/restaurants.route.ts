import { Router } from 'express'

import * as restroController from '../controllers/restro.
import reviewsRouter from './reviews.route'
import { validate } from '../utils/validate'
import { createRestaurantDto } from '../validators/create-restro.validator'
import { authenticateToken, isAdmin } from '../middleware/authentication.middleware'

const router = Router()
router.use('/:id/reviews', reviewsRouter)

router.get('/', authenticateToken, restroController.findAll)
router.post(`/`, validate(createRestaurantDto), authenticateToken, isAdmin, restroController.create)
router.delete(`/:id`, authenticateToken, isAdmin, restroController.deleteById)
router.patch(`/:id`, authenticateToken, isAdmin, restroController.updateByID)

router.get(`/:id`, authenticateToken, isAdmin, restroController.findByID)

export default router