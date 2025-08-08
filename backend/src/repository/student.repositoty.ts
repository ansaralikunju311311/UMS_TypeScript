



import { StudentModel } from "../model/student.model";
export const findstudentByEmail = async (email)=>
{
    return await StudentModel.findOne({email});
}
export const createStudent = async (student)=>
{
    return await StudentModel.create(student);
}