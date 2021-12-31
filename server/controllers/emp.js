import EmpModel from '../models/emp.js' 
import mongoose from 'mongoose'

export const getEmpData = async(req,res) => {
  try {
    const empData = await EmpModel.find();
    res.status(200).json(empData);
  } catch (error) {
    res.status(404).send({message: error.message});
  }
}

export const createEmpData = async(req,res) => {
  const data = req.body;
  const newData = new EmpModel(data);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).send({message: error.message});
  }
}

export const updateEmpData = async(req,res) => {
  const { id } = req.params;
  const { empno, ename, job, hiredate, salary } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  const newData = { empno, ename, job, hiredate, salary, _id: id }

  await EmpModel.findByIdAndUpdate(id, newData, {new: true});

  res.json(newData)
}

export const deleteEmpData = async(req,res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await EmpModel.findByIdAndRemove(id);
  res.json({message: "Post deleted successfully"});
}