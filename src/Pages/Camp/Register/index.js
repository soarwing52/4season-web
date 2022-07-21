import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { CampParticipant } from '../Models';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import axios from 'Utilities/axios';
import { toDashDate } from 'Utilities/DateUtil';

const CampRegister = () => {
    let { id } = useParams();
    const [participantData, setParticipantData] = useState(new CampParticipant());
    const [genderOption, setGenderOption] = useState([]);

    const GetGenderOptions = async () => {
        let result = await axios.get("camps/gender_options");
        let genders = result.data;
        console.log(genders);
    }

    const Register = async () => {
        let result = await axios.post("camps/CampParticipant/", participantData);
        let data = result.data;
    }

    useEffect(() => {
        setParticipantData(prev => ({ ...prev, camp: id }))
        Promise.all([
            GetGenderOptions()
        ])
    }, [])
    return (
        <>
            <h1>CampRegister</h1>
            <table class="tablestyle">
                <tbody>
                    <tr class="tr-m">
                        <td width="20%">
                            <h4>姓名</h4>
                        </td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="name" size="6" value="" required=""
                                    value={participantData.name}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, name: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>性別</h4></td>
                        <td width="80%"><p align="left">
                            <Form>
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
                            </Form>
                        </p></td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>出生年月日</h4></td>
                        <td width="80%">
                            <p align="left">
                                <label htmlFor="" className="l-fix-header__item-text">出生年月日</label>
                                <input
                                    type="date"
                                    className="form-control form-control-sm"
                                    value={toDashDate(participantData?.birth_date, "-") || ""}
                                    onChange={e => setParticipantData(prevState => ({
                                        ...prevState,
                                        birth_date: new Date(e.target.value)
                                    }))} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>身分證號</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="id_no" size="10" placeholder="英文要大寫" required=""
                                    value={participantData?.citizen_id}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, citizen_id: e.target.value })) }}
                                />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>緊急聯絡人</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="e_contact" size="10" maxlength="10"
                                    value={participantData.emergency_contact_name} required=""
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_name: e.target.value })) }} /></p></td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>與緊急聯絡人關係</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="e_relationship" size="4" required=""
                                    value={participantData.emergency_contact_relation}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_relation: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>緊急聯絡人電話</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="e_phone" size="25" required="" pattern="09\d{2}\d{6}" title="電話號碼為十碼，中間無橫線 例：09xxoooxxx"
                                    maxlength="10"
                                    value={participantData.emergency_contact_phone}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, emergency_contact_phone: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%">
                            <h4>行動電話</h4>
                            <Form.Text className="text-muted">
                                格式為0912345678
                            </Form.Text>
                        </td>
                        <td width="80%">
                            <p align="left"><input type="text" name="mobile" size="25" required="" pattern="09\d{2}\d{6}" title="電話號碼為十碼，中間無橫線 例：09xxoooxxx"
                                maxlength="10"
                                value={participantData.phone}
                                onChange={(e) => { setParticipantData(prev => ({ ...prev, phone: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>電話(家)</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="phone_home" size="25" value={participantData.land_line}
                                    maxlength="10"
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, land_line: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>

                    <tr class="tr-m">
                        <td width="20%"><h4>EMAIL</h4></td>
                        <td width="80%"><p align="left"><input type="email" name="email" size="30" required=""
                            value={participantData.email}
                            onChange={(e) => { setParticipantData(prev => ({ ...prev, email: e.target.value })) }} /></p></td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>FB Id</h4></td>
                        <td width="80%"><p align="left"><input type="text" name="msn" size="35"
                            value={participantData.facebook_name}
                            onChange={(e) => { setParticipantData(prev => ({ ...prev, facebook_name: e.target.value })) }} /></p></td>
                    </tr>

                    <tr class="tr-m">
                        <td width="20%"><h4>出生地</h4></td>
                        <td width="80%"><p align="left"><input type="text" name="b_place" size="35"
                            value={participantData.birth_location}
                            onChange={(e) => { setParticipantData(prev => ({ ...prev, birth_location: e.target.value })) }} /></p></td>
                    </tr>
                    <tr class="tr-m">
                        <td width="20%"><h4>住址</h4></td>
                        <td width="80%">
                            <p align="left">
                                <input type="text" name="b_address" size="10" maxlength="5" placeholder="住址郵遞區號"
                                    value={participantData.postal_code}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, postal_code: e.target.value })) }} />
                                <input type="text" name="address" size="35"
                                    value={participantData.address}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, address: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <input type="hidden" name="join_year" size="4" value="111" />
                    <tr class="tr-m">
                        <td width="20%"><h4>溯溪經歷</h4></td>
                        <td width="80%">
                            <p align="left">
                                <Form.Control as="textarea" rows={3}
                                    value={participantData.experience}
                                    onChange={(e) => { setParticipantData(prev => ({ ...prev, experience: e.target.value })) }} />
                            </p>
                        </td>
                    </tr>
                    <tr class="tr-m">
                        <td colspan="2">
                            <Button onClick={Register} >報名參加營隊</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>)
}

export default CampRegister;