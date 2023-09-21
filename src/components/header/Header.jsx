import React from "react";
import styles from "./Contact.module.css";
import "./Header.scss";
import { logo } from "../../assets";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <img className={styles.logo} src={logo} alt="logo" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav bg-dark" />
            <Navbar.Collapse id="responsive-navbar-nav navbar2">
              <Nav className="me-auto nav">
                <Nav.Link href="#">Home </Nav.Link>
                <Nav.Link href="#">About </Nav.Link>
                <Nav.Link href="#">Services </Nav.Link>
                <Nav.Link href="#">Articles </Nav.Link>
                <Nav.Link href="#">Contact </Nav.Link>
              </Nav>
              <Nav className="nav2">
                <Nav.Link eventKey={2} href="#memes">
                  Cart (0)
                </Nav.Link>
                <Button variant="outline-success">Get a free quote</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
{
  /*<div className={styles.headerContent}>*/
}
{
  /* <img className={styles.logo} src={logo} alt="logo" /> */
}
{
  /* <nav className={styles.navbar}>
            <div className={styles.first}>
              <a className={styles.a1} href="#">
                Home
              </a>
              <a className={styles.a1} href="#">
                About
              </a>
              <a className={styles.a1} href="#">
                Services
              </a>
              <a className={styles.a1} href="#">
                Articles
              </a>
              <a className={styles.a1} href="#">
                Contact
              </a>
            </div>
            <div className={styles.second}>
              <a className={styles.btn1} href="#">
                Cart (0)
              </a>
              <a className={styles.btn2} href="#">
                Get a free quote
              </a>
            </div>
          </nav> */
}
