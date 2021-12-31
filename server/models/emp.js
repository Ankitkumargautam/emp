import mongoose from 'mongoose'

const empSchema = mongoose.Schema({
  empno: Number,
  ename: String,
  job: String,
  hiredate: String,
  salary: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

const EmpModel = mongoose.model("EmpModel", empSchema );

export default EmpModel;