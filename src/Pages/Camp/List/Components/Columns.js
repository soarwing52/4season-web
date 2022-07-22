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
        Header: '報名日期',
        Cell: (props) => {
            let rowData = props.row.original;
            let disabled = !DateIsBetween(rowData.register_date_start, rowData.register_date_due)
            const click = () => {
                window.location.href = `Detail/${rowData.id}`
            }
            return (
                <>
                    <p>{toDashDate(rowData.register_date_start, "-")} ~ {toDashDate(rowData.register_date_due, "-")}</p>
                    <Button disabled={disabled} onClick={click}>
                        報名
                    </Button>
                </>
            )
        }
    },
    {
        Header: '活動日期',
        Cell: (props) => {
            let rowData = props.row.original;
            return (
                <>
                    <p>{toDashDate(rowData.trip_date_start, "-")} ~ {toDashDate(rowData.trip_date_end, "-")}</p>
                </>
            )
        }
    },

]