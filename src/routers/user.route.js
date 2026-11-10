import express from 'express'
import {getUserContrtoller} from '../controllers/user.controller.js'

const router=express.Router();

router.get("/getuser", getUserContrtoller)

export default router;