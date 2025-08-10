import { adminModel } from "../model/admin.model";
export const findAdminByEmail = async (email:string)=>
{
    
    const admin = await adminModel.findOne({email});
    console.log("dg",admin)
     return admin
}