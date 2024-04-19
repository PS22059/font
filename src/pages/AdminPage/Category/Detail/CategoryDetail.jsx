import React, { useState, useEffect } from "react";
import InputForm from "../../../InputForm/InputForm";
import "./CategoryDetail.css";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
    const [ten, setTen] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const url = "http://localhost:3001/api/category/getById/" + id;
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setTen(data?.data?.ten);
                    setDescription(data?.data?.description);
                });
        }
    }, [id]); // Chỉ gọi API khi id thay đổi

    const back = () => {
        window.history.back();
    }
    const onFinish = (values) => {
        if (id) {
            const url = 'http://localhost:3001/api/category/update/' + id;
            const data = {
                ten: ten,
                description: description
            }
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then((response) => {
                const data = response.json();
                data.then((data) => {
                    if (data.status === 'ERRO') {
                        alert(data.message);
                    } else {
                        alert('Sửa thành công');
                        back();
                    }
                });
            });
        } else {
            const url = 'http://localhost:3001/api/category/create';
            const data = {
                ten: ten,
                description: description
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((response) => {
                const data = response.json();
                data.then((data) => {
                    if (data.status === 'ERRO') {
                        alert(data.message);
                    } else {
                        alert('Thêm thành công');
                        back();
                    }
                });
            })

        }
    };
    return (
        <div className="container">
            <h2>Danh mục</h2>
            <div className="input-wrapper">
                <label>Tên</label>
                <InputForm value={ten} onChange={setTen} />
            </div>
            <div className="input-wrapper">
                <label>Mô tả</label>
                <InputForm value={description} onChange={setDescription} />
            </div>
            <div>
                <button onClick={onFinish}>Thực hiện</button>
            </div>
        </div>
    );
};

export default CategoryDetail;
