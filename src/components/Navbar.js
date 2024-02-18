import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import nertuLogo from "../assets/nertulogo.jpeg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleMouseEnter = (e) => {
    const dropdown = e.currentTarget.querySelector(".submenu");
    if (dropdown) {
      dropdown.classList.add("active");
    }
  };

  handleMouseLeave = (e) => {
    const dropdown = e.currentTarget.querySelector(".submenu");
    if (dropdown) {
      dropdown.classList.remove("active");
    }
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo" style={{ height: 50 }}>
          <img
            src={nertuLogo}
            style={{ height: 50, paddingRight: 5 }}
            alt="NERTU Logo"
          />
          <h1 style={{ fontSize: 30, paddingTop: 8 }}>NERTU</h1>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  {item.title === "Download" && (
                    <ul className="submenu">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <Link className={subitem.cName} to={subitem.url}>
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
