import express from 'express';
// import { studentSignup } from '../controllers/student.controller';
import { studentLogin } from '../controllers/student.controller';
import {studentSignup} from '../controllers/student.controller'
import {editProfile} from '../controllers/student.controller'
const router = express.Router();
router.post('/signUp',studentSignup);


router.post('/login',studentLogin);


router.put('/editprofile/:id',editProfile)
export default router;