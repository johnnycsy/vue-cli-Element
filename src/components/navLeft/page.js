/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/9                                                    *
 * Time:10:00 上午                                                    *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import navList from "@/components/navLeft/navList";

export default {
    name: "navLeft",
    data() {
        return {
            val: navList,
            isCollapse: false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        navLink(event) {
            console.log(event)
            // eslint-disable-next-line no-unused-vars
            this.$router.push({path: event.path}).catch(err=>{console.log('已经打开')})
        }
        /* END METHODS */
    }
}
