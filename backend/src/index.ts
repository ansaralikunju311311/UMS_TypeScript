import app from '../src/app';
import { connectDB } from './config/db';
const PORT = 5000;
connectDB();
app.listen(PORT,()=>
{
    console.log('is working finen')
})