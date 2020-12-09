/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/9                                                    *
 * Time:10:33 上午                                                    *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
const navList = [
    {
        name: '导航名称',
        path: '/home',
        icon: 'el-icon-location',
        key: '1',
        child: false
    },

    {
        name: '二级导航',
        // path: '/newPage',
        icon: 'el-icon-location',
        key: '2',
        child: [
            {
                name: '新建页面',
                path: '/newPage',
                key: '2-1'
            }
        ]
    },

    {
        name: '返回登入',
        path: '/',
        icon: 'el-icon-location',
        key: '3',
        child: false
    },

]
export default {navList}
