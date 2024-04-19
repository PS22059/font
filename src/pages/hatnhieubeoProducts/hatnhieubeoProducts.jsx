import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as ProductService from '../../services/ProductService';
import { useSelector } from 'react-redux';
import Loading from '../../components/LoadingComponent/Loading';
import { useDebounce } from '../../hooks/useDebounce';
import Footer from '../../components/FooterComponent/FooterComponent';
import ListProducthatnhieubeo from '../../components/ListProducthatnhieubeo/ListProducthatnhieubeo';
import './hatnhieubeoProducts.css';
import HatnhieubeoProductsComponet from '../../components/hatnhieubeoProductsComponet/hatnhieubeoProductsComponet';
const HatnhieubeoProducts = () => {
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

    const res = await ProductService.getAllProductByType(search, limit, 'Hạt Nhiều Béo').then((res) => {
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

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  // const totalPages = Math.ceil((products?.data?.length || 0) / productsPerPage);

  return (
    <>
      <Loading isLoading={isLoading || loading}>
        {/* <DanhmucDetail /> */}
        <div style={{ marginBottom: '80px' }} className="list_product">
          <h1>Hạt Nhiều Béo</h1>
          <div className="list_items">
          {productList?.map((product) => (
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
          ))}
          </div>
        </div>


        <Footer />
      </Loading>
    </>
  );
};

export default HatnhieubeoProducts;
