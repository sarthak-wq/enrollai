import Student from "./../models/student.js";
import UserModel from "../models/user.js";

// Create Student
export const createStudent = async (data) => {
  const newStudent = new Student(data);
  return await newStudent.save();
};

export const createUser = async (data) => {
  const newUser = new UserModel(data);
  return await newUser.save();
};

// Get Student by ID
export const getStudentById = async (userId) => {
  try {
    const user = await UserModel.findById(userId);  // Fetch user by ID from the database
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);  // If user not found, throw error
    }
    return user;
  } catch (error) {
    throw new Error(error.message);  // Handle any error, like invalid ID format or database issues
  }
};

// Enrolling a student in a course
export const enrollInCourse = async (userId, courseData) => {
  if (!userId) {
    const error = new Error('Student ID is required');
    error.code = 400;
    throw error;
  }

  const student = await UserModel.findById(userId);
  // console.log(student)
  if (!student) {
    const error = new Error('Student not found');
    error.code = 404;
    throw error;
  }

  // Check if the student is already enrolled in the course
  const alreadyEnrolled = student.enrolledCourses.some(
    (enrollment) =>
      enrollment.courseOffer.courseOfferId === courseData.courseOffer.courseOfferId
  );

  if (alreadyEnrolled) {
    const error = new Error('Student is already enrolled in this course');
    error.code = 400;
    throw error;
  }

  // Add the course data to the enrolledCourses array
  student.enrolledCourses.push({
    courseOffer: courseData.courseOffer,
    enrollmentStatus: 'Enrolled',
  });
  // Save the updated student document
  try {
    return await student.save();
  } catch (err) {
    const error = new Error('Error saving student enrollment');
    error.code = 500;
    throw error;
  }
};

// Update Student Profile
export const updateStudentProfile = async (userId, updateData) => {
  // Validate that updateData is not empty
  if (!updateData || Object.keys(updateData).length === 0) {
    const error = new Error('Update data is required.');
    error.name = 'ValidationError';
    throw error;
  }

  // Find the student by ID
  const student = await UserModel.findById(userId);

  if (!student) {
    const error = new Error('Student not found.');
    error.code = 404;
    throw error;
  }

  // Update the student fields if provided in updateData
  if (updateData.firstName) student.firstName = updateData.firstName;
  if (updateData.lastName) student.lastName = updateData.lastName;
  if (updateData.email) student.email = updateData.email;

  // Save the updated student document
  await student.save();

  return student;
};