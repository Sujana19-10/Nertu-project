import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { StaffData, AdministrationData } from "./StaffData";

const StaffMain = () => {
  // Staff Data
  const [data, setData] = useState(StaffData);
  const [searchText, setSearchText] = useState("");
  const [filterFrom, setFilterFrom] = useState("All");

  // Administration Data
  const [dataA, setDataA] = useState(AdministrationData);
  const [searchTextA, setSearchTextA] = useState("");
  const [filterFromA, setFilterFromA] = useState("All");

  const generateOptions = (data, key) => ["All", ...Array.from(new Set(data.map((item) => item[key]?.toString())))];

  const applyFilter = (data, value, filter) => {
    const lowercasedValue = value.toLowerCase().trim();

    return data.filter((item) =>
      filter === "All" || (item.From && item.From.toString() === filter)
    ).filter((item) =>
      Object.keys(item).some((key) =>
        key === "From" ? true : item[key]?.toString().toLowerCase().includes(lowercasedValue)
      )
    );
  };

  const handleChangeA = (value) => setSearchTextA(value);
  const handleSelectA = (selectedOption) => setFilterFromA(selectedOption);

  const handleChange = (value) => setSearchText(value);
  const handleSelect = (selectedOption) => setFilterFrom(selectedOption);

  useEffect(() => {
    setDataA((prevDataA) => applyFilter(AdministrationData, searchTextA, filterFromA));
  }, [searchTextA, filterFromA]);

  useEffect(() => {
    setData((prevData) => applyFilter(StaffData, searchText, filterFrom));
  }, [searchText, filterFrom]);

  const fromOptions = generateOptions(StaffData, "From");
  const fromOptionsA = generateOptions(AdministrationData, "From");

  return (
    <div id="staff" className="m-4 pt-2">
      {/* Administration Section */}
      <div>
        <h1 className="text-center text-info py-5 mt-5" style={{ fontWeight: 800, fontSize: 40 }}>
          Administration
        </h1>
        <Form>
          <center>
            <InputGroup className="w-75">
              <Form.Control
                className="w-75"
                type="text"
                placeholder="Type to search..."
                value={searchTextA}
                onChange={(e) => handleChangeA(e.target.value)}
              />
            </InputGroup>
          </center>
        </Form>
      </div>

      <Table striped bordered hover className="bg-light mt-3 ml-5 mr-5 px-5">
        <thead style={{ border: 30 }}>
          <tr>
            <th>S.No</th>
            <th style={{ width: 360 }}>Name</th>
            <th>Designation</th>
            <th style={{ width: 130 }}>
              <Dropdown onSelect={handleSelectA}>
                <Dropdown.Toggle variant="secondary" id="dropdown-from-admin">
                  From
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {fromOptionsA.map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      active={filterFromA === option}
                      eventKey={option}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th style={{ width: 130 }}>To</th>
            <th style={{ width: 180 }}>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {dataA.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10 }}>
              <td>{item["S.No."]}</td>
              <td className="text-start ps-5" style={{ fontWeight: 550 }}>
                {item.Name}
              </td>
              <td>{item.Designation}</td>
              <td>{item.From}</td>
              <td>{item.To}</td>
              <td>{item.Mobile}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Staff Section */}
      <div>
        <h1 className="text-center text-info py-5 mt-5" style={{ fontWeight: 800, fontSize: 40 }}>
          Staff
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
            <th style={{ width: 270 }}>Name</th>
            <th>Designation</th>
            <th style={{ width: 130 }}>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="secondary" id="dropdown-from-staff">
                  From
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {fromOptions.map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      active={filterFrom === option}
                      eventKey={option}
                    >
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th style={{ width: 130 }}>To</th>
            <th style={{ width: 180 }}>Mobile</th>
            <th style={{ width: 200 }}>Mail ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="p-3" style={{ border: 10 }}>
              <td>{item["S.No."]}</td>
              <td className="text-start ps-5" style={{ fontWeight: 550 }}>
                {item.Name}
              </td>
              <td>{item.Designation}</td>
              <td>{item.From}</td>
              <td>{item.To}</td>
              <td>{item.Mobile}</td>
              <td>{item.Mail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffMain;  