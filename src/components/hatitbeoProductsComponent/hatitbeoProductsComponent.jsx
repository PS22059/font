import React from "react";
import "./hatitbeoProductsComponent.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import {formatMoney} from '../../utils'
import StarRatingComponent from '../StarRating/StarRatingComponent';

const HatitbeoProductsComponent = (props) => {
    const {countInStock, description, image, name, price, rating, type, discount, selled, id} = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`);
    }
    return (
        <>
            <article className="product col-3">
                <div className="slect_product">
                    <div onClick={() => {
                        handleDetailsProduct(id)
                    }} className="product_img">
                        <img alt="example" src={image}/>
                        <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}}/></a>
                    </div>
                    <div className="product_name">
                        <p onClick={() => {
                            handleDetailsProduct(id)
                        }} className="name">{name}</p>
                        <div className="rating">
                            <StarRatingComponent rating={rating}/>
                        </div>
                        <div className="price">{formatMoney(price)}</div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default HatitbeoProductsComponent;