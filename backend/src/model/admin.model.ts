import mongoose, { Document } from 'mongoose';
import { User } from '../interface/student.interface';

export interface Admin extends Omit<User, 'name'>, Document {}

const adminSchema = new mongoose.Schema<Admin>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const adminModel = mongoose.model<Admin>('Admin', adminSchema);
