//封装Home页面的所有请求
import {request} from './index'

export   function  gethomedata () {
     return  request({
        url:'/home/multidata'
    })

}