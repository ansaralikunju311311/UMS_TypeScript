import { findstudentByEmail

 ,updatedStudentRepository} from "../repository/student.repositoty";
import { hashPassword } from "../utils/hash";
 import { createStudent } from "../repository/student.repositoty";
 import { comparePassword } from "../utils/hash";
 

export const signupStudent = async (studentData)=>
{
    const {name,email,password} = studentData
      const existing = await findstudentByEmail(email);
      if(existing) throw new Error("email is already exisit");

      const hashedPassword = await hashPassword(password);

      const newStudent ={
        ...studentData,
        password:hashedPassword
      };
      return await createStudent(newStudent)
}



export const loginStudent = async (studentData)=>
{
    console.log(studentData)
    const {email,password} = studentData;

    
    const existing = await findstudentByEmail(email);

    console.log("exit",existing)
    if(!existing)
    {
        throw new Error("the user is not exist here")
    }
    const match = await comparePassword(password,existing.password);

    console.log("passowrd",password)


    if (!match) {
        console.log("fbfhib")
        throw new Error("Invalid credentials");
    }

    return existing
}


export const editstudentService = async (id,studentData)=>
{
    if(!id) throw new Error('id is required');
    if(!studentData) throw new Error('data is require');

    return await updatedStudentRepository(id,studentData);
}

