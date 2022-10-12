import cookie from 'react-cookies'

// 设置cookie
export function setCookie(user:any,name:string) {
     // 失效时间 60分钟
    let expires = new Date(new Date().getTime() + 60 * 60 * 1000);//60分钟
    cookie.save(name, user, { path: '/' ,expires})
}

// 获取cookie
// name 需要获取cookie的key
export function getCookie(name:string) {
    return cookie.load(name)
}


//  用户退出 删除cookie
export function clearCookie(name:string) {
    cookie.remove(name)
    window.location.href = '/home'
}
