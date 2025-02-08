import React from 'react';
import logo from "../assets/Logo.svg";
import '../stylesheet/Header.css';


const Header = () => {
  return (
    <div className="header-container">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left section - Image */}
          <div className="col-12 col-lg-6 header-image-container">
            <div className="grayscale-overlay"></div>
          </div>

          {/* Right section - Content */}
          <div className="col-12 col-lg-6 header-content">
            <div className="content-wrapper">
              {/* Logo */}
              <div className="text-center mb-4">
                <img src={logo} alt="Rang Rỡ Việt Nam" className="header-logo" />
              </div>

              <h1 className="title-main text-uppercase mb-4">
                Chúng tôi là EthnoCraft Việt Nam
              </h1>

              <div className="subtitle mb-5">
                "GenZ" tiên phong trong ứng dụng chuyển đổi số trí tuệ nhân tạo trong việc nghiên cứu, bảo tồn văn hóa DTTS (Dân tộc thiểu số) tại Việt Nam
              </div>

              <div className="content-section">
                <p className="mb-4">Xin chào,</p>
                
                <p className="mb-4">
                  Chúng mình là <strong>FIVEC</strong> - nhà sáng lập dự án bảo tồn văn hóa Dân tộc thiểu số tại Việt Nam, ứng dụng trí tuệ nhân tạo trong việc lưu trữ và tự động hóa các thông tin dân tộc <strong>"ETHNOCRAFT AI"</strong>.
                </p>

                <p className="mb-4">
                  Với <strong>"ETHNOCRAFT"</strong>, chúng mình mang đến một trải 
                  nghiệm có lẽ là rất khác biệt khi đồng hành cùng trí tuệ nhân tạo (AI), đồng thời được giáo dục về giá trị văn hoá và truyền 
                  thống của 54 dân tộc anh em trên khắp mọi miền đất nước.
                </p>

                <p className="mb-4">
                  <strong>"ETHNOCRAFT"</strong> không chỉ là nền tảng, là sản phẩm lưu giữ truyền thống 
                  mà còn là kết tinh của tinh thần trí tuệ & sáng tạo. Sự bùng nổ của trí tuệ nhân tạo (AI) và công cuộc chuyển đổi số trên toàn quốc đang dần được thực hiện hóa, Hãy đồng hành cùng chúng mình để chuyển hóa các tri thức hiện thực thành công nghệ số cho thế hệ sau, bởi:
                </p>

                <p className="slogan">
                  "Văn hóa là hồn cốt của dân tộc, nói lên bản sắc của dân tộc. Văn hóa còn thì dân tộc còn... Do đó, nếu mất văn hóa là mất dân tộc".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;