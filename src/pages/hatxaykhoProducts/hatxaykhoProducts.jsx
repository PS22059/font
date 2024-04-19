import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as ProductService from '../../services/ProductService';
import { useSelector } from 'react-redux';
import Loading from '../../components/LoadingComponent/Loading';
import { useDebounce } from '../../hooks/useDebounce';
import HatxaykhoProductsComponent from '../../components/hatxaykhoProductsComponent/hatxaykhoProductsComponent';
import DanhmucDetail from '../ProductDetailsPage/DanhmucDetail/DanhmucDetail';
import Footer from '../../components/FooterComponent/FooterComponent';
import { WrapperButtonMore } from './style'
import ListProducthatxaykho from '../../components/ListProducthatxaykho/ListProducthatxaykho';

const HatxaykhoProducts = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(8);
  // const [type, setType] = useState('Giày MLB');
  const [page, setPage] = useState(1)
  const [typeProducts, setTypeProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState([]);
  // const productsPerPage = 8; {/* set số sp*/}

  const fetchProductAll = async (context) => {
    const limit = context && context.queryKey && context.queryKey[1];
    const search = context && context.queryKey && context.queryKey[2];

    const res = await ProductService.getAllProductByType(search, limit, 'Hạt Xấy Khô').then((res) => {
      setProductList(res?.data);
      // setLoading(false);
    });
    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res && res.status === 'OK') {
      setTypeProducts(res.data);
    }
  };

  const { isLoading, data: products, isPreviousData } = useQuery(
    ['products', limit, searchDebounce],
    fetchProductAll,
    { retry: 3, retryDelay: 1000, keepPreviousData: true }
  );

  // const totalPages = Math.ceil((products?.data?.length || 0) / productsPerPage);

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading || loading}>
        {/* <DanhmucDetail /> */}
        <div style={{ marginBottom: '80px' }} className="list_product">
          <h1>Hạt Xấy Khô
          </h1>
          <div className="list_items">
          {productList.map((product) => (
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
          ))}
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 8)}
            ></WrapperButtonMore>
          </div>
          
        </div>
        
        <Footer />
      </Loading>
    </>
  );
};

export default HatxaykhoProducts;
