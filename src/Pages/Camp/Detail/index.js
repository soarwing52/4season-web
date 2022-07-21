import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "Utilities/axios";
import { Table, Button } from 'react-bootstrap';
import Notice from "./notice"

const CampDetail = () => {
    let { id } = useParams();
    const [Camp, setCamp] = useState([])

    const GetCamp = async () => {
        let result = await axios.get(`camps/Camp/${id}`);
        let data = result.data;
        console.log(data)
        setCamp(data)
    }

    const toRegister = () => {
        window.location.href = `${window.location.origin}/Camp/Register/${id}`
    }

    useEffect(() => {
        Promise.all([
            GetCamp()
        ])
    }, [])

    return (
        <>
            <h1>{Camp?.title}</h1>
            <Notice />
            <h3>領隊：{Camp.get_leaders}</h3>
            參加人員：
            <Button onClick={toRegister}>報名參加營隊</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            工作人員：
            <Button>報名工作人員</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>)
}

export default CampDetail;