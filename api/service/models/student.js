import mongoose from "mongoose";

//Student Schema Definition
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  enrolledCourses: [
    {
      courseOffer: {
        course: {
          courseCode: { type: String },
          name: { type: String },
          prerequisites: [{ type: String }],
        },
        term: {
          year: { type: Number },
          semester: { type: String, enum: ['FALL', 'SPRING', 'SUMMER'] },
        },
        instructor: { type: String },
        maxSeats: { type: Number },
        currentSeats: { type: Number },
      },
      enrollmentStatus: { type: String, enum: ['Enrolled', 'Completed', 'In Progress'] },
    },
  ],
});

/**
 * Creates a Mongoose model for the Student collection.
 * Provides an interface to interact with the Student documents in MongoDB.
 */
const StudentModel = mongoose.model('student', StudentSchema);
export default StudentModel;

