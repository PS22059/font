import React, {useEffect, useState} from 'react'
import './ProductDetailsPage.css'
import {useNavigate, useParams} from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/FooterComponent/FooterComponent'
import {axiosJWT} from "../../services/UserService";
import {getTimeAgo} from "../../utils";

const ProductDetailsPage = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    let isLoad = false;
    const setCommentValue = (e) => {
        setComment(e.target.value)
    }

    const getComment = () => {
        isLoad = true;
        axiosJWT.get(`/api/comment/getByProductId/${id}`).then(res => {
            setCommentList(res.data?.data);
        }).catch(err => {
            console.log(err);
        });
    };
    useEffect(() => {
        if (!isLoad) {
            getComment();
        }
    }, []);
    const handleSendComment = () => {
        const userId = JSON.parse(localStorage.getItem('user'))?._id;
        if (userId === undefined || userId === null) {
            alert('Bạn cần đăng nhập để bình luận')
            return;
        }
        const cmt = {
            content: comment,
            product: id,
            user: userId,
        }
        axiosJWT.post('/api/comment/create', cmt)
            .then(res => {
                if (res.data?.status === 'ERRO') {
                    alert(res.data?.message)
                } else {
                    alert('Bình luận thành công')
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <div style={{width: '100%', background: '#efefef', height: '100%'}}>
                <div style={{width: '1270px', height: '100%', margin: '0 auto'}}>
                    <h5><span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {
                        navigate('/')
                    }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
                    <ProductDetailsComponent idProduct={id}/>
                </div>

            </div>
            <div className="comment">
                <input
                    type="text"
                    placeholder="Bình luận về sản phẩm..."
                    onChange={(e) => setCommentValue(e)}
                />
                <FontAwesomeIcon
                    className="icon-send-comment"
                    icon={faPaperPlane}
                    onClick={handleSendComment}
                />
                {commentList.map((cmt) => {
                    return (
                        <div className="user_comment" key={cmt.id}>
                            <p className="name">{cmt?.user?.name}</p>
                            <p className="content">{cmt?.content}</p>
                            <p className="time">{getTimeAgo(cmt?.createAt)}</p>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </>
    )
}

export default ProductDetailsPage