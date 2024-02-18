import React, { useState, useEffect } from 'react';
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

  const excludeColumns = ["S.No", "Amount", "End"]; // Exclude "End" column from filtering

  useEffect(() => {
    const filterData = (value, start) => {
      const lowercasedValue = value.toLowerCase().trim();

      const filteredData = dataList.filter((item) => {
        const startMatch = start === 'All' || item['Start'].toString() === start;

        return (
          Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          ) && startMatch
        );
      });

      // Sort filteredData by the "Start" column in descending order
      filteredData.sort((a, b) => b.Start - a.Start);

      setData(filteredData);
    };

    filterData(search, startFilter);
  }, [search, startFilter]);

  const handleChange = (value) => {
    setSearch(value);
  };

  const handleStartFilterChange = (value) => {
    setStartFilter(value);
  };

  const startOptions = ["All", ...Array.from(new Set(dataList.map((item) => item.Start.toString())))];

  return (
    <div id="projects" className='m-4 pt-2'>
      <div>
        <h1 className='text-center text-info py-5 mt-5' style={{fontWeight:800, fontSize:40}}>Projects</h1>
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
        <thead style={{ border: 30 }}>
          <tr>
            <th>S.No</th>
            <th className='p-3'>Title</th>
            <th>Amount ( Rs. in lakhs)</th>
            <th>
              <Dropdown onSelect={(eventKey) => handleStartFilterChange(eventKey)}>
                <Dropdown.Toggle variant="light" id="dropdown-start" style={{fontWeight:630}}>
                  Start
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {startOptions.map((year, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={year}
                      active={startFilter === year}
                    >
                      {year}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>End</th>
            <th>Project Code</th>
            <th style={{width:200}}>Sponsoring Agency</th>
            <th>Investigator</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10}}>
              <td>{item['S.No']}</td>
              <td className="text-start" style={{fontWeight:550}}>{item.Title_Project}</td>
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