import Mock from 'mockjs'
const Random = require('mockjs').Random;

// let str = Mock.mock({
//     "string|4": "哈哈"
// })

// console.log(typeof str);
// console.log(str);


// const newsList = Mock.mock({
//     "newsList|75": [{
//         id: "@increment",
//         title: "@ctitle(2,3)",
//         content: "@cparagraph(1)",
//         //img_url: "@image('50*50','#FF83FA','#FCFCFC','png','fhf')",
//         img_url: Random.dataImage('200x100', Mock.mock({
//             "string": "@cword"
//         }).string),
//         images: 'https://api.pingping6.com/tools/scenery/index.php',
//         add_time: "@date(yyyy-MM-dd hh:mm:ss)",
//     }, ],
// });





//mock随机数据
let chartData = []
for (let i = 0; i < 10; i++) {
    let newArticleObject = {
        id: "@increment",
        cfav: Mock.mock({
            "number|1-99": 1
        }).number,
        content: "@cword(16,26)",
        price: Mock.mock({
            "number|199-299": 2
        }).number,
        //img_url: "@image('50*50','#FF83FA','#FCFCFC','png','fhf')",
        img_url: Random.dataImage('100x130', Mock.mock({
            "string": "@cword"
        }).string),
        // images: 'https://api.pingping6.com/tools/scenery/index.php',
        add_time: "@date(yyyy-MM-dd hh:mm:ss)",
    }
    chartData.push(newArticleObject)
}

const newsList = Mock.mock({
    "newsList": chartData
});

// console.log(newsList);

export default {
    newsList
}