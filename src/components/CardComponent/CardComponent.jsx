// import React from 'react'
// import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell, StyleMountProduct } from './style'
// import { StarFilled } from '@ant-design/icons'
// import logo from '../../assets/images/logo.png'
// import { useNavigate } from 'react-router-dom'
// import { convertPrice } from '../../utils'

// const CardComponent = (props) => {
//     const { mount, soLuongConLai, description, hinhAnh, tenSanPham, donGia, rating, type, discount, selled, id } = props
//     const navigate = useNavigate()
//     const handleDetailsProduct = (id) => {
//         navigate(`/product-details/${id}`)
//     }
//     return (
//         <WrapperCardStyle
//             hoverable
//             headStyle={{ width: '200px', height: '200px' }}
//             style={{ width: 200 }}
//             bodyStyle={{ padding: '10px' }}
//             cover={<img alt="example" src={hinhAnh} />}
//             onClick={() =>  handleDetailsProduct(id)}
//         >
//             <img
//                 src={logo}
//                 style={{
//                     width: '68px',
//                     height: '14px',
//                     position: 'absolute',
//                     top: -1,
//                     left: -1,
//                     borderTopLeftRadius: '3px'
//                 }}
//             />
//             <StyleNameProduct>{tenSanPham}</StyleNameProduct>
//             <StyleMountProduct>{mount}</StyleMountProduct>
//             <WrapperReportText>
//                 <span style={{ marginRight: '4px' }}>
//                     <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
//                 </span>
//                 <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
//             </WrapperReportText>
//             <WrapperPriceText>
//                 <span style={{ marginRight: '8px' }}>{convertPrice(donGia)}</span>
//                 <WrapperDiscountText>
//                     - {discount || 5} %
//                 </WrapperDiscountText>
//             </WrapperPriceText>
//         </WrapperCardStyle>
//     )
// }

// export default CardComponent

// test
import React from 'react'
import "./CardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'
// import thumb2 from "../../assets/images/anh1.jpg"
import jordan1 from "../../assets/images/jordan1.jpg"
import jordan2 from "../../assets/images/jordan2.jpg"
import jordan3 from "../../assets/images/jordan3.jpg"
import jordan4 from "../../assets/images/jordan4.jpg"

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`);
    }
    return (
        <>
        <div className="list_items_new">
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new"
               hoverable
               headStyle={{ width: '200px', height: '200px' }}
               style={{ width: 200 }}
               bodyStyle={{ padding: '10px' }}
               cover={<img alt="example" src={image} />}
               onClick={() =>  handleDetailsProduct(id)}
            >
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">{name}</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">{price}</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan2} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">Giày (WMNS) Air Jordan 1 Low ‘Sky J Orange’ DC0774-080</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.290.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan3} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">(WMNS) Air Jordan 1 Low ‘Multi-Color Sashiko’ FV3623-151</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.890.000₫</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan4} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">Giày Nike Air Force 1 Low Classics ’50 Years Of Hip-Hop’ DV7183-100</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.690.000đ</div>
            </div>
          </div>
        </article>
      </div>
      <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() =>  handleDetailsProduct(id)}
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
            />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span>
                <WrapperDiscountText>
                    - {discount || 5} %
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
        </>
        
        
    )
}

export default CardComponent