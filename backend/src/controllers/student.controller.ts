import { Request, Response } from 'express';
import {
  signupStudent,
  loginStudent,
  editstudentService,
} from '../services/student.service';
import { User } from '../interface/student.interface';

export const studentSignup = async (
  req: Request<{}, {}, User>,
  res: Response
): Promise<Response> => {
  try {
    const student = await signupStudent(req.body);
    return res.status(201).json({ message: 'Signup successful', data: student });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: { message: error.message } });
    }
    return res.status(500).json({ error: { message: 'Unknown error' } });
  }
};

export const studentLogin = async (
  req: Request<{}, {}, Omit<User, 'name'>>,
  res: Response
): Promise<Response> => {
  try {
    const student = await loginStudent(req.body);
    return res.status(200).json({ message: 'Login successful', data: student });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: { message: error.message } });
    }
    return res.status(500).json({ error: { message: 'Unknown error' } });
  }
};

export const editProfile = async (
  req: Request<{ id: string }, {}, Partial<User>>,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const updatedData = await editstudentService(id, req.body);

    if (!updatedData) {
      return res.status(404).json({ error: { message: 'Student not found' } });
    }

    return res
      .status(200)
      .json({ message: 'Profile updated successfully', data: updatedData });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: { message: error.message } });
    }
    return res.status(500).json({ error: { message: 'Unknown error' } });
  }
};
