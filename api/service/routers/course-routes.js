import express from "express";
import * as courseController from "../controllers/course-controller.js";
import { authenticateUser } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.route("/")
  .get(authenticateUser, courseController.getAllCourses)
  // .post(authenticateUser, courseController.createCourse);

router.route("/:courseOfferId")
  .get(authenticateUser, courseController.getCourseDetails)
  // .patch(courseController.updateCourse)
  // .delete(courseController.deleteCourse);

// router.route("/:courseOfferId/register")
  // .post(courseController.registerForCourse);


//get all courses
// router.get('/allCourses', authenticateUser, courseController.getAllCourses);

//Add course
router.post("/newCourse",authenticateUser, courseController.createCourse);

export default router;