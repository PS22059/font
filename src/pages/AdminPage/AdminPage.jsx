import {Menu, Tabs} from 'antd'
import React, { useEffect, useState } from 'react'
import { getItem } from '../../utils';
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import HeaderAdminComponent from '../../components/HeaderAdminComponent/HeaderAdminComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
import OrderAdmin from '../../components/OrderAdmin/OrderAmin';
import * as OrderService from '../../services/OrderService'
import * as ProductService from '../../services/ProductService'
import * as UserService from '../../services/UserService'
import * as CategoryService from '../../services/CategoryService'; // Thêm service danh mục

import CustomizedContent from './components/CustomizedContent';
import { useSelector } from 'react-redux';
import { useQueries } from '@tanstack/react-query';
import { useMemo } from 'react';
import Loading from '../../components/LoadingComponent/Loading';
import CategoryList from "./Category/CategoryList";
import { useNavigate } from 'react-router-dom';
import RevenueByWeek from './components/RevenueByWeek';
import './AdminPage.css'

const AdminPage = () => {
    const user = useSelector((state) => state?.user);
    const navigate = useNavigate();
    const handleRevenueByWeek = () => {
        navigate('/system/admin/order/revenue')
    };

    const items = [
        getItem('Người dùng', 'users', <UserOutlined />),
        getItem('Sản phẩm', 'products', <AppstoreOutlined />),
        getItem('Đơn hàng', 'orders', <ShoppingCartOutlined />),
        getItem('Danh mục', 'categories', <CategoryList />), // Thêm tab danh mục
    ];

    const [keySelected, setKeySelected] = useState('');
    const getAllOrder = async () => {
        const res = await OrderService.getAllOrder(user?.access_token);
        return { data: res?.data, key: 'orders' };
    };

    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct();
        return { data: res?.data, key: 'products' };
    };

    const getAllUsers = async () => {
        const res = await UserService.getAllUser(user?.access_token);
        return { data: res?.data, key: 'users' };
    };

    const getCategoryList = async () => {
        try {
            const res = await CategoryService.getAllCategory();
            return { data: res?.data, key: 'categories' };
        } catch (error) {
            console.error('Error fetching category list:', error);
            return { data: [], key: 'categories' };
        }
    };

    const queries = useQueries({
        queries: [
            { queryKey: ['products'], queryFn: getAllProducts, staleTime: 1000 * 60 },
            { queryKey: ['users'], queryFn: getAllUsers, staleTime: 1000 * 60 },
            { queryKey: ['orders'], queryFn: getAllOrder, staleTime: 1000 * 60 },
            { queryKey: ['categories'], queryFn: getCategoryList, staleTime: 1000 * 60 }, // Thêm query cho danh mục
        ],
    });

    const memoCount = useMemo(() => {
        const result = {};
        try {
            if (queries) {
                console.log(queries)
                queries.forEach((query) => {
                    result[query?.data?.key] = query?.data?.data?.length;
                });
            }
            return result;
        } catch (error) {
            return result;
        }
    }, [queries]);

    const COLORS = {
        users: ['#e66465', '#9198e5'],
        products: ['#a8c0ff', '#3f2b96'],
        orders: ['#11998e', '#38ef7d'],
        categories: ['#f39c12', '#e74c3c'], // Thêm màu cho danh mục
    };

    const renderPage = (key) => {
        switch (key) {
            case 'users':
                return <AdminUser />;
            case 'products':
                return <AdminProduct />;
            case 'orders':
                return <OrderAdmin />;
            case 'categories':
                return <CategoryList />; // Thêm trang quản lý danh mục
            default:
                return <></>;
        }
    };

    const handleOnCLick = ({ key }) => {
        setKeySelected(key);
    };

    return (
        <>

            <HeaderAdminComponent isHiddenSearch isHiddenCart />
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
            <div style={{ margin: '0 40px', display: 'flex', overflowX: 'hidden', marginTop: '92px' }}>
                {/* <Tabs
                className='menuItemAdmin'
                    style={{
                        width: '256px',
                        marginRight: '15px',
                    }}
                    onChange={(key) => setKeySelected(key)}
                >
                    {items.map((item) => (
                        <Tabs.TabPane tab={item.title} key={item.key} />
                    ))}
                </Tabs> */}
                <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
                    <Loading
                        isLoading={
                            memoCount &&
                            Object.keys(memoCount) &&
                            Object.keys(memoCount).length !== items.length
                        }
                    >
                        {!keySelected && (
                            <CustomizedContent
                                data={memoCount}
                                colors={COLORS}
                                setKeySelected={setKeySelected}
                            />
                        )}
                        <div
                        onClick={handleRevenueByWeek}
                        style={{
                            width: '100%',
                            background: 'linear-gradient(rgb(247 255 133), rgb(211 148 0))',
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            fontSize: '30px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            color: '#fff',
                            marginTop: '20px',
                            cursor: 'pointer',
                            padding: '8px 0'
                        }}
                        >revenue</div>
                    </Loading>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    );
};

export default AdminPage;