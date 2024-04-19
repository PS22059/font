import React from "react";
import logo from "../../assets/images/logo1.png";
import image from "../../assets/images/image.png";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./FooterComponent.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <div className="logo_img">
          <img src={logo} alt="" />
        </div>
        <iframe
          title="Embedded Map"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1697261287409!5m2!1svi!2s"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer_infor">
        <h3>Giới thiệu</h3>
        <p>
          Giới thiệu về Goodnuts
        </p>
        <p style={{marginTop: "4px"}}>
          Thương hiệu
        </p>
        <div className="list_icon">
          <div className="icon">
            <FacebookRoundedIcon
              sx={{ background: "#fff" }}
              fontSize="large"
              className="icon"
            />
          </div>

          <div className="icon">
            <SubscriptionsRoundedIcon
              sx={{ background: "#fff" }}
              fontSize="large"
              className="icon"
            />
          </div>
          <div className="icon">
            <InstagramIcon
              sx={{ background: "#fff" }}
              fontSize="large"
              className="icon"
            />
          </div>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="footer_policies">
        <h3>Các chính sách</h3>
        <ul>
          <li>Bảo mật thông tin cá nhân</li>
          <li>Cam kết hàng hóa </li>
          <li>Cách thức mua hàng</li>
          <li>Chính sách vận chuyển</li>
          <li>Hình thức thanh toán</li>
          <li>Hướng dẫn trả góp</li>
          <li>Chính sách bảo hành</li>
        </ul>
      </div>
      <div className="footer_address">
        <h3>HỒ CHÍ MINH</h3>
        <p>
          Lô 8, Tô Ký, Công viên phần mềm Quang Trung, Quận 12, Tp.Hồ Chí Minh
        </p>
        <p>28/1/16, Nguyễn Văn Quá, ĐHT 19, Quận 12, Tp.Hồ Chí Minh </p>
      </div>
    </div>
  );
};

export default Footer;
