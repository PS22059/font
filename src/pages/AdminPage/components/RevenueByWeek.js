import React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DatePicker} from "antd";
import {formatMoney} from "../../../utils";
import Loading from "../../../components/LoadingComponent/Loading";

const RevenueByWeek = () => {
    const [startDate, setStartDate] = useState(null);
    const [finishDate, setFinishDate] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const getTotalAmount = (record) => {
        let total = 0;
        record?.orderItems?.forEach((item) => {
            total += item?.amount;
        });
        return total;
    }

    const handleReset = () => {
        setStartDate(null);
        setFinishDate(null);
        setResult(null);
    }

    const getTotalAmountAll = () => {
        let total = 0;
        result?.data?.forEach((item) => {
            item?.orderItems?.forEach((item2) => {
                total += item2?.amount;
            });
        });
        return total;
    }

    const getTotalPriceAll = () => {
        let total = 0;
        result?.data?.forEach((item) => {
            total += item?.totalPrice;
        });
        return total;
    }
    const handleGetRevenue = async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/order/getRevenueByWeek', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    startDate,
                    finishDate,
                }),
            });

            if (!response.ok) {
                setLoading(false)
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setResult(data);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };
    let tableToExcel = (() => {
        let uri = 'data:application/vnd.ms-excel;base64,'
            ,
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
            , base64 = function (s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            }
            , format = function (s, c) {
                return s.replace(/{(\w+)}/g, function (m, p) {
                    return c[p];
                })
            }
        return (table, name) => {
            if (!table.nodeType) table = document.getElementById(table)
            let ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
            window.location.href = uri + base64(format(template, ctx))
        }
    })()


    return (
        <div className={'container-lg'}>
            <div className={"mb-3"}>
                <h1 className="text-center">Thống kê doanh thu</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="card">
                            <div className="card-body pxb-12 pxr-0">
                                <div className="col-md-10 m-0-auto">
                                    <div className="row col-md-12 pxb-12 mb-3">
                                        <label className="col-md-3 col-form-label bold" form="search">Ngày bắt
                                            đầu</label>
                                        <div className="col-md-9">
                                            <DatePicker placeholder={"chọn ngày bắt đầu"} className="form-control"
                                                        value={startDate}
                                                        onChange={(date) => setStartDate(date)}/>
                                        </div>
                                    </div>
                                    <div className="row col-md-12 pxb-12 mb-3">
                                        <label className="col-md-3 col-form-label bold" form="search">Ngày Kết
                                            thúc</label>
                                        <div className="col-md-9">
                                            <DatePicker placeholder={"chọn ngày kết thúc"} className="form-control"
                                                        value={finishDate}
                                                        onChange={(date) => setFinishDate(date)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-md-12 pxt-12 mt-3">
                                    <label className="col-md-3"></label>
                                    <div className="col-md-9">
                                        <button className="btn btn-primary" type={"button"}
                                                onClick={handleGetRevenue}>Tìm kiếm
                                        </button>
                                        <button type={"button"} className="btn btn-secondary mxl-12 mx-1"
                                                onClick={handleReset}>Reset
                                        </button>
                                        {
                                            result?.data?.length > 0 && (
                                                <button type={"button"} className="btn btn-success mxl-12 mx-1"
                                                        onClick={() => tableToExcel('export', 'data.xls')}>Export data
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {(result && result?.data?.length > 0) && (
                <div className="row my-3">
                    <div className="col-md-12">
                        <table className="table table-bordered" id="export">
                            <thead>
                            <tr>
                                <th>Stt</th>
                                <th>Địa chỉ giao hàng</th>
                                <th>Hình thức thanh toán</th>
                                <th>Số lượng</th>
                                <th>Tổng tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            {result?.data?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item?.shippingAddress?.address}</td>
                                    <td>{item?.paymentMethod}</td>
                                    <td>{getTotalAmount(item)}</td>
                                    <td>{formatMoney(item?.totalPrice)}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="fw-bold">Tổng tiền</td>
                                <td className="fw-bold">{getTotalAmountAll()}</td>
                                <td className="fw-bold">{formatMoney(getTotalPriceAll())}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {result?.data?.length === 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center">Không có dữ liệu</h4>
                    </div>
                </div>
            )}
            <Loading isLoading={loading}/>
        </div>
    );
};

export default RevenueByWeek;
