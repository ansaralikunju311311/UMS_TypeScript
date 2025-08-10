



import { User } from "../interface/student.interface";
import { StudentModel } from "../model/student.model";

export const findstudentByEmail = async (email: string): Promise<User | null> => {
  return await StudentModel.findOne({ email });
};
export const createStudent = async (student: User): Promise<User> => {
  return await StudentModel.create(student);
};




export const updatedStudentRepository=async (id:string,studentData:Partial<User>)=>
{
   const updatedData = await StudentModel.findByIdAndUpdate(id,studentData,{new:true});
   if (!updatedData) throw new Error('The student is not available.');
   return updatedData
}
