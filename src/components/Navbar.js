import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state={clicked:false};

  handleClick=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (

      <nav className="NavbarItems" style={{height: 60, backgroundColor: "rgba(100, 0, 0, 0.5)"}}>
        <h1 className="navbar-logo" style={{color:"rgb(0,0,0)"}}>NERTU</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index)=>{
            return(
              <li key={index} style={{color:"rgb(0,0,0)"}}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
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
