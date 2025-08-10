import { comparePassword } from "../utils/hash";
import { findAdminByEmail, allUserRepository } from "../repository/admin.repository";
import { User } from "../interface/student.interface";
export const loginAdmin = async (data: Omit<User, 'name'>): Promise<User> => {
  const { email, password } = data;
  const existing = await findAdminByEmail(email);

  if (!existing) {
    throw new Error("Admin user not found.");
  }

  const match = await comparePassword(password, existing.password);

  if (!match) {
    throw new Error("Invalid credentials.");
  }

  return existing;
};

export const allUser = async (): Promise<User[]> => {
  return await allUserRepository();
};
