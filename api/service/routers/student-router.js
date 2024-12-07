import express from "express";
import * as studentController from "./../controllers/student-controller.js";
import { authenticateUser } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Add Student
// router.post('/', studentController.addStudent);

// Get Student Profile
// router.get('/profile', authenticateUser , studentController.getStudentProfile);

// Enroll in a Course
router.post('/', authenticateUser, studentController.enrollInCourse);

// Update Student Profile
// router.put('/:studentId', studentController.updateStudentProfile);

export default router;
