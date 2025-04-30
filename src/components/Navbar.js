import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/Logo.png";
import "../stylesheet/Navbar.css";

const MultiLevelNavbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="shadow-sm Navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#Home">
          <img src={logo} alt="Logo" style={{ height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu">
          <Nav className="me-auto custom-nav">
            <Nav.Link href="/">
              Trang Chủ
            </Nav.Link>
            <Nav.Link href="Dich">
              Dịch thuật
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("vanhoa")}>
              Khám Phá Văn Hóa
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("thongdiep")}>
              Thông Điệp
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("sumenh")}>
              Sứ Mệnh
            </Nav.Link>
          </Nav>
          <Nav className="btn-login">
            <Nav.Link href="#">ĐĂNG NHẬP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MultiLevelNavbar;