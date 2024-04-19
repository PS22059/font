import React from "react";
import "./About.css";
// import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import bannerAbout from '../../assets/images/bannerAbout.jpg'
import aboutDetail1 from "../../assets/images/aboutDetail1.jpg"
import aboutDetail2 from "../../assets/images/aboutDetail2.jpg"
import Footer from "../../components/FooterComponent/FooterComponent";
// import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
            <div className="about">
                <img className="bannerAbout" src={bannerAbout} alt="" />
                <div className="sub-about">
                    <h1>Giới thiệu</h1>
                    <ul>
                        <li><a href="/">Trang chủ</a></li> /
                        <li><a href="/about">Giới thiệu</a></li>
                    </ul>
                </div>
                {/* <div className="background-slogan">
                    <div className="slogan">
                        <p className="sub-text">“</p>
                        <p className="text">Looks Good.Run Good.Feels Good.</p>
                        <p className="author">Hannahley</p>
                    </div>
                </div> */}
                <div className="sub-background-top"></div>
                <div className="sub-background-bottom"></div>
                <div className="about-detail">
                    <div className="about-sports">
                        <div className="left">
                            <br /><h1>Người ta nói gì về hạt dinh dưỡng </h1><br />
                            <p>Các loại hạt cung cấp một hàm lượng vitamin và khoáng chất dồi dào. Thành phần dinh dưỡng của các loại hạt góp phần duy trì và nâng cao sức khỏe cho mọi đối tượng từ trẻ em, người cao tuổi, phụ nữ mang thai, người có bệnh lý nền…
Trong thành phần của các loại hạt còn chứa nhiều loại chất chống oxy hóa mạnh có tác dụng chống lại các gốc tự do trong tế bào. Gốc tự do chính là thủ phạm làm giảm tổn thương tế bào, gây ra rất nhiều bệnh lý nguy hiểm như: huyết áp, tim mạch, xơ gan, ung thư…</p>
                        </div>
                        <div className="right">
                            <img src={aboutDetail1} alt="" />
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <div className="about-firefly">
                        <div className="left">
                            <img src={aboutDetail2} alt="" />
                        </div>
                        <div className="right">
                            <br /><h1>Sứ mệnh Goodnuts</h1><br />
                            <p>Cửa hàng Goodnuts mong muốn bạn có trải nghiệm dịch vụ tại cửa hàng tốt nhất, luôn luôn lắng nghe những đóng góp ý kiến của các bạn. Thế nên khi bạn gặp vấn đề gì trong quá trình mua hàng tại cửa hàng Goodnuts xin hãy liên hệ với chúng chúng tôi, để đội ngũ nhân viên hỗ trợ bạn giải quyết vấn đề. Trân trọng cảm ơn bạn đã tin tưởng mua hàng tại cửa hàng Goodnuts chúng tôi.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About