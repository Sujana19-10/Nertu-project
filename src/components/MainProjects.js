import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainProjects = () => {
    const data = [
        {
            "S.No": 1,
            "Title_Project": "Development of Signal Processing Algorithms for Active seeking Radar (SPARS)",
            "Amount ": 72.05,
            "Start": 1987,
            "End": 1991,
            "Project Code": null,
            "Name of Sponsoring Agency": "DRDO-DRDL, Hyderabad",
            "Name of Investigators": "Dr.Y.Yoganandam"
          },
          {
            "S.No": 2,
            "Title_Project": "Approach for Development of slotted wave guide antenna",
            "Amount ": 0.10,
            "Start": 1989,
            "End": 1990,
            "Project Code": null,
            "Name of Sponsoring Agency": "DRDO-ASWAC, Bangalore",
            "Name of Investigators": "Dr.V.M.Pandhari Pande"
          },
          {
            "S.No": 3,
            "Title_Project": "Development of Kalman Filter for GPS",
            "Amount ": 2.25,
            "Start": 1989,
            "End": 1992,
            "Project Code": null,
            "Name of Sponsoring Agency": "ISRO-SAC, Ahemadabad",
            "Name of Investigators": "Dr.NLM.Murukutla"
          },
          {
            "S.No": 4,
            "Title_Project": "Hybrid Navigation System",
            "Amount ": 0.14,
            "Start": 1989,
            "End": 1990,
            "Project Code": null,
            "Name of Sponsoring Agency": "DRDO-ASWAC, Bangalore",
            "Name of Investigators": "Dr.S.Vathsal"
          },
          {
            "S.No": 5,
            "Title_Project": "Effects of Arrestor Barrier Building on ILS glide path at Bangalore Airport",
            "Amount ": null,
            "Start": 1989,
            "End": 1990,
            "Project Code": null,
            "Name of Sponsoring Agency": "NAA, New Delhi",
            "Name of Investigators": "Dr.S.Ananda Mohan"
          },
          {
            "S.No": 6,
            "Title_Project": "A New Deshgn Configuration of CVOR antenna was given to GCEL based on which GCEL is fabricating the antennas",
            "Amount ": null,
            "Start": 1991,
            "End": 1992,
            "Project Code": null,
            "Name of Sponsoring Agency": null,
            "Name of Investigators": "Dr.S.Ananda Mohan"
          }
    ]
  return (
    <div className='m-5'>
        <h1 className='text-start text-danger mx-2 mt-5 px-3'> Main Projects</h1>
        
        {/* <Container > */}
          <center>
          <Table striped bordered hover className='bg-light mt-5 '>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title of the project</th>
                <th>Amount ( Rs. in lakhs)</th>
                <th>Start</th>
                <th>End</th>
                <th>Project Code</th>
                <th>Name of Sponsoring Agency</th>
                <th>Name of the Investigator</th>
                            
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item['S.No']}</td>
                    <td className="text-start">{item.Title_Project}</td>
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
        <button className='bg-info'>See Moree</button>
    </div>
  )
}

export default MainProjects