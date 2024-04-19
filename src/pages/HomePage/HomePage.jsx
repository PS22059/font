import React, {useEffect, useState} from 'react'
import * as ProductService from '../../services/ProductService'
import {useSelector} from 'react-redux'
import Loading from '../../components/LoadingComponent/Loading'
import {useDebounce} from '../../hooks/useDebounce'
import Footer from '../../components/FooterComponent/FooterComponent'
import Navbar from '../../components/Navbar/Navbar'
import AboutHomeComponent from '../../components/AboutHomeComponent/AboutHomeComponent'
import SubBanner from '../../components/SubBanner/SubBanner'
import ListDanhmuc from '../../components/ListDanhMuc/ListDanhMuc'
import ListProducthatitbeo from '../../components/ListProducthatitbeo/ListProducthatitbeo'
import ListProducthattuoi from '../../components/ListProducthattuoi/ListProducthattuoi'
import ListProducthatnhieubeo from '../../components/ListProducthatnhieubeo/ListProducthatnhieubeo' 
import ListProducthatxaykho from '../../components/ListProducthatxaykho/ListProducthatxaykho'
const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(20)
    const [typeProducts, setTypeProducts] = useState([])

    const [productList, setProductList] = useState([]);
    const fetchProductAll = (context) => {
        setLoading(true);
        const limit = context?.queryKey && context?.queryKey[1];
        const search = context?.queryKey && context?.queryKey[2];
        ProductService.getAllProduct(search, limit).then((res) => {
            setProductList(res?.data);
            setLoading(false);
        });
    }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }
    useEffect(() => {
        fetchAllTypeProduct();
        fetchProductAll({queryKey: ['products', limit, searchDebounce]});
    }, [])

    return (
        <>
        <Loading isLoading={loading}>
            <div className='body'>
                <div id="container">
                    <Navbar/>
                    <AboutHomeComponent/>
                    <div style={{marginBottom: "80px"}} className="list_product">
                        <div><h1>Hạt Ít Béo</h1></div>
                        <div className="list_items">
                            {productList?.map((product) => {
                                    if (product?.type?.ten === 'Hạt Ít Béo') {
                                        return (
                                            <ListProducthatitbeo
                                                key={product._id}
                                                countInStock={product.countInStock}
                                                description={product.description}
                                                image={product.image}
                                                name={product.name}
                                                price={product.price}
                                                rating={product.rating}
                                                type={product.type}
                                                selled={product.selled}
                                                discount={product.discount}
                                                id={product._id}
                                            />
                                        )

                                    }
                                }
                            )}
                    </div>

                </div>
                <div style={{marginBottom: "80px"}} className="list_product">
                    <h1>Hạt Xấy Khô</h1>
                    <div className="list_items">
                        {productList?.map((product) => {
                                if (product?.type?.ten === 'Hạt Xấy Khô') {
                                    return (
                                        <ListProducthatxaykho
                                            key={product._id}
                                            countInStock={product.countInStock}
                                            description={product.description}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            rating={product.rating}
                                            type={product.type}
                                            selled={product.selled}
                                            discount={product.discount}
                                            id={product._id}
                                        />
                                    )

                                }
                            }
                        )}
                    </div>
                </div>
                <SubBanner/>
                <div style={{marginBottom: "80px"}} className="list_product">
                    <h1>Hạt Tươi</h1>
                    <div className="list_items">
                        {productList?.map((product) => {
                            if (product?.type?.ten === 'Hạt Tươi')
                                return (
                                    <ListProducthattuoi
                                        key={product._id}
                                        countInStock={product.countInStock}
                                        description={product.description}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        type={product.type}
                                        selled={product.selled}
                                        discount={product.discount}
                                        id={product._id}
                                    />
                                )
                        })}
                    </div>

                </div>
                <div style={{marginBottom: "80px"}} className="list_product">
                    <h1>Hạt Nhiều Béo</h1>
                    <div className="list_items">
                        {productList?.map((product) => {
                            if (product?.type?.ten === 'Hạt Nhiều Béo')
                                return (
                                    <ListProducthatnhieubeo
                                        key={product._id}
                                        countInStock={product.countInStock}
                                        description={product.description}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        type={product.type}
                                        selled={product.selled}
                                        discount={product.discount}
                                        id={product._id}
                                    />
                                )
                        })}
                    </div>
                </div>
                <ListDanhmuc/>


            </div>
        </div>
        <Footer/>
        </Loading>
</>
)
}

export default HomePage 