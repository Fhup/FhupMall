import axios from 'axios'
// 歌曲接口
// https: //api.uomg.com/api/rand.music?sort=%E7%83%AD%E6%AD%8C%E6%A6%9C&format=json
export function getDetailinfo() {
    const instance = axios.create({
        baseURL: "https://api.uomg.com",
        type: 'GET',
        dataType: 'jsonp',
        timeout: 5000
    })
    return instance({
        url: "/api/rand.music",
        params: {
            sort: "热歌榜",
            format: "json",
        },
    });
}

//美文接口
//https://api.uomg.com/api/rand.qinghua?format=json
export function getDetailpaper() {
    const instance = axios.create({
        baseURL: "https://api.uomg.com",
        type: 'GET',
        dataType: 'jsonp',
        timeout: 5000
    })
    return instance({
        url: '/api/rand.qinghua',
        params: {
            format: "json",
        }
    })
}

export class goods {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}