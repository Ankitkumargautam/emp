import React from 'react'
import { Table  } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import EmpTable from './EmpTable/EmpTable';
import './EmpTables.css';


const EmpTables = ({setCurrentId}) => {
  const emp = useSelector(state => state.emp)
  return (
    <div className="my-table">
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>EMPNO</th>
            <th>ENAME</th>
            <th>JOB</th>
            <th>HIRE DATE</th>
            <th>SALARY</th>
            <th>EDIT/DELETE</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((emp) => (
            <EmpTable emp={emp} key={emp._id} item setCurrentId={setCurrentId} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default EmpTables
