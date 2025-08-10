import {
  findstudentByEmail,
  updatedStudentRepository,
  createStudent,
} from "../repository/student.repository";
import { hashPassword } from "../utils/hash";
 import { comparePassword } from "../utils/hash";
 import { User } from "../interface/student.interface";

export const signupStudent = async (studentData: User): Promise<User> => {
  const { email, password } = studentData;
  const existing = await findstudentByEmail(email);
  if (existing) {
    throw new Error("Email is already in use.");
  }

  const hashedPassword = await hashPassword(password);

  const newStudent = {
    ...studentData,
    password: hashedPassword,
  };
  return await createStudent(newStudent);
};



export const loginStudent = async (studentData: Omit<User, 'name'>): Promise<User> => {
  const { email, password } = studentData;

  const existing = await findstudentByEmail(email);
  if (!existing) {
    throw new Error("User not found.");
  }

  const match = await comparePassword(password, existing.password);
  if (!match) {
    throw new Error("Invalid credentials.");
  }

  return existing;
};


export const editstudentService = async (
  id: string,
  studentData: Partial<User>
): Promise<User | null> => {
  if (!id) throw new Error("ID is required.");
  if (!studentData) throw new Error("Update data is required.");

  return await updatedStudentRepository(id, studentData);
};

