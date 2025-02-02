import React from 'react';
import EthnicGroupInfo from './dantocInfo.js';

const HomePage = () => {
  // Ví dụ dữ liệu cho dân tộc "Kinh". Bạn có thể tạo dữ liệu cho các dân tộc khác tương tự.
  const kinhData = {
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
    shortHistory:
      'Người Kinh là dân tộc chiếm đa số tại Việt Nam với lịch sử hình thành và phát triển hàng nghìn năm, góp phần tạo dựng nên nền văn hóa và truyền thống của đất nước.',
    image1: 'Kinh-W.png',
  };

  return (
    <div>
      <EthnicGroupInfo groupInfo={kinhData} />
    </div>
  );
};

export default HomePage;
