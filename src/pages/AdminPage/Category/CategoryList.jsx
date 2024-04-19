// CategoryList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import Table from "../../../components/Table/Table";
import "./CategoryList.css";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/category/findAll`)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data?.data);
            });
    }, []);
    const deleteById = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/category/delete/${id}`, {
            method: "DELETE"
        }).then((response) => response.json())
            .then((data) => {
                alert(data?.message);
                setCategories(categories.filter((category) => category._id !== id));
            });
    }

    const columns = [
        {
            title: "Tên",
            dataIndex: "ten",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Chi tiết",
            render: (category) => (
                <Link to={`category/${category?._id}`}><EditOutlined /></Link>
            ),
        },
        {
            title: "Xóa",
            render: (category) => (
                <button onClick={() => deleteById(category?._id)}>Xóa</button>
            ),
        },
    ];

    return (
        <div className="container">
            <h2>Danh sách danh mục</h2>
            <div className={"d-flex"}>
                <Link to="category/new">
                    <button>
                        <PlusOutlined /> Thêm mới
                    </button>
                </Link>
            </div>
            <Table columns={columns} dataSource={categories} />
        </div>
    );
};

export default CategoryList;
