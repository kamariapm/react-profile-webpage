import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
 } from "mdbreact";
import '../App.css';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="black" dark expand="md" style={navStyling}>
      <MDBNavbarBrand>
        <strong className="white-text">K.I.</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="../">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="./Experience">Experience</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="./Contact">Contact</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="./Projects">Projects</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

const navStyling = {
    position:'fixed',
    width:'100%',
    top:'0',
}

export default NavbarPage;