import { signupStudent } from "../services/student.service";
import { loginStudent } from "../services/student.service";
export const studentSignup = async (req,res)=>
{
    try {
        
        const {name,email,password} = req.body;
        const student = await signupStudent({name,email,password});
        console.log(req.body)
        res.status(201).json({message:'signup suscess',student});

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const studentLogin = async (req,res)=>
{
    try {
        
         const {email,password} = req.body;

         console.log(req.body)

         const student = await loginStudent({email,password});

         console.log("check",student)
         res.status(201).json({message:'login success'},student);

    } catch (error) {

        console.log("fnfjfjbfjbfjbjb")
        res.status(400).json({error:error.message});
    }
}