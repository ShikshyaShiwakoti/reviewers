import express from "express"
import * as UserController from '../controllers/user.controllers';
import { authenticateToken } from "../middleware/authentication.middleware";
import { validate } from "../utils/validate";
import { createUserDto } from "../services/validators/create-user.validators";
const route = express.Router()
route.post('/login', UserController.login)
route.post('/signup',validate(createUserDto), UserController.createUser )
export default route;