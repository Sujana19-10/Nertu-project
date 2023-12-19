import React, { useState } from "react";
import { Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";

const Filter = ({
  filterOptions,
  selectedFilterOption,
  onFilterOptionChange,
  filterValues,
  onFilterValueChange,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning">Filter</Dropdown.Toggle>
      <Dropdown.Menu>
        <Container>
          <Row style={{ minWidth: "50vw" }}>
            <Col>
              <ListGroup variant="flush">
                {Object.keys(filterOptions).map((fKey, id) => (
                  <ListGroup.Item
                    key={id}
                    action
                    active={selectedFilterOption === fKey}
                    onClick={() => onFilterOptionChange(fKey)}
                    variant="success"
                  >
                    {fKey}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                {filterValues.map((option, id) => (
                  <Row key={id}>
                    <Col xs="2">
                      {selectedFilterOption === "Start" || selectedFilterOption === "End" ? (
                        <input
                          type="checkbox"
                          checked={filterOptions[selectedFilterOption].includes(option)}
                          onChange={() => onFilterValueChange(option)}
                        />
                      ) : (
                        <input type="checkbox" />
                      )}
                    </Col>
                    <Col>
                      <p>{option}</p>
                    </Col>
                  </Row>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;