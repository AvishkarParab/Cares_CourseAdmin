import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar"
import { FaEdit,FaPlusCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Course = () => {

let navigate = useNavigate();
  return (
    <>
      <Navbar/>
        <Container>
            <h2 className='text-center mt-3'>COURSE PAGE</h2>
            <br />
            <div className='d-flex justify-content-end'>
                <Button variant="primary" type="submit" 
                    onClick={()=>{
                        navigate("/addcourse");
                    }}
                >
                    Add new course
                </Button>
            </div>
            <br />
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Total Module</th>
                    <th>Edit</th>
                    <th>Add module</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Scratch</td>
                    <td>10</td>
                    <td className='d-flex justify-content-center align-items-center'> 
                        <Button className='btn' variant="" type="button">
                            <FaEdit className='fs-5 text-warning'/>
                        </Button> </td>
                    <td>
                        <Button variant="" type="button">
                            <FaPlusCircle className='fs-5 text-success'/>
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Kojo</td>
                    <td>10</td>
                    <td className='d-flex justify-content-center align-items-center'> 
                        <Button variant="" type="button">
                            <FaEdit className='fs-5 text-warning'/>
                        </Button> </td>
                    <td>
                        <Button variant="" type="button">
                            <FaPlusCircle className='fs-5 text-success'/>
                        </Button>
                    </td>
                    </tr>
                    
                </tbody>
            </Table>

        </Container>
        
    </>
  )
}

export default Course