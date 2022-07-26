import React, { useState, useEffect, useMemo } from "react";
import { BasicTable } from 'Components/Tables';
import { COLUMNS } from './Components/Columns';
import axios from "Utilities/axios";


const PaymentList = () => {
    const columns = useMemo(() => COLUMNS, []);
    const [Payments, setPayments] = useState([])

    const GetPaymentList = async () => {
        let result = await axios.get("finance/Payment/");
        let data = result.data;
        setPayments(data.results)
    }

    useEffect(() => {
        Promise.all([
            GetPaymentList()
        ])
    }, [])

    return (
        <>
            <p>payment</p>
            <BasicTable columns={columns} data={Payments}></BasicTable>
        </>
    )
}

export default PaymentList;