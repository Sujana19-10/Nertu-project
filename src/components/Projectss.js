import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataList } from './ProjectData';

const Projectss = () => {
  const [data, setData] = useState(dataList);
  const [search, setSearch] = useState('');
  const [startFilter, setStartFilter] = useState('All');
  const [endFilter, setEndFilter] = useState('All');

  const excludeColumns = ["S.No", "Amount"];

  const handleChange = (value) => {
    setSearch(value);
    filterData(value);
  }

  const handleStartFilterChange = (value) => {
    setStartFilter(value);
    filterData(search, value, endFilter);
  }

  const handleEndFilterChange = (value) => {
    setEndFilter(value);
    filterData(search, startFilter, value);
  }

  const filterData = (value, start, end) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === '') setData(dataList);
    else {
      const filteredData = dataList.filter((item) => {
        return (
          Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          ) &&
          (start === 'All' || start === item['Start']) &&
          (end === 'All' || end === item['End'])
        );
      })
      setData(filteredData);
    }
  };

  return (
    <div id="projects" className='m-5'>
      <div>
        <h1 className='text-center text-info py-5 mt-5'>Projects</h1>
        <Form>
          <center>
            <InputGroup className='w-75'>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Type to search..."
                value={search}
                onChange={(e) => handleChange(e.target.value)}
              />
            </InputGroup>
          </center>
        </Form>
      </div>

      <Table striped bordered hover className='bg-light mt-3 ml-3 mr-3'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Amount ( Rs. in lakhs)</th>
            <th>
              <Dropdown onSelect={(eventKey) => handleStartFilterChange(eventKey)}>
                <Dropdown.Toggle variant="light" id="dropdown-start">
                  Start
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
                  <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
                  <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
                  <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
                  <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
                  <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
                  <Dropdown.Item eventKey="2005">2005</Dropdown.Item>
                  <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
                  <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
                  <Dropdown.Item eventKey="2002">2002</Dropdown.Item>
                  <Dropdown.Item eventKey="2001">2001</Dropdown.Item>
                  <Dropdown.Item eventKey="1999">1999</Dropdown.Item>
                  <Dropdown.Item eventKey="1998">1998</Dropdown.Item>
                  <Dropdown.Item eventKey="1997">1997</Dropdown.Item>
                  <Dropdown.Item eventKey="1996">1996</Dropdown.Item>
                  <Dropdown.Item eventKey="1995">1995</Dropdown.Item>
                  <Dropdown.Item eventKey="1994">1994</Dropdown.Item>
                  <Dropdown.Item eventKey="1993">1993</Dropdown.Item>
                  <Dropdown.Item eventKey="1992">1992</Dropdown.Item>
                  <Dropdown.Item eventKey="1991">1991</Dropdown.Item>
                  <Dropdown.Item eventKey="1989">1989</Dropdown.Item>
                  <Dropdown.Item eventKey="1987">1987</Dropdown.Item>

                  
                  
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <Dropdown onSelect={(eventKey) => handleEndFilterChange(eventKey)}>
                <Dropdown.Toggle variant="light" id="dropdown-end">
                  End
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
                  <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
                  <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
                  <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
                  <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
                  <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
                  <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
                  <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
                  <Dropdown.Item eventKey="2005">2005</Dropdown.Item>
                  <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
                  <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
                  <Dropdown.Item eventKey="2002">2002</Dropdown.Item>
                  <Dropdown.Item eventKey="2001">2001</Dropdown.Item>
                  <Dropdown.Item eventKey="2000">2000</Dropdown.Item>
                  <Dropdown.Item eventKey="1999">1999</Dropdown.Item>
                  <Dropdown.Item eventKey="1998">1998</Dropdown.Item>
                  <Dropdown.Item eventKey="1997">1997</Dropdown.Item>
                  <Dropdown.Item eventKey="1996">1996</Dropdown.Item>
                  <Dropdown.Item eventKey="1995">1995</Dropdown.Item>
                  <Dropdown.Item eventKey="1994">1994</Dropdown.Item>
                  <Dropdown.Item eventKey="1993">1993</Dropdown.Item>
                  <Dropdown.Item eventKey="1992">1992</Dropdown.Item>
                  <Dropdown.Item eventKey="1991">1991</Dropdown.Item>
                  <Dropdown.Item eventKey="1990">1990</Dropdown.Item>
                  <Dropdown.Item eventKey="1989">1989</Dropdown.Item>
                  <Dropdown.Item eventKey="1987">1987</Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>Project Code</th>
            <th>Sponsoring Agency</th>
            <th>Investigator</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item['S.No']}</td>
              <td className="text-start">{item.Title_Project}</td>
              <td>{item["Amount"]}</td>
              <td>{item.Start}</td>
              <td>{item.End}</td>
              <td>{item['Project Code']}</td>
              <td>{item['Name of Sponsoring Agency']}</td>
              <td>{item['Name of Investigators']}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Projectss;