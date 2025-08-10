
import {adminLogin} from '../controllers/admin.controller'

import express from 'express';
const router = express.Router();
router.post('/login',adminLogin);
export default router