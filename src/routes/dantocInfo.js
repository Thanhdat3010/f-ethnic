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
    image2
  } = groupInfo;

  const imgPath = process.env.PUBLIC_URL + '/ethnic/';

  return (
    <div className="ethnic-info-container">
      {/* Back button */}
      <div className="container py-3">
        <div className="back-link">
          <a href="#" className="text-decoration-none">
            <span className="text-muted">← Back</span>
          </a>
        </div>
      </div>

      <div className="ethnic-content-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left side - Avatar Images */}
            <div className="col-lg-5">
              <div className="avatar-group">
                <div className="avatar-circle primary">
                  <img
                    src={imgPath + image1}
                    alt={`${name} - Primary`}
                    className="img-fluid"
                  />
                </div>
                {image2 && (
                  <div className="avatar-circle secondary">
                    <img
                      src={imgPath + image2}
                      alt={`${name} - Secondary`}
                      className="img-fluid"
                    />
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