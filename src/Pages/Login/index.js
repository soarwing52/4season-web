import React, { useState, useEffect, useCallback } from "react";
import './Login.scss';
import { ImgSystemLogotype } from '../style/images';
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "../Uitilities/axios";
import { setToken } from "../Uitilities/cookie";
import ReCAPTCHA from "react-google-recaptcha";


function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [isVerified, setVerified] = useState(false);

    let recaptcha_site_key = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    function onChange(value) {
        axios.post(`GoogleRecaptcha/UpdateGoogleRecaptcha`, JSON.stringify(value), { headers: { "Content-Type": "application/json" } })
            .then(rsp => {
                console.log(rsp);
                if (rsp?.data?.success) {
                    setVerified(true);
                }
            })
    }

    async function LoginBtn(e) {
        e.preventDefault();
        await axios.post("Identity/Login", {
            "UserName": UserName,
            "PasswordHash": Password
        }).then(rsp => {
            // console.log(rsp)
            setToken(rsp.data.token, 'jwt')
            window.location.href = './Lobby'
        }).catch(err => {
            alert(err)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const RegisterBtn = useCallback((e) => {
        e.preventDefault();
        window.location.href = './Register'
    })

    return (
        <div className="login-page container d-flex justify-content-center">
            <Form>
                <div className="login-img">
                    <img src={ImgSystemLogotype} width="250" alt="logo" />
                </div>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control
                        type="userName"
                        placeholder="輸入帳號"
                        onChange={e => setUserName(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        輸入使用者帳號
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <Form.Text className="text-muted">
                        輸入使用者密碼
                    </Form.Text>
                </Form.Group>
                <Row className="btnPart">
                    <Col>
                        <Button disabled={!isVerified} type="submit" id="LoginBtn" className="btn button-act" onClick={LoginBtn}>
                            登入
                        </Button>
                    </Col>
                    <Col>
                        <Button disabled={!isVerified} type="submit" id="RegisterBtn" className="btn button-light" onClick={RegisterBtn}>註冊</Button>
                    </Col>
                </Row>
                <Row className="notrobot">
                    <Col>
                        <ReCAPTCHA
                            sitekey={recaptcha_site_key}
                            onChange={onChange} />
                    </Col>
                </Row>
            </Form>
        </div>
    )

}

export default Login;