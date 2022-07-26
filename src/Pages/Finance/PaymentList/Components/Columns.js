import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import axios from "Utilities/axios";
import { userContext } from "Components/Authentication/userContext";


export const COLUMNS = [
    {
        Header: '姓名',
        accessor: 'name',
    },
    {
        Header: '信箱',
        accessor: 'email',
    },
    {
        Header: '電話',
        accessor: 'phone',
    },
    {
        Header: '匯款日期',
        accessor: 'transfer_date',
    },
    {
        Header: '帳號後五碼',
        accessor: 'account_number',
    },
    {
        Header: '備註',
        accessor: 'memo',
    },
    {
        Header: '功能',
        Cell: (props) => {
            let rowData = props.row.original;
            const [user,] = useContext(userContext);

            const confirmPayment = () => {
                let temp = {
                    "confirmed": true,
                    "confirm_person": user.name
                }
                axios.put("finance/PaymentConfirm/2/", temp)
                    .then(rsp => console.log(rsp))
                    .catch(err => { alert(err); console.log(err) });
            }
            const isConfirmed = () => {
                if (rowData.confirmed) {
                    return (
                        <h5>
                            <Badge bg="secondary">匯款已確認</Badge>
                        </h5>
                    )
                }
                else {
                    return (
                        <>
                            <Button onClick={confirmPayment}>
                                確認匯款
                            </Button>
                        </>
                    )
                }
            }
            return (
                <>
                    {isConfirmed()}
                </>
            )
        },
    },
    {
        Header: '動作',
        Cell: (props) => {
            let rowData = props.row.original;

            return (
                <>
                    <Button onClick={() => { console.log(rowData) }}>
                        新建會員
                    </Button>
                    <Button>
                        營隊成員確認
                    </Button>
                </>
            )
        }
    }
]