import { request } from './request'

export function getbanner() {
    return request({
        url: '/home/multidata'
    })
}

// export function gethomegoods() {
//     return request({
//         url: "",
//         params:{

//         }
//     })
// }