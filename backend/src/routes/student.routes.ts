import express from 'express';
import { studentSignup, studentLogin, editProfile } from '../controllers/student.controller';
const router = express.Router();
router.post('/signUp',studentSignup);


router.post('/login',studentLogin);


router.put('/editprofile/:id',editProfile)
export default router;