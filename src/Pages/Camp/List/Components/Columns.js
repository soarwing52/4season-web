import { Button } from 'react-bootstrap';
import { toDashDate, DateIsBetween } from "Utilities/DateUtil";

export const COLUMNS = [
    {
        Header: '營隊名稱',
        accessor: 'title',
        Cell: (props) => {
            let rowData = props.row.original;
            let url = `Detail/${rowData.id}`;
            return <p><a href={url}>{rowData.title}</a></p>
        }
    },
    {
        Header: '活動日期',
        Cell: (props) => {
            let rowData = props.row.original;
            return (
                <>
                    <p>{toDashDate(rowData.register_date_start, "-")}</p>
                    <p>{toDashDate(rowData.register_date_due, "-")}</p>
                </>
            )
        }
    },
    {
        Header: '結束日期',
        accessor: 'trip_date_end'
    },
    {
        Header: '報名開始日期',
        accessor: 'register_date_start',
        Cell: ({ cell: { value } }) => {
            return <p>{toDashDate(value, "-")}</p>
        }
    },
    {
        Header: '報名',
        Cell: (props) => {
            let rowData = props.row.original;
            let disabled = !DateIsBetween(rowData.register_date_start, rowData.register_date_due)
            return (
                <>
                    <Button disabled={disabled}>報名</Button>
                </>
            )
        }
    },
]