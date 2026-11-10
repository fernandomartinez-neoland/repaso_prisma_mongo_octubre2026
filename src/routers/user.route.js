import express from 'express'
import {getUserContrtoller, createUserController} from '../controllers/user.controller.js'

const router=express.Router();

router.get("/getuser", getUserContrtoller)
router.post("/createuser", createUserController)

export default router;