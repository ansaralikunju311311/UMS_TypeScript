



import { StudentModel } from "../model/student.model";
export const findstudentByEmail = async (email)=>
{
    return await StudentModel.findOne({email});
}
export const createStudent = async (student)=>
{
    return await StudentModel.create(student);
}




export const updatedStudentRepository=async (id,studentData)=>
{
   const updatedData = await StudentModel.findByIdAndUpdate(id,studentData,{new:true});
   if(!updatedData) throw new Error('the studet is not avalable ');
   return updatedData
}
