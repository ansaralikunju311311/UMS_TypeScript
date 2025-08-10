import { comparePassword } from "../utils/hash";
import { findAdminByEmail,allUserRepository} from "../repository/admin.repositoty";
export const loginAdmin = async (data)=>
{
    const {email,password} = data
   const existing = await findAdminByEmail(email);
   console.log(existing?.password);


   if(!existing) throw new Error('not valid user')
  

     const match = await comparePassword(password,existing?.password);

     if (!match) {
        console.log("fbfhib")
        throw new Error("Invalid credentials");
    }

    return existing
}

export const allUser = async()=>
{
    return await allUserRepository();
}
