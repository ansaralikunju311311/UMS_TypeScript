import { adminModel } from "../model/admin.model";
import { StudentModel } from "../model/student.model";
import { User } from "../interface/student.interface";
export const findAdminByEmail = async (email: string): Promise<User | null> => {
  return await adminModel.findOne({ email });
};
export const allUserRepository = async ():Promise<User[]>=>
{
    return await StudentModel.find();
}