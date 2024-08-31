import express from 'express';
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { getTables, getTableById, createTable, updateTable, deleteTable } from '../controllers/Tables.js';
const router = express.Router();
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';

router.get('/tableorder', getTables);
router.get('/tableorder/:id', getTableById);
router.post('/tableorder', createTable);
router.patch('/tableorder/:id', updateTable);
router.delete('/tableorder/:id', deleteTable);
router.get('/users', verifyToken ,getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router