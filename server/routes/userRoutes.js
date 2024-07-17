import express from "express"
import { loginUser, myProfile, register, verifyUser } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";
import { checkout, getMyCourses, paymentVerification } from "../controllers/courseController.js";


const router = express.Router();

router.post('/register', register);
router.post('/verify', verifyUser);
router.post('/login', loginUser);
router.get("/me", isAuth, myProfile)
router.get("/mycourse", isAuth, getMyCourses);
// check out route
router.get("/course/checkout/:id", isAuth, checkout);
router.get("/verification/:id", isAuth, paymentVerification);


export default router;


