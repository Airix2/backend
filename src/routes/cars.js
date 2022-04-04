import { Router } from 'express';
let index = require('../controllers/adrianasapp')

const router = Router()

router.get('/cars', index.getCars)
router.get('/cars/getMakes', index.getMakes)

router.get('/cars/count', index.getCarCount)

router.get('/cars/:id', index.getCar)

router.post('/cars', index.createCar)

router.delete('/cars/:id', index.deleteCar)

router.put('/cars/:id', index.updateCar)

export default router