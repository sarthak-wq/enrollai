import express from 'express';
import * as userController from "./../controllers/user-controller.js";
import * as adminController from "./../controllers/admin-controller.js";
import * as courseController from "./../controllers/course-controller.js";
import { authenticateUser } from "../middleware/AuthMiddleware.js";


const router = express.Router();

// Get All Users
router.get('/getAllUsers', authenticateUser, userController.getAllUsers);

// Get User own Profile
router.get('/profile', authenticateUser, userController.getUserProfile);

// Update User ownProfile
router.put('/updateProfile', authenticateUser, userController.updateUserProfile);

//delete selected user profile 
router.delete('/deleteUser', authenticateUser,adminController.deleteUserProfile);

// //get all courses
// router.get('/allCourses', authenticateUser, courseController.getAllCourses);

// //Add course
// router.post('/newCourse', authenticateUser, courseController.createCourse);


export default router;
