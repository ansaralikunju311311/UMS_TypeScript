import mongoose from 'mongoose';
import { User } from '../interface/student.interface';

const studentSchema = new mongoose.Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const StudentModel = mongoose.model<User>('Student', studentSchema);
