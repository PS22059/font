import React from "react";
import banner from "../../assets/images/slider2.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="banner slide">
      <div className="carousel-itemm active">
        <img src={banner} alt="" />
        <div className="title">
          <h1>Mua sắm đồ hạt dinh dưỡng</h1>
          <a href="/allproducts"><button>Đến cửa hàng ngay</button></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
