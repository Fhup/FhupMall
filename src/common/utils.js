//节流函数
export function debounce(fn, delay) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function(...args) {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => {
            // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的
            // interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            fn.apply(this, args);
        }, delay);
    }
}


// 时间戳转换为日期格式
// import { formatDate } from "@/common/utils";
// let date = new Date(value * 1000);
// return formatDate(date, 'yyyy-MM-dd')
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};