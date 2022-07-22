import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Disclamers = () => {
    const history = useNavigate();
    const agree = () => {
        history.push('/User/Register');
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h3>會員資格與權益</h3>
                <p>
                    會員年費說明 :<br />
                    ◎普通會員 : 年度會員常費 NT$600  (效期 : 當年1月~12月, 首次入會皆為普通會員)<br />
                    ◎永久會員 : 會費 NT$6,000  (效期 : 終生, 加入協會滿三年者方有資格申請成為永久會員)<br />
                    <br />
                    會員權益 :<br />
                    ◎免費報名參加於四季會館舉辦之不定期室內課程或分享講座 (非營隊課程)。<br />
                    ◎享本會網站內溯溪知識技能之網路閱覽權限。<br />
                    ◎享本會行程活動之網路報名權限。<br />
                    (部分行程需洽詢領隊報名, 報名資格須符合領隊定義, 如: 體驗營或初溯營結業, )<br />
                    <br />
                    會費繳納帳戶 :<br />
                    ◎匯款銀行：永豐銀行（萬華分行）(ATM代號：807)<br />
                    ◎匯款帳號： 105-018-0003005-3<br />
                    ◎匯款戶名： 台灣四季溯溪協會<br />
                    <br />
                    請先繳納年度會費NT$600至以上帳戶, 再請依下列表單輸入繳款資訊 & 個人基本資料, 以利本會建立會員檔案 。<br />
                </p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h5> 會員活動費用說明 :</h5>
                本會行程活動, 會員活動費用說明 :<br />
                ◎一天活動 : NT$350<br />
                ◎兩天活動 : NT$450<br />
                ◎三天活動 : NT$550 (含三天以上)<br />
                以上活動費用不含保險費、車資、伙食、個人裝備, 亦不需預繳。<br />
                各行程的活動費 & 保險費用由隊伍領隊於活動時統一收取後繳交至協會。<br />
                以上會員年費與活動費用, 本會保留變更權利。<br />
                若有異動調整, 皆經年度會員大員中提案表決同意後, 於四季協會網站公告。<br />
                <br />
                ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝<br />
                <br />
                若對於本會有其他疑問, 亦歡迎來信詢問<br />
                ◎理事長 : director@4season.org.tw<br />
                ◎活動諮詢 : 秘書長 secretary@4season.org.tw<br />
                ◎入會繳款 : 輪值財務 financial@4season.org.tw<br />
                <br />
                ◎台灣四季溯溪協會  官網 : http://www.4season.org.tw/<br />
                ◎四季溯溪之友          臉書 : https://www.facebook.com/groups/4seasonsTw/?fref=ts<br />
                <br />
                本會會址：新北市板橋區縣民大道三段187巷2號3樓<br />
            </div>
            <div>
                依據個人資料保護法第19條第1項第5款及第七條第1款規定，本人同意提供個人資料予台灣四季溯溪協會為下開特定目的範圍內之蒐集、處理及利用。
                資料僅限本協會辦理入山證入園證、代辦旅行平安險，及會員聯絡用。
            </div>
            <Row>
                <Col>
                    <Button onClick={() => history('/Home')}>我不同意</Button>
                </Col>
                <Col>
                    <Button onClick={() => history('/User/Register')}>我同意</Button>
                </Col>
            </Row>
        </>
    )
}

export default Disclamers;