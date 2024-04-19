import React from "react";
import "./AboutHomeComponent.css";
import imgAbout from "../../assets/images/about.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
const AboutHomeComponent = () => {
    return (
        <>
            {/* <div className="container">
                <div className="col-6">
                    <h1>Chào mừng bạn đến với Firefly shop</h1>
                    <p className="content">Cửa hàng Firefly chúng tôi chuyên bán đồ thể thao được thành lập năm 2023 với tiêu chí “Looks Good.Runs Good.Feels Good. ” Chúng tôi mong khách hàng luôn có trải nghiệm tốt nhất tại cửa hàng của chúng tôi. Chúc khách hàng có 1 ngày mua sắm tuyệt vời tại cửa hàng Firefly, Trân trọng cảm ơn!</p>
                    <FontAwesomeIcon className="phoneIcon" icon={faPhone} />
                    <div className="phone"><b>0366259312</b><br></br><p className="contentPhone">Liên hệ với chúng tôi nếu bạn gặp vấn đề khi mua sắm tại cửa hàng Firefly.</p></div><br/><br/>
                    <a href="/products">Đến cửa hàng</a>
                </div>
                <div className="col-6">
                    <img src={imgAbout} alt="" />
                </div>
            </div> */}
        </>

    );
}

export default AboutHomeComponent;