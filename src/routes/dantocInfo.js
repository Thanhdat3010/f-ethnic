import React, { useState } from 'react';
import '../stylesheet/54dantocInfo.css';
import { Link } from 'react-router-dom';

const EthnicGroupInfo = ({ groupInfo }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

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
    image2
  } = groupInfo;

  const imgPath = process.env.PUBLIC_URL + '/ethnic/';

  const handleImageZoom = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  return (
    <div className="ethnic-info-container">
      <div className="container py-3">
        <div className="back-link">
          <Link to="/ethnic-groups" className="text-decoration-none">
            <span className="text-muted">← Quay lại</span>
          </Link>
        </div>
      </div>

      <div className="ethnic-content-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left side - Avatar Images */}
            <div className="col-lg-5">
              <div className="avatar-group">
                <div className="image-container avatar-circle primary">
                  <img
                    src={imgPath + image1}
                    alt={`${name} - Hình chính`}
                    className="img-fluid zoomable"
                    onClick={() => handleImageZoom(imgPath + image1)}
                  />
                  <div 
                    className="zoom-overlay" 
                    onClick={() => handleImageZoom(imgPath + image1)}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="white" 
                      viewBox="0 0 24 24" 
                      className="zoom-icon"
                    >
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                    </svg>
                  </div>
                </div>
                {image2 && (
                  <div className="image-container avatar-circle secondary">
                    <img
                      src={imgPath + image2}
                      alt={`${name} - Hình phụ`}
                      className="img-fluid zoomable"
                      onClick={() => handleImageZoom(imgPath + image2)}
                    />
                    <div 
                      className="zoom-overlay" 
                      onClick={() => handleImageZoom(imgPath + image2)}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="white" 
                        viewBox="0 0 24 24" 
                        className="zoom-icon"
                      >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                      </svg>
                    </div>
                  </div>
                )}
                <div className="ethnic-name">
                  <h4 className="mb-0">Dân tộc</h4>
                  <h1>{name}</h1>
                </div>
              </div>
            </div>

            {/* Right side - Information */}
            <div className="col-lg-7">
              <div className="ethnic-info">
                <div className="info-row">
                  <div className="label">Tên tự gọi:</div>
                  <div className="value">{selfName}</div>
                </div>

                <div className="info-row">
                  <div className="label">Tên khác:</div>
                  <div className="value">{otherName}</div>
                </div>

                <div className="info-row">
                  <div className="label">Nhóm địa phương:</div>
                  <div className="value">{localGroup || 'Không có'}</div>
                </div>

                <div className="info-row">
                  <div className="label">Vùng cư trú:</div>
                  <div className="value">{region}</div>
                </div>

                <div className="info-row">
                  <div className="label">Khu vực cư trú:</div>
                  <div className="value">{area}</div>
                </div>

                <div className="info-group">
                  <div className="info-row">
                    <div className="label">Dân số (2019):</div>
                    <div className="value">{population}</div>
                  </div>
                  <div className="info-row">
                    <div className="label">% Dân số:</div>
                    <div className="value">{populationPercent}</div>
                  </div>
                </div>

                <div className="info-row">
                  <div className="label">Nhóm ngôn ngữ:</div>
                  <div className="value">{languageGroup}</div>
                </div>

                <div className="info-row">
                  <div className="label">Ngữ hệ:</div>
                  <div className="value">{languageFamily}</div>
                </div>

                <div className="info-row history">
                  <div className="value">{shortHistory}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthnicGroupInfo;