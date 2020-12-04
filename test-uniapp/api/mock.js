// 模拟数据
import mainList from "./main-list.js";

// 获取首页列表
export function apiNewList(pageNum, pageSize) {
    return new Promise((resolute, reject) => {
        // 延时一秒,模拟联网
        setTimeout(function() {
            try {
                // 数据
                let data = mainList;
                let list = [];
                if (!pageNum) {
                    // 下拉刷新返回的数据
                    let id = new Date().getTime();
                    let newObj = {
                         id: id,
                        imageUrl: "",
                        title: "疫情风险下的项目管理与紧急预案策略" + id,
                        date: '2020-06-23 21:06',
                        tag:'后端开发',
                        comment: 648,
                        views:12530
                    };
                    list.push(newObj);
                } else {
                    // 上拉加载返回的数据
                    for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
                        if (i == data.length) break;
                        list.push(data[i]);
                    }
                }
                //模拟接口请求成功
                resolute(list);
            } catch (e) {
                //模拟接口请求失败
                reject(e);
            }
        }, 1000)
    })
}
