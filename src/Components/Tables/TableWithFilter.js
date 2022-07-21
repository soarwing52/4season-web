import React, { useState } from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import Table from 'react-bootstrap/Table';

const TableWithFilter = ({ columns, data, filterModel }) => {
    const [filterInput, setFilterInput] = useState("");

    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter(filterModel.key, value);
        setFilterInput(value);
    };

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setFilter
    } = useTable(
        {
            columns: columns,
            data: data
        }, useFilters, useSortBy);

    return (
        <>
            <div>
                <div className="d-flex justify-content-between">
                    <div className="row align-items-center">
                        <div className="col-auto">搜尋：</div>
                        <div className="col">
                            <input
                                value={filterInput}
                                onChange={handleFilterChange}
                                placeholder={filterModel.placeholder}
                                className="form-control form-control-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Table {...getTableProps()}
                striped bordered hover
                style={{ width: "100%" }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sort-desc"
                                                : "sort-asc"
                                            : ""
                                    }
                                >{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default TableWithFilter;