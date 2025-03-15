import React from "react";
import logo from "../assets/Logo.svg"; // Thay đổi đường dẫn logo nếu cần
import "../stylesheet/Footer.css";
import { Link } from "react-scroll"; // Import Link từ react-scroll

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 text-center text-md-start">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo"
            />
            <p className="mb-1">
              fivecreatorsgroup@gmail.com <br />
              Thành phố Hồ Chí Minh <br />
              Việt Nam
            </p>
            <p className="mb-1">
              <a href="https://www.nhotovietnam.com/">Nhỏ To Việt Nam (Nguyễn Minh Ngọc)</a>
            </p>
          </div>

          <div className="col-md-4 mb-3 text-center">
            <h5 className="mb-3">Điều hướng</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="trangchu"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="vanhoa"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Khám Phá Văn Hóa
                </Link>
              </li>
              <li>
                <Link
                  to="thongdiep"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Thông Điệp
                </Link>
              </li>
              <li>
                <Link
                  to="sumenh"
                  smooth={true}
                  duration={500}
                  className="footer-link"
                >
                  Sứ Mệnh
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 text-center text-md-end">
            <h5 className="mb-3">Mạng xã hội</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end gap-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} bản quyền của EthnoCraft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;