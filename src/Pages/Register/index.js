import React, { useState, useEffect } from 'react';
import { ImgSystemName } from '../style/images';
import axios from "../Uitilities/axios";
import validator from 'validator';
import { Form, Button, } from "react-bootstrap";
import './Register.scss';

function Register() {
    const [AllValues, setAllValues] = useState({
        UserName: '',
        PasswordHash: '',
        ConfirmPassword: '',
        CName: '',
        Email: '',
        Dept: '',
        Division: '',
        Title: '',
        Phone: '',
        Ext: '',
        Mobile: '',
        Gender: ''
    })

    const changeHandler = e => {
        console.log(e.target.id)
        console.log(e.target.value)
        setAllValues({ ...AllValues, [e.target.id]: e.target.value })
        console.log(AllValues)
    }

    const checkPasswordConsistency = () => {
        if (!passwordConsistency()) {
            alert("密碼不一致")
            return
        }
    }

    function passwordConsistency() {
        return AllValues.ConfirmPassword === AllValues.PasswordHash
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordConsistency()) {
            alert("密碼不一致!");
            return;
        }
        const data = AllValues;
        data["Gender"] = data.Gender === "Male" ? true : false;
        data["RegDate"] = new Date().toISOString();
        delete data.ConfirmPassword
        console.log(data)
        await axios.post('Identity/User', data)
            .then(rsp => {
                alert("帳號建立成功，等管理員核准後即可登入");
                window.location.href = '/'
            })
            .catch(err => {
                console.log(err)
            })
    }

    const validateEmail = (e) => {
        var email = e.target.value

        if (!validator.isEmail(email)) {
            alert("Email輸入錯誤請重新輸入")
        }
    }
    useEffect(() => {
        import('./Login.scss');
    }, [])

    return (
        <div className="login-container container d-flex justify-content-center">
            <Form id="registerForm">
                <div className="login-img">
                    <img src={ImgSystemName} width="350" alt="logo" />
                </div>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control
                        type="userName"
                        placeholder="輸入欲創建之帳號名稱"
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PasswordHash">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ConfirmPassword">
                    <Form.Label>確認密碼</Form.Label>
                    <Form.Control type="password" onChange={changeHandler} onBlur={checkPasswordConsistency} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="CName">
                    <Form.Label>名稱</Form.Label>
                    <Form.Control type="text" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>電子郵件</Form.Label>
                    <Form.Control type="email" onChange={changeHandler} onBlur={validateEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Dept">
                    <Form.Label>組織</Form.Label>
                    <Form.Control type="text" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Division">
                    <Form.Label>部門</Form.Label>
                    <Form.Control type="text" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>職稱</Form.Label>
                    <Form.Control type="text" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Gender">
                    <Form.Label>性別</Form.Label>
                    <Form.Select type="text" onChange={changeHandler}>
                        <option value=""></option>
                        <option value="Male">男性</option>
                        <option value="Female">女性</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Phone">
                    <Form.Label>連絡電話</Form.Label>
                    <Form.Control type="tel" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Ext">
                    <Form.Label>分機</Form.Label>
                    <Form.Control type="number" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mobile">
                    <Form.Label>行動電話</Form.Label>
                    <Form.Control type="tel" onChange={changeHandler} />
                </Form.Group>
                <Button type="submit" className="button-act" value="送出資料" onClick={handleSubmit} >送出資料</Button>
            </Form>
        </div>
    );
}

export default Register;
