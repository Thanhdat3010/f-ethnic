import React from 'react';
import '../stylesheet/54dantocInfo.css';

const EthnicGroupInfo = ({ groupInfo }) => {

  const {
    name,
    selfName,
    otherName,
    localGroup,
    region,
    area,
    population,
    populationPercent,
    languageGroup,
    languageFamily,
    shortHistory,
    image1,
  } = groupInfo;

  // Đường dẫn ảnh được lấy từ thư mục public
  const imgPath = process.env.PUBLIC_URL + 'ethnic/';

  return (
    <div className="ethnic-info-container container py-4">
      <h1 className="text-center mb-4">{name}</h1>
      <div className="row">
        {/* Hình ảnh thứ nhất */}
        <div className="col-md-6 mb-3">
          <div className="image-container position-relative">
            <img
              src={imgPath + image1}
              alt={name}
              className="img-fluid zoomable"
            />
          </div>
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="info-details mt-4">
        <p>
          <strong>Tên tự gọi:</strong> {selfName}
        </p>
        <p>
          <strong>Tên khác:</strong> {otherName}
        </p>
        <p>
          <strong>Nhóm địa phương:</strong> {localGroup}
        </p>
        <p>
          <strong>Vùng cư trú:</strong> {region}
        </p>
        <p>
          <strong>Khu vực cư trú:</strong> {area}
        </p>
        <p>
          <strong>Dân số (2019):</strong> {population}
        </p>
        <p>
          <strong>% Dân số:</strong> {populationPercent}
        </p>
        <p>
          <strong>Nhóm ngôn ngữ:</strong> {languageGroup}
        </p>
        <p>
          <strong>Ngữ hệ:</strong> {languageFamily}
        </p>
        <p>
          <strong>Lịch sử dân tộc:</strong> {shortHistory}
        </p>
      </div>
    </div>
  );
};

export default EthnicGroupInfo;
