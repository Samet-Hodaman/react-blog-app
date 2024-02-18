import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const router = Router()
router.get('/signup', (req,res) => {
    console.log("It is working");
    res.json({ message: "It works"})
})

router.post('/signup', signup)

export default router
