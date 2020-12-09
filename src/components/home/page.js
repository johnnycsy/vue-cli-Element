/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Created by Johnny                                               *
 * User:Johnny                                                     *
 * Date:2020/12/9                                                  *
 * Time:9:44 上午                                                   *
 * QQ:271802190                                                    *
 * Email:johnny_csy@163.com                                        *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export default {
    name: "home",
    data() {
        return {
            num: 1,
            tags: [
                { name: '标签一', type: '' },
                { name: '标签二', type: 'success' },
                { name: '标签三', type: 'info' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' }
            ],
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            sizeList: ["large", "medium", "small"],
            activeName: 'second'
        }
    },
    created() {
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
