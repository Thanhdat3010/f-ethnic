import React from 'react';
import '../stylesheet/Home.css'
import MultiLevelNavbar from '../components/Navbar.js';
import Hoavan from '../components/Hoavan.js';
import Footer from "../components/Footer.js";
import womanImage from '../assets/Home_bg.png';
import Intro from '../assets/dantocVietnam.png';
import logo from "../assets/Logo.svg";

// home
const Home = () => {
  return (
    <div className="home">
      <MultiLevelNavbar />
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-image">
              <img src={womanImage} alt="Woman in traditional attire" />
            </div>
          </div>
        </section>

        <section className="about py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src={Intro}
          alt="Người phụ nữ trong trang phục truyền thống"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6">
        <h2 className="fw-bold">BẢO TỒN VĂN HÓA VIỆT</h2>
        <p className="text-muted">
          Dự án nhằm bảo tồn truyền thống đất Việt, lưu giữ vẻ đẹp của ngôn ngữ 54 dân tộc Việt Nam, một khối đại đoàn kết
        </p>
        <ul className="list-unstyled">
          <li>- 54 dân tộc anh em</li>
          <li>- 20+ ngôn ngữ được hỗ trợ</li>
          <li>- 100+ tài nguyên văn hóa được số hóa</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<Hoavan />
<section className="container-fluid py-5 bg-white gioithieu">
      <div className="container">
        <div className="text-center mb-4">
          <img 
            src= {logo}
            alt="EthnoCraft"
            className="img-fluid"
            style={{ maxWidth: '80px' }}
          />
        </div>
        
        <h1 className="text-center mb-5 fw-bold " style={{ color: '#AE342D' }}>
          VĂN HÓA LÀ HỒN CỐT CỦA DÂN TỘC
        </h1>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <p className="text-center mb-4" style={{ color: '#002ea6' }}>
              Với "<b>EthnoCraft</b>", không chỉ là một sản phẩm, mà còn là một sứ mệnh bảo tồn và phát huy những giá trị văn hóa độc đáo của các dân tộc thiểu số Việt Nam. Với ứng dụng trí tuệ nhân tạo và học sâu (Deep Learning), chúng tôi mang đến giải pháp bảo tồn ngôn ngữ, phong tục, tập quán và truyền thống của 54 dân tộc anh em trên khắp đất nước.
            </p>
            
            <p className="text-center" style={{ color: '#002ea6' }}>
              "<b>EthnoCraft</b>" không chỉ giúp người chơi tìm hiểu về sự đa dạng văn hóa của từng dân tộc mà còn là công cụ đắc lực để bảo tồn và phát huy những giá trị tinh thần, giúp người dùng ghi nhớ và khám phá những đặc trưng văn hóa độc đáo của mỗi cộng đồng dân tộc. Qua đó, chúng tôi kỳ vọng sẽ góp phần bảo vệ và phát triển những giá trị văn hóa vô giá, đồng thời tạo ra một không gian học hỏi và giao lưu đa văn hóa. Hãy đồng hành cùng chúng mình để giữ gìn, lan tỏa những giá trị truyền thống cốt lõi và vô giá, <br/>bởi "<b>Văn hóa là hồn cốt của dân tộc</b>" - không điều gì có thể thay đổi!
            </p>
          </div>
        </div>
      </div>
    </section>
    <Hoavan />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
