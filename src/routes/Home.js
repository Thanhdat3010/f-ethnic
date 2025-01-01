import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Chào mừng đến với Website</h1>
      </header>

      <main className="main">
        <section className="about">
          <h2>Giới Thiệu</h2>
          <p>Chúng tôi chuyên cung cấp các sản phẩm chất lượng cao.</p>
        </section>

        <section className="services">
          <h2>Dịch Vụ</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Dịch vụ 1</h3>
              <p>Mô tả chi tiết về dịch vụ 1</p>
            </div>
            <div className="service-card">
              <h3>Dịch vụ 2</h3>
              <p>Mô tả chi tiết về dịch vụ 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;