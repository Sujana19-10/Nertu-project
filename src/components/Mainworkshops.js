import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { workshopsData } from "./MainworkshopsData";

const Mainworkshops = () => {
  const [data, setData] = useState(workshopsData);
  const [searchText, setSearchText] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const excludeColumns = ["S_No", "Code"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value, selectedDuration);
  }

  const handleDurationFilterChange = (duration) => {
    setSelectedDuration(duration);
    filterData(searchText, duration);
  }

  const filterData = (value, durationFilter) => {
    const lowercasedValue = value.toLowerCase().trim();

    const filteredData = workshopsData.filter((item) => {
      return (
        Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        ) &&
        (durationFilter === 'All' || durationFilter === item['Duration'])
      );
    });

    setData(filteredData);
  };

  return (
    <div id="projects" className='m-5'>
      <div>
        <h1 className='text-center text-info py-5 mt-5'>Workshops</h1>
        <Form>
          <center>
            <InputGroup>
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
            </InputGroup>
          </center>
        </Form>
        <Table striped bordered hover className='bg-light mt-3 ml-3 mr-3'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Subject</th>
              <th>
                <Dropdown onSelect={(eventKey) => handleDurationFilterChange(eventKey)}>
                  <Dropdown.Toggle variant="light" id="dropdown-duration">
                    Duration
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                    <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
                    <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
                    <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
                    <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
                    <Dropdown.Item eventKey="2017">2017</Dropdown.Item>
                    <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
                    <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
                    <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
                    <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
                    <Dropdown.Item eventKey="2012">2012</Dropdown.Item>
                    <Dropdown.Item eventKey="2011">2011</Dropdown.Item>
                    <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
                    <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
                    <Dropdown.Item eventKey="2008">2008</Dropdown.Item>
                    <Dropdown.Item eventKey="2007">2007</Dropdown.Item>
                    <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
                    <Dropdown.Item eventKey="2005">2005</Dropdown.Item>
                    <Dropdown.Item eventKey="2004">2004</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item['S_No']}</td>
                <td className="text-start">{item.Title}</td>
                <td>{item.Subject}</td>
                <td>{item.Duration}</td>
                <td>{item.Code}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Mainworkshops;
