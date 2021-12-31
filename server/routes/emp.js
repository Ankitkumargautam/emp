import express from 'express'
import { createEmpData, getEmpData, updateEmpData, deleteEmpData } from '../controllers/emp.js'

const router = express.Router();

router.get("/",getEmpData);
router.post("/",createEmpData);
router.patch("/:id",updateEmpData);
router.delete("/:id",deleteEmpData);

export default router;