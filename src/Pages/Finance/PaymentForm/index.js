import React, { useState, useEffect } from 'react';
import axios from "Utilities/axios";
import validator from 'validator';
import { toDashDate } from 'Utilities/DateUtil';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState({});

    const Send = () => {
        console.log(paymentData);
    }
    return (
        <>
            <Form className="form-RegisterCamp">
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={2}>
                        姓名
                    </Form.Label>
                    <Col md={10}>
                        <Form.Control type="text" name="name" size="6" required="" placeholder="王小明"
                            value={paymentData.name}
                            onChange={(e) => { setPaymentData(prev => ({ ...prev, name: e.target.value })) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        EMAIL
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control type="email" name="email" size="30" required=""
                            value={paymentData.email}
                            onChange={(e) => { setPaymentData(prev => ({ ...prev, email: e.target.value })) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        電話
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control type="text" name="e_phone" size="4" required=""
                            value={paymentData.phone}
                            onChange={(e) => { setPaymentData(prev => ({ ...prev, phone: e.target.value })) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        帳號莫五碼
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control type="number" pattern="[0-9]*"
                            value={paymentData.accountNumber}
                            onChange={(e) => {
                                if (e.target.validity.valid) {
                                    setPaymentData(prev => ({ ...prev, accountNumber: e.target.value }))
                                }
                                else {
                                    console.log("wrong")
                                }
                            }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column md={4}>
                        匯款日期
                    </Form.Label>
                    <Col md={8}>
                        <Form.Control type="date"
                            className="form-control form-control-sm"
                            value={toDashDate(paymentData?.pay_date, "-") || ""}
                            onChange={e => setPaymentData(prevState => ({
                                ...prevState,
                                pay_date: new Date(e.target.value)
                            }))} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label>
                        備註
                    </Form.Label>
                    <Form.Control as="textarea" rows={3}
                        value={paymentData.experience}
                        onChange={(e) => { setPaymentData(prev => ({ ...prev, experience: e.target.value })) }} />
                </Form.Group>

                <Button onClick={Send}>送出</Button>
            </Form>
        </>
    )
}

export default PaymentForm;