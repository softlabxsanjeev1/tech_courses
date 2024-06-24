import express from "express";
import { getAllCourses, getAllLecture, getLecture, getMyCourses, getSingleCourse } from "../controllers/courseController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/all", getAllCourses);
router.get("/:id", getSingleCourse);
router.get("/lectures/:id", isAuth, getAllLecture);
router.get("/lecture/:id", isAuth, getLecture);
router.get("/mycourse", isAuth, getMyCourses);


export default router;