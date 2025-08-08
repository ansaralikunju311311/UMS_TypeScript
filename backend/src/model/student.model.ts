import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    email:String,
    name:{
        type :String,
        unique:true
    },
    password:String,
})
export const StudentModel = mongoose.model('Student',studentSchema)