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
    localGroup: 'Việt-Mường',
    region: 'Toàn quốc',
    area: 'Đồng bằng, khu đô thị',
    population: '82,085,826',
    populationPercent: '85.32%',
    languageGroup: 'Tiếng Việt',
    languageFamily: 'Nam Á',
    shortHistory: 'Người Kinh là dân tộc chiếm đa số tại Việt Nam với lịch sử hình thành và phát triển hàng nghìn năm, góp phần tạo dựng nên nền văn hóa và truyền thống của đất nước.',
    image1: 'Kinh-W.png',
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
