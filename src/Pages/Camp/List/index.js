import React, { useState, useEffect, useMemo } from "react";
import axios from "Utilities/axios";
import { COLUMNS } from './Components/Columns';
import { filterModel, TableWithFilter } from 'Components/Tables';

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
            <h1>CampList</h1>
            {Camps.map(value => value.title)}
            <TableWithFilter columns={columns} data={Camps} filterModel={filter} />
        </>)
}

export default CampList;