import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderMenuComponent.css";
import logo from "../../../assets/img/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { motion } from 'framer-motion'
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
const HeaderMenuComponent = () => {
  const goToCategory = () => {
    window.location.href = "/category"; // Thay đổi địa chỉ URL đến /category
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <div className="menu">
      <nav className="container-menu">
        <div className="select_nav_left">
          <a href="/">
            <img src={logo} alt="logo1"/>
          </a>
        </div>
        <div className="select_nav_mid">
          <ul className="select_menu">
            <li className="listGiay">
              <div className="menuc2">
                <div className="grid-3">
                  <div>
                    <ul>
                      <li><a style={{fontWeight: "bold"}} href="/hat-xay-kho">Hạt Xấy Khô</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a style={{fontWeight: "bold"}} href="/hat-tuoi">Hạt Tươi</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a style={{fontWeight: "bold"}} href="/hat-it-beo">Hạt Ít Béo</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a style={{fontWeight: "bold"}} href="/hat-nhieu-beo">Hạt Nhiều Béo</a></li>
                    </ul>
                  </div>
                  <div>
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="select_nav_right">
          <div className="search">
            <SearchIcon
              style={{
                position: "relative",
                // top: "10px",
                // right: "10px",
                color: "#3C3C43",
                cursor: "pointer",
                backgroundColor: "#fff",
                fontSize: "1.4rem !important",
              }}
            />
            <input type="text" placeholder="Search" />
          </div>
          <a href="/cart">
            <ShoppingCartOutlinedIcon className="icon" />
          </a>
          <a href="/login">
            <PersonOutlineOutlinedIcon className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenuComponent;
