import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { dataList } from "./PublicationData";

function PublicationMain() {
  const [searchText, setSearchText] = useState("");
  const [selectedYearFilter, setSelectedYearFilter] = useState("All");
  const [data, setData] = useState(dataList);

  const excludeColumns = ["Sno", "DOI"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value, selectedYearFilter);
  };

  const filterData = (searchValue, year) => {
    const lowercasedSearchValue = searchValue.toLowerCase().trim();
    const filteredData = dataList.filter((item) => {
      const yearCondition = year === "All" || item.Year.toString() === year;
      const searchCondition =
        lowercasedSearchValue === "" ||
        Object.keys(item).some(
          (key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedSearchValue)
        );
      return yearCondition && searchCondition;
    });
    setData(filteredData);
  };

  const yearOptions = ["All", "2023", "2022", "2021","2014","2013", "2012", "2011","2010","2009", "2008", "2007","2006","2005", "2004", "2003","2002","2001", "2000", "1999","1998","1997", "1996", "1995","1994","1998","1997", "1996", "1995","1994","1993","1992", "1991", "1990","1989"]; 

  return (
    <div id="publication" className="m-4 pt-2">
      <div>
        <h1 className="text-center text-info py-5 mt-5" style={{fontWeight:800, fontSize:40}}>Publication</h1>
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
            <th>SNo</th>
            <th>Type</th>
            <th className="p-3">Title</th>
            <th>Authors</th>
            <th>
              <div className="d-flex align-items-center">
                <span>Year</span>
                <Dropdown className="ml-2">
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {/* Displaying the dropdown icon only */}
                    <i className="fas"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {yearOptions.map((year, index) => (
                      <Dropdown.Item
                        key={index}
                        active={selectedYearFilter === year}
                        onClick={() => {
                          setSelectedYearFilter(year);
                          filterData(searchText, year);
                        }}
                      >
                        {year}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="p-3" style={{ border: 10}}>
              <td>{d.Sno}</td>
              <td>{d.Type}</td>
              <td className="text-start" style={{fontWeight:550}}>{d.Title}</td>
              <td>{d.Authors}</td>
              <td>{d.Year}</td>
              <td style={{width:20}}>{d.DOI}
                {/* <a href={`/${d.DOI}`}>Link</a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PublicationMain;