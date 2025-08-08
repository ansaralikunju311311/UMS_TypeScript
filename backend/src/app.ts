import express from 'express'
import studentRoutes from './routes/student.routes'
const app = express();

app.use(express.json());
// app.get('/',(req,res)=>
// {
//     res.send("helo");
// }
// )

app.use("/api/student",studentRoutes)

// app.use('api/student',studentSignup)
export default app;