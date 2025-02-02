import React from 'react';
import { useParams } from 'react-router-dom';
import EthnicGroupInfo from './dantocInfo.js';
import MultiLevelNavbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// Data cho tất cả các dân tộc
export const ethnicData = {
  29: {
    name: 'Kinh',
    selfName: 'Người Kinh',
    otherName: 'Việt, Người Việt',
    localGroup: 'Không có',
    region: 'Đồng bằng sông Hồng',
    area: 'Toàn quốc',
    population: '82,089,728',
    populationPercent: '85.32%',
    languageGroup: 'Việt-Mường',
    languageFamily: 'Nam Á',
    shortHistory: 'Người Việt định cư từ lâu đời ở khu vực Bắc Bộ và Bắc Trung Bộ. Họ phát triển nền nông nghiệp lúa nước, thủy lợi từ rất sớm. Nhiều nghề thủ công cũng như hệ thống giao thương đều phát triển. Xưa, đàn ông Việt thường mặc quần chân chè, áo cánh màu sẫm, đi chân đất. Ngày lễ đàn ông mặc áo chùng lương đen, đội khăn xếp, đi guốc mộc. Đàn bà Việt thường mặc váy đen, áo cánh, chít khăn mỏ quạ. Ngày lễ phụ nữ mặc áo dài. Theo số liệu năm 2019, cơ cấu dân số Việt Nam bao gồm dân tộc Việt (chiếm 82,32%) và 53 dân tộc thiểu số.',
    image1: 'Kinh-W.png',
    image2: 'Kinh-M.png',
  },
  // Thêm data cho các dân tộc khác...
};

const EthnicDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL params

  const groupInfo = ethnicData[id];

  if (!groupInfo) {
    return <div>Không tìm thấy thông tin dân tộc</div>;
  }

  return (
    <div>
      <MultiLevelNavbar />
      <EthnicGroupInfo groupInfo={groupInfo} />
      <Footer />
    </div>
  );
};

export default EthnicDetailPage;
