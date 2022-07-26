import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "Utilities/axios";
import { setToken } from "Utilities/cookie";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [isVerified, setVerified] = useState(true);
    const history = useNavigate();

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
        await axios.post("auth/login/", {
            "username": UserName,
            "password": Password
        }).then(rsp => {
            setToken(rsp.data.token, 'jwt')
            history('/Home')
        }).catch(err => {
            alert(err)
        })
    }

    const RegisterBtn = useCallback((e) => {
        e.preventDefault();
        history('User/Disclaimers')
    })

    return (
        <div className="login-page container d-flex justify-content-center">
            <Form>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>會員編號</Form.Label>
                    <Form.Control
                        type="userName"
                        placeholder="輸入帳號"
                        onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Row className="btnPart">
                    <Col>
                        <>
                            <Button disabled={!isVerified} type="submit" id="LoginBtn" className="btn button-act" onClick={LoginBtn}>
                                登入
                            </Button>
                        </>
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