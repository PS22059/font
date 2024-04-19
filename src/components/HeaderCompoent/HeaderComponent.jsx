import { Badge, Button, Col, Popover, Space } from 'antd'
import React from 'react'
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import logo from "../../assets/images/logo1.png";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButttonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { useState } from 'react';
import Loading from '../LoadingComponent/Loading';
import { useEffect } from 'react';
import { searchProduct } from '../../redux/slides/productSlide';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderComponent.css";
// import logo from "../../assets/images/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { motion } from 'framer-motion';
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search, setSearch] = useState('')
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const order = useSelector((state) => state.order)
  const [loading, setLoading] = useState(false)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const contentUser = (
    <div className='infoUser'>
      <p onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</p>
      {user?.isAdmin && (

        <p onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</p>
      )}
      <p onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</p>
      <p onClick={() => handleClickNavigate()}>Đăng xuất</p>
    </div>
  );

  const onSearch = (e) => {
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }

  const contentSearch = (
    <div className="searchHeader">
      {/* <input className="searchInput" type="text" placeholder="Search" /> */}
      <ButttonInputSearch
        size="large"
        bordered={false}
        textbutton=""
        placeholder="Search"
        onChange={onSearch}
        backgroundColorButton="lightblue"
      />
    </div>

  )

  const handleClickNavigate = (type) => {
    if (type === 'profile') {
      navigate('/profile-user')
    } else if (type === 'admin') {
      navigate('/system/admin')
    } else if (type === 'my-order') {
      navigate('/my-order', {
        state: {
          id: user?.id,
          token: user?.access_token
        }
      })
    } else {
      handleLogout()
    }
    setIsOpenPopup(false)
  }



  return (
    <>
      <div className="menu">
        <nav className="container-menu">
          <div className="select_nav_left">
            <a href="/">
              <img src={logo} alt="logo1" />
            </a>
          </div>
          <div className="select_nav_mid">
            <ul className="select_menu">
              <li>
                <a style={{fontWeight: "bold"}} href="/allproducts">Sản phẩm</a>
              </li>
              <li>
                <a style={{fontWeight: "bold"}} href="/hat-xay-kho">Hạt Xấy Khô</a>
              </li>
              <li>
                <a style={{fontWeight: "bold"}} href="/hat-tuoi">Hạt Tươi</a>
              </li>
              <li>
                <a style={{fontWeight: "bold"}} href="/hat-it-beo">Hạt Ít Béo</a>
              </li>
              <li>
                <a style={{fontWeight: "bold"}} href="/hat-nhieu-beo">Hạt Nhiều Béo</a>
              </li>
              <li>
                <a style={{ color: "red", fontWeight: "bold" }} href="/about">Về chúng tôi</a>
              </li>
            </ul>
          </div>
          <div className="select_nav_right">
            {user?.access_token ? (
              <>
                <Popover content={contentUser} trigger="click" open={isOpenPopup}>
                  <div style={{ width: "100%", fontSize: "1.8rem", cursor: 'pointer', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                </Popover>
              </>
            ) : (
              // <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
              //   <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              //   <div>
              //     <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
              //     <CaretDownOutlined />
              //   </div>
              // </div>
              <a href="/sign-in">
                <PersonOutlineOutlinedIcon className="icon" />
              </a>
            )}
            <div className="search">
              <Space wrap>
                <Popover content={contentSearch} trigger="click">
                  {/* <SearchIcon
              className='icon'
              style={{
                // position: "absolute",
                // top: "10px",
                // right: "10px",
                color: "#000",
              }}
            /> */}
                  {!isHiddenSearch && (
                    // <Col span={13}>
                    //   <ButttonInputSearch
                    //     size="large"
                    //     bordered={false}
                    //     textbutton="Tìm kiếm"
                    //     placeholder="input search text"
                    //     onChange={onSearch}
                    //     backgroundColorButton="#5a20c1"
                    //   />
                    // </Col>
                    <SearchIcon
                      className='icon'
                      style={{
                        // position: "absolute",
                        // top: "10px",
                        // right: "10px",
                        color: "#000",
                      }}
                    />
                  )}
                </Popover>
              </Space>

            </div>
            {!isHiddenCart && (
            <div onClick={() => navigate('/order')} style={{cursor: 'pointer'}}>
              <Badge count={order?.orderItems?.length} size="small">
                <ShoppingCartOutlinedIcon className="icon" />
              </Badge>
              {/* <a href="/order">
              Giỏ hàng
            </a> */}
            </div>
          )}
            {/* <a href="/cart">
              <ShoppingCartOutlinedIcon className="icon" />
            </a> */}
          </div>
        </nav>
      </div>
    </>
  )
}

export default HeaderComponent