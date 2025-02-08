import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/54dantoc.css';
import MultiLevelNavbar from '../components/Navbar.js';
import Footer from "../components/Footer.js";
import logo from "../assets/Logo.svg";
import Header from '../components/Header.js'

const ethnicGroupsData = [
  { id: 1, name: 'Cống', image: 'Cong-W.png' },
  { id: 2, name: 'Hà Nhì', image: 'HaNhi-W.png' },
  { id: 3, name: 'Kháng', image: 'Khang-W.png' },
  { id: 4, name: 'Khơ Mú', image: 'KhoMu-W.png' },
  { id: 5, name: 'La Ha', image: 'Laha-W.png' },
  { id: 6, name: 'La Hủ', image: 'LaHu-W.png' },
  { id: 7, name: 'Lào', image: 'Lao-W.png' },
  { id: 8, name: 'Lự', image: 'Lu-W.png' },
  { id: 9, name: 'Mảng', image: 'Mang-W.png' },
  { id: 10, name: 'Si La', image: 'SiLa-W.png' },
  { id: 11, name: 'Xinh Mun', image: 'XinhMun-W.png' },
  { id: 12, name: 'Bố Y', image: 'BoY-W.png' },
  { id: 13, name: 'Dao', image: 'Dao-W.png' },
  { id: 14, name: 'Giáy', image: 'Giay-W.png' },
  { id: 15, name: 'Mông', image: 'Mong-W.png' },
  { id: 16, name: 'Phù Lá', image: 'PhuLa-W.png' },
  { id: 17, name: 'Thái', image: 'Thai-W.png' },
  { id: 18, name: 'Cờ Lao', image: 'CoLao-W.png' },
  { id: 19, name: 'La Chí', image: 'LaChi-W.png' },
  { id: 20, name: 'Lô Lô', image: 'LoLo-W.png' },
  { id: 21, name: 'Ngái', image: 'Ngai-W.png' },
  { id: 22, name: 'Nùng', image: 'Nung-W.png' },
  { id: 23, name: 'Pà Thẻn', image: 'PaThen-W.png' },
  { id: 24, name: 'Pu Péo', image: 'PuPeo-W.png' },
  { id: 25, name: 'Sán Chay', image: 'SanChay-W.png' },
  { id: 26, name: 'Sán Dìu', image: 'SanDiu-W.png' },
  { id: 27, name: 'Tày', image: 'Tay-W.png' },
  { id: 28, name: 'Mường', image: 'Muong-W.png' },
  { id: 29, name: 'Kinh', image: 'Kinh-W.png' },
  { id: 30, name: 'Bru – Vân Kiều', image: 'Bru-VanKieu-W.png' },
  { id: 31, name: 'Chứt', image: 'Chut-W.png' },
  { id: 32, name: 'Cơ Tu', image: 'CoTu-W.png' },
  { id: 33, name: 'Ơ Đu', image: 'ODu-W.png' },
  { id: 34, name: 'Tà Ôi', image: 'TaOi-W.png' },
  { id: 35, name: 'Thổ', image: 'Tho-W.png' },
  { id: 36, name: 'Co', image: 'Co-W.png' },
  { id: 37, name: 'Ra Glai', image: 'RagLai-W.png' },
  { id: 38, name: 'Brâu', image: 'Brau-W.png' },
  { id: 39, name: 'Chu Ru', image: 'ChuRu-W.png' },
  { id: 40, name: 'Cơ-Ho', image: 'CoHo-W.png' },
  { id: 41, name: 'Ê Đê', image: 'EDe-W.png' },
  { id: 42, name: 'Gia Rai', image: 'GiaRai-W.png' },
  { id: 43, name: 'Mạ', image: 'Ma-W.png' },
  { id: 44, name: "M'Nông", image: 'Mnong-W.png' },
  { id: 45, name: 'Rơ Măm', image: 'RoMam-W.png' },
  { id: 46, name: 'Xơ Đăng', image: 'XoDang-W.png' },
  { id: 47, name: 'Ba Na', image: 'BaNa-W.png' },
  { id: 48, name: 'Gié Triêng', image: 'GieTrieng-W.png' },
  { id: 49, name: 'Hrê', image: 'Hre-W.png' },
  { id: 50, name: 'Chơ Ro', image: 'ChoRo-W.png' },
  { id: 51, name: 'X’Tiêng', image: 'XTieng-W.png' },
  { id: 52, name: 'Khmer', image: 'Khmer-W.png' },
  { id: 53, name: 'Hoa', image: 'Hoa-W.png' },
  { id: 54, name: 'Chăm', image: 'Cham-W.png' },
];

const EthnicGroupsShowcase = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = ethnicGroupsData.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupsToShow =
    !showAll && !searchQuery
      ? filteredGroups.slice(0, 8)
      : filteredGroups;

  return (
    <div className="w-full overflow-hidden">
      <MultiLevelNavbar />
      <Header />
      <section className="container-fluid py-5 bg-white gioithieu">
        <div className="container">
          <div className="text-center mb-4">
            <img 
              src={logo}
              alt="EthnoCraft"
              className="img-fluid"
              style={{ maxWidth: '80px' }}
            />
          </div>
          <h1 className="text-center mb-5 fw-bold" style={{ color: '#8F0006' }}>
            54 SẮC TỘC
          </h1>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <p className="text-center mb-4" style={{ color: '#002ea6' }}>
                Khám phá sức mạnh đoàn kết của 54 dân tộc anh em – nơi tình yêu tổ quốc và niềm tự hào văn hóa hòa quyện! Đây là không gian số hiện đại, nơi công nghệ AI tiên phong chuyển đổi số, lưu giữ và tôn vinh những giá trị văn hóa truyền thống của đồng bào. Hãy cùng nhau viết tiếp trang sử hào hùng, bảo vệ di sản quý báu của tổ tiên, để mỗi con người Việt luôn tự hào và đoàn kết trên hành trình phát triển đất nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phần danh sách các dân tộc */}
      <section className="container py-5">
        <div className="row mb-4 justify-content-center">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm dân tộc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {groupsToShow.length > 0 ? (
            groupsToShow.map((group) => {
              const imgSrc = process.env.PUBLIC_URL + '/ethnic/' + group.image;
              return (
                <div key={group.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                  <Link 
                    className="ethnic-item-link" 
                    to={`/ethnic-group/${group.id}`}
                    data-tooltip={group.name}
                  >
                    <div 
                      className="ethnic-avatar mx-auto"
                      style={{
                        backgroundImage: `url(${imgSrc})`,
                      }}
                    ></div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <p>Không tìm thấy kết quả phù hợp.</p>
            </div>
          )}
        </div>

        {!showAll && !searchQuery && filteredGroups.length > groupsToShow.length && (
          <div className="text-center mt-4">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAll(true)}
            >
              Xem thêm
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default EthnicGroupsShowcase;
