import mongoose from 'mongoose';
const uri = "mongodb://localhost:27017/mydatabase"; 
export const connectDB = async()=>
{
    try {
        await mongoose.connect(uri);
             console.log('connected')
        }
        
     catch (error) {
        console.log(error)
    }
}