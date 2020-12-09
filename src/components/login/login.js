/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/8                                                  *
 * Time:4:10 下午                                                   *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

export default {
    name: "login",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    created() {
        this.pageInit()
    },
    methods: {
        pageInit() {
            this.$emit('left', false)
            this.$emit('top', false)
        },
        onLogin() {
            this.glApp.toast('登陆时间，待开发', 'warning')

            this.$emit('left', true)
            this.$emit('top', true)

            this.$router.push({path: '/home'})
        }
        /*END METHODS*/
    }
}
