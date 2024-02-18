import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { workshopsData } from "./MainworkshopsData";

const Mainworkshops = () => {
  const [data, setData] = useState(workshopsData);
  const [searchText, setSearchText] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const excludeColumns = ["S_No", "Code"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value, selectedDuration);
  };

  const handleDurationFilterChange = (duration) => {
    setSelectedDuration(duration);
    filterData(searchText, duration);
  };

  const filterData = (value, durationFilter) => {
    const lowercasedValue = value.toLowerCase().trim();
    const filteredData = workshopsData.filter((item) =>
      Object.keys(item).some(
        (key) =>
          excludeColumns.includes(key)
            ? false
            : item[key]
                .toString()
                .toLowerCase()
                .includes(lowercasedValue)
      ) &&
      (durationFilter === "All" || durationFilter === item["Duration"])
    );
    setData(filteredData);
  };

  const durationOptions = ["All", ...Array.from(new Set(workshopsData.map((item) => item.Duration)))];

  return (
    <div id="workshop" className="m-4 pt-2">
      <div>
        <h1
          className="text-center text-info py-5 mt-5"
          style={{ fontWeight: 800, fontSize: 40 }}
        >
          Workshop
        </h1>
        <Form>
          <center>
            <InputGroup className="w-75">
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
      </div>

      <Table striped bordered hover className="bg-light mt-3 ml-3 mr-3">
        <thead style={{ border: 30 }}>
          <tr>
            <th>S.No</th>
            <th className="p-3">Title</th>
            <th>Subject</th>
            <th>
              <Dropdown
                onSelect={(eventKey) => handleDurationFilterChange(eventKey)}
              >
                <Dropdown.Toggle variant="light" id="dropdown-duration">
                  Duration
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {durationOptions.map((duration, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={duration}
                      active={selectedDuration === duration}
                    >
                      {duration}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10 }}>
              <td>{item["S_No"]}</td>
              <td className="text-start" style={{ fontWeight: 550 }}>
                {item.Title}
              </td>
              <td>{item.Subject}</td>
              <td>{item.Duration}</td>
              <td>{item.Code}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div></div>
    </div>
  );
};

export default Mainworkshops;