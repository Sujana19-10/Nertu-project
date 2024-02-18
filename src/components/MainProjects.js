import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainProjects = () => {
    const data = [
       
    ]
  return (
    <div className='m-5'>
       
        
        {/* <Container > */}
          <center>
          <Table striped bordered hover className='bg-light mt-3 ml-3 mr-3'>
            <thead style={{ border: 30 }}>
              <tr>
               
                            
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                  <tr key={index} className="p-3" style={{ border: 10}}>
                    <td>{item['S.No']}</td>
                    <td className="text-start" style={{fontWeight:550}}>{item.Title_Project}</td>
                    <td>{item["Amount "] }</td>
                    <td>{item.Start}</td>
                    <td>{item.End}</td>
                    <td>{item['Project Code']}</td>
                    <td>{item['Name of Sponsoring Agency']}</td>
                    <td>{item['Name of Investigators']}</td>
                  </tr>
                ))}
            </tbody>
          </Table> </center>     
        {/* </Container> */}
        
    </div>
  )
}

export default MainProjects