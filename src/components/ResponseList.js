import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar"


const ResponseList = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <h2 className='text-center mt-3'>RESPONSE LIST</h2>
            <br />
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th>Module ID</th>
                    <th>Response</th>
                    <th>Keyword</th>
                    <th>Name</th>
                    <th>Suggestion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Select Course</td>
                    <td>Course</td>
                    <td>Course name</td>
                    <td>Scracth, KOJO</td>
                    
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Select 2 Course</td>
                    <td>Course 2</td>
                    <td>Course name 2</td>
                    <td>Scracth, KOJO</td>
                    
                    </tr>
                    
                </tbody>
            </Table>

        </Container>
    </>
  )
}

export default ResponseList