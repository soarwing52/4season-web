import React, { useState, useEffect, useMemo } from "react";
import axios from "Utilities/axios";
import { COLUMNS } from './Components/Columns';
import { filterModel, TableWithFilter } from 'Components/Tables';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CampList = () => {
    const [Camps, setCamps] = useState([])

    const columns = useMemo(() => COLUMNS, []);
    const GetCampList = async () => {
        let result = await axios.get("camps/Camp/");
        let data = result.data;
        setCamps(data.results)
    }
    let filter = new filterModel()
    filter.key = "title"
    filter.placeholder = "營隊名稱"
    useEffect(() => {
        Promise.all([
            GetCampList()
        ])
    }, [])

    return (
        <>
            <Row>
                <Col></Col>
                <Col md={8}>
                    <h1>營隊報名</h1>
                    <TableWithFilter columns={columns} data={Camps} filterModel={filter} />
                </Col>
                <Col></Col>
            </Row>
        </>)
}

export default CampList;