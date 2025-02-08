import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/Logo.svg";
import '../stylesheet/Navbar.css';


const MultiLevelNavbar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm Navbar">
      <Container>
        <Navbar.Brand href="#Home"> 
          <img
            src={logo}
            alt="Logo"
            style={{ height: "55px" }}
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu">
          <Nav className="me-auto custom-nav">
            <Nav.Link href="/">TRANG CHỦ</Nav.Link>
            <NavDropdown title="KHÁM PHÁ VĂN HÓA" id="culture-dropdown" className="dropdown-box">
              <NavDropdown.Item className="dropdown-item" href="/EthnicGroupsShowcase">54 Sắc tộc</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#">Không gian văn hóa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CÔNG CỤ AI" id="ai-tools-dropdown" className="dropdown-box">
              <NavDropdown.Item className="dropdown-item" href="#">Kiểm tra phát âm</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#">Phiên dịch ngôn ngữ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://padlet.com/fivecethnocraft">CỘNG ĐỒNG</Nav.Link>
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