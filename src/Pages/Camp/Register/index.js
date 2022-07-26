import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CampParticipant } from '../Models';
import axios from 'Utilities/axios';
import { toDashDate } from 'Utilities/DateUtil';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";


const CampRegister = () => {
    let { id } = useParams();
    const [participantData, setParticipantData] = useState(new CampParticipant());
    const history = useNavigate();

    const Register = async () => {
        axios.post("camps/CampParticipant/", participantData)
            .then(result => {
                history("../Finance/PaymentForm")
            })
            .catch(err => {
                console.error(err)
                alert(err.message)
            })
    }

    useEffect(() => {
        setParticipantData(prev => ({ ...prev, camp: id }))
        Promise.all([
        ])
    }, [])
    return (
        <>
            <h1 className="titleBar">營隊報名</h1>
            <Form className="form-RegisterCamp">
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={2}>
                                姓名
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control type="text" name="name" size="6" required="" placeholder="王小明"
                                    value={participantData.name}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, name: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                FB ID
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="msn" size="35"
                                    value={participantData.facebook_name}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, facebook_name: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                身分證號
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="id_no" size="10" placeholder="英文要大寫" required=""
                                    value={participantData?.citizen_id}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, citizen_id: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={5}>
                                性別
                            </Form.Label>
                            <Col md={7}>
                                {
                                    <div key={`inline-radio`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="男性"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-1`}
                                            value="M"
                                            onChange={(e) => { setParticipantData(prev => ({ ...prev, gender: e.target.value })) }}
                                            checked={participantData.gender === "M"}
                                        />
                                        <Form.Check
                                            inline
                                            label="女性"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-2`}
                                            value="F"
                                            onChange={(e) => { setParticipantData(prev => ({ ...prev, gender: e.target.value })) }}
                                            checked={participantData.gender === "F"}
                                        />
                                    </div>
                                }
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                出生日期
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="date"
                                    className="form-control form-control-sm"
                                    value={toDashDate(participantData?.birth_date, "-") || ""}
                                    onChange={e => setParticipantData(prevState => ({
                                        ...prevState,
                                        birth_date: new Date(e.target.value)
                                    }))} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                EMAIL
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="email" name="email" size="30" required=""
                                    value={participantData.email}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, email: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                行動電話
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text" name="mobile" size="25" placeholder="0912345678"
                                    maxLength="10"
                                    value={participantData.phone}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, phone: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                電話(家)
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="phone_home" size="25" value={participantData.land_line} placeholder="0212345678"
                                    maxLength="10"
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, land_line: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                出生地
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="b_place" size="35"
                                    value={participantData.birth_location}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, birth_location: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={8}>
                        <Form.Group as={Row} className="mb-3" >
                            <Col md={2}>
                                <Form.Label>
                                    住址
                                </Form.Label>
                            </Col>
                            <Col md={2}>
                                <Form.Control type="text" name="b_address" size="10" maxLength="5" placeholder="郵遞區號"
                                    value={participantData.postal_code}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, postal_code: e.target.value })) }} />
                            </Col>
                            <Col md={8}>
                                <Form.Control type="text" name="address" size="35" placeholder="地址"
                                    value={participantData.address}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, address: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                緊急聯絡人
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="e_contact" size="10" maxLength="10"
                                    value={participantData.emergency_contact_name} required=""
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_name: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={6}>
                                關係
                            </Form.Label>
                            <Col md={6}>
                                <Form.Control type="text" name="e_relationship" size="4" required=""
                                    value={participantData.emergency_contact_relation}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_relation: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column md={4}>
                                緊急聯絡人電話
                            </Form.Label>
                            <Col md={8}>
                                <Form.Control type="text" name="e_phone" size="4" required=""
                                    value={participantData.emergency_contact_phone}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_phone: e.target.value })) }} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Label>
                        溯溪經歷
                    </Form.Label>
                    <Form.Control as="textarea" rows={3}
                        value={participantData.experience}
                        onChange={(e) => { setParticipantData(prev => ({ ...prev, experience: e.target.value })) }} />
                </Row>
                <Row style={{ margin: '10px' }}>
                    <Button onClick={Register}>
                        送出報名
                    </Button>
                </Row>

            </Form>

        </>)
}

export default CampRegister;