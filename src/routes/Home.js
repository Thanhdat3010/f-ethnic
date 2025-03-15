import React from 'react';
import MultiLevelNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../stylesheet/Home.css'; 
import logo from "../assets/Logo.svg";
import vanhoa from "../assets/dantocVietnam.png"
import tranquy from '../assets/Tranquy.jpg'; 
import ketnoi from '../assets/ketnoi.jpg'; 
import quatang from '../assets/quatang.jpg'; 

//home
const Home = () => {
    return (
        <div>
            <MultiLevelNavbar />

            <section id="trangchu" className="section">
                <Container>
                    <img src={logo} alt="Logo Website" className="logo-section" />
                    <p>Chào mừng bạn đến với Agentic RAG Chatbot, một công cụ tiên phong trong việc bảo tồn và phát huy văn hóa, ngôn ngữ của 54 dân tộc anh em Việt Nam. Chúng tôi sử dụng sức mạnh của trí tuệ nhân tạo để mang đến cho bạn nguồn tài liệu phong phú, chính xác và đáng tin cậy, hỗ trợ đắc lực cho công tác nghiên cứu, giảng dạy và học tập. Hãy cùng Agentic RAG Chatbot khám phá kho tàng văn hóa đa dạng, rực rỡ sắc màu của Việt Nam!</p>
                    <Button variant="primary" href="/ChatBot">Trải nghiệm ngay</Button>
                </Container>
            </section>

            <section id="vanhoa" className="van-hoa-section section">
            <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="image-container">
              <img src={vanhoa} alt="54 dân tộc Việt Nam (Quý Lê)" className="img-fluid" />
              <p className='resource'>Trích ảnh: tác giả Quý Lê</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="content">
              <h2>54 Dân tộc anh em</h2>
              <h1 className="title">Gói trọn <br /> Tinh hoa</h1>
              <h2 className="city">Việt Nam</h2>
              <p className= "gioithieuvanhoa">Bạn đã sẵn sàng cho hành trình khám phá 54 dân tộc anh em của Việt Nam? Mỗi dân tộc là một mảnh ghép quan trọng, tạo nên bức tranh văn hóa Việt Nam đa dạng và phong phú. Hãy cùng chúng tôi kết nối với những giá trị truyền thống, những phong tục độc đáo và những con người ấm áp. Nơi đây, bạn sẽ cảm nhận được sự gắn kết thiêng liêng giữa quá khứ, hiện tại và tương lai của dân tộc Việt Nam.</p>
              <Button className="read-more" href="/EthnicGroupsShowcase">Xem thêm <i className="fas fa-arrow-right"></i></Button>
            </div>
          </Col>
        </Row>
        </Container>
            </section>

            <section id="thongdiep" className="thongdiep-section section">
            <Container>
        <div className="gift-header">
          <div className="line-decoration"></div>
          <h2 className="main-title">BẢN SẮC VIỆT NAM GÓI GỌN TRONG</h2>
          <h2 className="sub-title">TỪNG NÉT VĂN HÓA</h2>
        </div>
        
        <div className="gift-item gift-item-right">
          <div className="gift-content">
            <h3 className="gift-title">Di sản</h3>
            <p className="gift-subtitle">Trân quý</p>
            <p className="gift-description">
            Di sản văn hóa và ngôn ngữ dân tộc thiểu số là những kho báu vô giá,
            cần được bảo tồn và phát huy. Hãy cùng chúng tôi nâng niu và trân trọng
            những giá trị truyền thống độc đáo này, để chúng mãi trường tồn cùng thời gian.
            </p>
          </div>
          <div className="gift-image">
            <img src={tranquy} alt="Quà Tặng Trân quý" />
          </div>
        </div>
        
        <div className="gift-item gift-item-left">
          <div className="gift-content">
            <h3 className="gift-title">Kết nối</h3>
            <p className="gift-subtitle">Cộng đồng</p>
            <p className="gift-description">
            Hãy cùng nhau xây dựng một cộng đồng đoàn kết, nơi mọi người cùng chia sẻ
            kiến thức và kinh nghiệm về văn hóa, ngôn ngữ dân tộc thiểu số.
            Sự kết nối này sẽ tạo nên sức mạnh lan tỏa, giúp những giá trị tốt đẹp
            được gìn giữ và phát triển.
            </p>
          </div>
            <div className="gift-image">
            <img src={ketnoi} alt="Kết nối" />
          </div>
        </div>
        
        <div className="gift-item gift-item-right">
          <div className="gift-content">
            <h3 className="gift-title">Lan tỏa</h3>
            <p className="gift-subtitle">Yêu thương</p>
            <p className="gift-description">
            Hãy cùng chúng tôi lan tỏa tình yêu và sự hiểu biết về văn hóa, ngôn ngữ
            dân tộc thiểu số đến với mọi người. Mỗi hành động nhỏ bé đều góp phần
            tạo nên một tương lai tươi sáng, nơi những giá trị truyền thống được
            trân trọng và gìn giữ
            </p>
          </div>
          <div className="gift-image">
            <img src={quatang} alt="Lan tỏa" />
          </div>
        </div>
      </Container>
        </section>

            <section id="sumenh" className="sumenh-section section">
            <Container>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="title">VĂN HÓA CÒN, DÂN TỘC CÒN</h1>
                <p>
                Với <b>"EthnoCraft"</b>, không chỉ là một sản phẩm, mà còn là một sứ mệnh bảo tồn và phát huy những giá trị văn hóa độc đáo của các dân tộc thiểu số Việt Nam. Với ứng dụng trí tuệ nhân tạo và học sâu (Deep Learning), chúng tôi mang đến giải pháp bảo tồn ngôn ngữ, phong tục, tập quán và truyền thống của 54 dân tộc anh em trên khắp đất nước.
                </p>
                <p>
                <b>"EthnoCraft"</b> không chỉ giúp người chơi tìm hiểu về sự đa dạng văn hóa của từng dân tộc mà còn là công cụ đắc lực để bảo tồn và phát huy những giá trị tinh thần, giúp người dùng ghi nhớ và khám phá những đặc trưng văn hóa độc đáo của mỗi cộng đồng dân tộc. Qua đó, chúng tôi kỳ vọng sẽ góp phần bảo vệ và phát triển những giá trị văn hóa vô giá, đồng thời tạo ra một không gian học hỏi và giao lưu đa văn hóa. Hãy đồng hành cùng chúng mình để giữ gìn, lan tỏa những giá trị truyền thống cốt lõi và vô giá,
                bởi <b>"Văn hóa là hồn cốt của dân tộc" -</b> không điều gì có thể thay đổi!
                </p>
            </Container>
            </section>
        <Footer />
        </div>
    );
};

export default Home;