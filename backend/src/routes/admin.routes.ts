
import {adminLogin,allUsers} from '../controllers/admin.controller'

import express from 'express';
const router = express.Router();
router.post('/login',adminLogin);

router.get('/getAll',allUsers)
export default router