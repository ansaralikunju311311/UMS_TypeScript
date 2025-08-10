import { loginAdmin,allUser } from "../services/admin.service";

export const adminLogin= async(req,res)=>
{

    try {
        
        const {email,password} = req.body;
    const admin =  await loginAdmin({email,password})

   console.log("here",admin)
    res.status(200).json({message:"login success",
        "detils":admin
    })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const allUsers = async (req,res)=>
{
    try {
        

   const  User = await allUser();
   console.log(User)
   res.status(200).json({message:'list',
    "allStudents":User
   })

    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
}