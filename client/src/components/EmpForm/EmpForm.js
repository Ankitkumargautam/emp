import React, { useState, useEffect } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, updateEmpData } from '../../actions/emp';
import "./MyForm.css";

const EmpForm = ({currentId, setCurrentId}) => {
  const [empData, setEmpData] = useState({ empno: '', ename: '', job: '', hiredate: '', salary: '' })

  const employee = useSelector((state) => currentId ? state.emp.find((em) => em._id === currentId) : null )

  useEffect(()=>{
    if(employee) setEmpData(employee) 
  },[employee])

  const dispatch = useDispatch()

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(currentId){
      dispatch(updateEmpData(currentId, empData))
    } else{
      dispatch(createEmployee(empData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(0);
    setEmpData({ empno: '', ename: '', job: '', hiredate: '', salary: '' });
  }

  return (
    <div>
      <Form className="form-style" onSubmit={handleSubmit}>
        <h3 className="spacing">Create an Employee</h3>
        <Form.Group className="mb-3">
          <Form.Control size="lg" type="text" placeholder="Empno" name="empno" value={empData.empno} onChange= {(e) => setEmpData({...empData, empno: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control size="lg" type="text" placeholder="ename" name="ename" value={empData.ename} onChange= {(e) => setEmpData({...empData, ename: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control size="lg" type="text" placeholder="job" name="job" value={empData.job} onChange= {(e) => setEmpData({...empData, job: e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control size="lg" type="text" placeholder="hiredate" name="hiredate" value={empData.hiredate} onChange={(e) => setEmpData({...empData, hiredate:e.target.value})} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control size="lg" type="text" placeholder="salary" name="salary"  value= {empData.salary} onChange={(e) => setEmpData({...empData, salary: e.target.value})} required />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="md" type="submit" >
            Submit
          </Button>
          <Button variant="danger"  size="sm" onClick={clear}>
            Clear
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EmpForm;
