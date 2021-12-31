import React from 'react'
import { Col, Row, Button  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteEmpData } from '../../../actions/emp'

const EmpTable = ({emp, setCurrentId}) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <td>{emp.empno}</td>
      <td>{emp.ename}</td>
      <td>{emp.job}</td>
      <td>{emp.hiredate}</td>
      <td>{emp.salary}</td>
      <td>
        <Row>
          <Col><Button variant="outline" style={{color:'brown'}} onClick={()=> setCurrentId(emp._id)} >Edit</Button></Col>
          <Col><Button variant="outline" style={{color:'brown'}} onClick={()=> dispatch(deleteEmpData(emp._id))}>Delete</Button></Col>
        </Row>
      </td>
    </tr>

  )
}

export default EmpTable
