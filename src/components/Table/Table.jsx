// Table.js
import React, { useState, useEffect } from "react";

const Table = ({ columns, dataSource }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const onRowClick = (row) => {
        setSelectedRow(row);
    };

    return (
        <table className="table">
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column.title}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {dataSource.map((row, index) => (
                <tr key={index} onClick={() => onRowClick(row)}>
                    {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{column.render ? column.render(row) : row[column.dataIndex]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
