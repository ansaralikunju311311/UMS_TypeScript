import { loginAdmin, allUser } from "../services/admin.service";
import { Request, Response } from "express";
import { User } from "../interface/student.interface";

export const adminLogin = async (
  req: Request<{}, {}, Omit<User, 'name'>>,
  res: Response
): Promise<Response> => {
  try {
    const admin = await loginAdmin(req.body);
    return res.status(200).json({ message: 'Login successful', data: admin });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: { message: error.message } });
    }
    return res.status(500).json({ error: { message: 'Unknown error' } });
  }
};

export const allUsers = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await allUser();
    return res
      .status(200)
      .json({ message: 'Users retrieved successfully', data: users });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: { message: error.message } });
    }
    return res.status(500).json({ error: { message: 'Unknown error' } });
  }
};