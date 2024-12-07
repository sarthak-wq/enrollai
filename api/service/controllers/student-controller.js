import * as studentService from "./../services/student-service.js";

// Add Student
export const addStudent = async (req, res, next) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json({
      id: student._id,
      message: 'Student added successfully.',
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({
        code: 400,
        message: 'Validation error. Please check the request body.',
      });
    } else {
      res.status(500).json({
        code: 500,
        message: 'Internal server error.',
      });
    }
  }
};
  
// Get Student Profile
export const getStudentProfile = async (req, res, next) => {
  try {
    const student = await studentService.getStudentById(req.user.userId);
    if (!student) {
      return res.status(404).json({
        code: 404,
        message: 'Student not found.',
      });
    }
    res.status(200).json(student);
  } catch (err) {
    if (err.name === 'CastError') {
      res.status(400).json({
        code: 400,
        message: 'Invalid student ID format.',
      });
    } else {
      res.status(500).json({
        code: 500,
        message: 'Internal server error.',
      });
    }
  }
};

// Enrolling a student in a course
export const enrollInCourse = async (req, res) => {
  try {
    // Validate request body
    if (!req.body.courseOffer) {
      return res.status(400).json({
        code: 400,
        message: 'Missing or invalid courseOffer in request body.',
      });
    }

    // console.log(req.body.courseOffer)
    const courseData = {
      courseOffer: req.body.courseOffer,
      enrollmentStatus: 'Enrolled',
    };

    const updatedStudent = await studentService.enrollInCourse(req.user.userId, courseData);
    res.status(201).json({
      code: 201,
      message: 'Student enrolled successfully.',
      enrollmentStatus: courseData.enrollmentStatus,
    });
  } catch (error) {
    if (error.message === 'Student not found') {
      // Handle student not found
      res.status(404).json({
        code: 404,
        message: 'The specified student could not be found.',
      });
    } else if (error.message === 'Student is already enrolled in this course') {
      // Handle conflict
      res.status(409).json({
        code: 409,
        message: 'The student is already enrolled in the specified course.',
      });
    } else if (error.name === 'CastError') {
      // Handle invalid ID format
      res.status(400).json({
        code: 400,
        message: 'Invalid student ID format provided.',
      });
    } else {
      // Internal server error fallback
      res.status(500).json({
        code: 500,
        message: 'Internal server error.',
      });
    }
  }
};
  
// Update Student Profile
export const updateStudentProfile = async (req, res) => {
  try {
    const updatedStudent = await studentService.updateStudentProfile(req.params.studentId, req.body);
    if (!updatedStudent) {
      return res.status(404).json({
        code: 404,
        message: 'Student not found.',
      });
    }
    res.status(200).json({
      message: 'Profile updated successfully.',
      updatedStudent,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({
        code: 400,
        message: 'Validation error. Please check the request body.',
      });
    } else if (err.name === 'CastError') {
      res.status(400).json({
        code: 400,
        message: 'Invalid student ID format.',
      });
    } else {
      res.status(500).json({
        code: 500,
        message: 'Internal server error.',
      });
    }
  }
};