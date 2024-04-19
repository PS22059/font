
import React from "react";
import "./ListProducthatxaykho.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { StarFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'

const ListProducthatxaykho = (props) => {
  const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
  const navigate = useNavigate()
  
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  }
  return (
    <article className="product">
          <div className="slect_product">
            <div onClick={() => {handleDetailsProduct(id)}} className="product_img">
              <img alt="example" src={image} />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name">
              <p onClick={() => {handleDetailsProduct(id)}} className="name">{name}</p>
              {rating}<FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price">{price}<u>đ</u></div>
            </div>
          </div>
    </article>
  );
};
export default ListProducthatxaykho;
