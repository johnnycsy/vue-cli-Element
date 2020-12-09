/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/8                                                    *
 * Time:4:00 下午                                                    *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import Axios from "axios";
import {Message} from "element-ui";

const api = {
    url: ''
}

const toast = (msg, types = 'error') => {
    Message({message: msg, type: types})
}

const http = (urls, datas, methods = "POST", headers = {'Content-Type': 'application/x-www-form-urlencoded'}) => {
    return new Promise(resolve => {
        Axios({
            method: methods,
            url: urls,
            data: datas,
            headers: headers
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            console.error(err)
            toast('服务连接失败')
        })
    })
}

export default {api, http, toast}
