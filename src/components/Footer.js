import React from "react";
import logo from "../assets/Logo.svg";
import '../stylesheet/Footer.css';


const Footer = () => {
  return (
    <footer className="Footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 text-center text-md-start">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", marginBottom: "1rem" }}
            />
            <p className="mb-1">
              fivecreatorsgroup@gmail.com <br/>
              Thành phố Hồ Chí Minh, <br/>
              Việt Nam
            </p>
            <p>
              Bản quyền thiết kế:{" "}
              <br/>
              <a
                href="https://www.nhotovietnam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-decoration-none"
              >
                Nhỏ to Việt Nam (Nguyễn Minh Ngọc)
              </a>{" "}<br/>
              <a
                href="https://www.nhotovietnam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-decoration-none"
              >
                Quý Lê (Ảnh tập thể 54 Dân tộc)
              </a>{" "}
            </p>
          </div>

          {/* Navigation links */}
          <div className="col-md-4 mb-3 text-center">
            <h5 className="mb-3">Khám phá</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className=" text-decoration-none">
                  Về dự án
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" text-decoration-none"
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className=" text-decoration-none"
                >
                  Đóng góp
                </a>
              </li>
            </ul>
          </div>

          {/* Social media and contact */}
          <div className="col-md-4 mb-3 text-center text-md-end">
            <h5 className="mb-3">Kết nối</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@yourwebsite.com"
                >
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </li>
            </ul>
            <p className="mt-3">© {new Date().getFullYear()} bản quyền thuộc EthnoCraft</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
