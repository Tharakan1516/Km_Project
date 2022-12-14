import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import header from "./pictures/headerN.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div width="100%">
          <Navbar bg="success" variant="dark">
            <Link to="#">
              <Image
                widthmage
                src={header}
                rou="40px"
                height="70px"
                className="mr-3"
              />
            </Link>
            <Navbar.Brand href="#home">
              Supramaniyam Medi Clinic Jaffna
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="http://localhost:3000/">DOCTOR</Nav.Link>
              <Nav.Link href="http://localhost:3000/">PATIENTS</Nav.Link>
              <Nav.Link href="http://localhost:3000/">DRUGS</Nav.Link>
              <Nav.Link href="http://localhost:3000/">HOSPITAL STAFF</Nav.Link>
              <Nav.Link href="http://localhost:3000/">FILE UPLOAD</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        </div>
      </div>
    );
  }
}
