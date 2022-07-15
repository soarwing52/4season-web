import _axios from "axios"
import { GetUser } from "../Authentication/UserStatus";

const axios = (baseURL) => {
    let user = GetUser();
    //建立一個自定義的axios
    const instance = _axios.create({
        baseURL: baseURL || process.env.REACT_APP_API_URL, //JSON-Server端口位置
        timeout: 10000,
        headers: { Authorization: `Bearer ${user.token}` }
    });

    return instance;
}

export { axios };
export default axios();