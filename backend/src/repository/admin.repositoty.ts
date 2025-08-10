import { adminModel } from "../model/admin.model";
import { StudentModel } from "../model/student.model";
export const findAdminByEmail = async (email:string)=>
{
    
    const admin = await adminModel.findOne({email});
    console.log("dg",admin)
     return admin
}
export const allUserRepository = async ()=>
{
    return await StudentModel.find();
}