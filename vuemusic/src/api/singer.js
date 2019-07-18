import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'
export function getSingerList(){
    const url='https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0'

    const data=Object.assign({},commonParams,{
        // channel:'singer',
        // page:'list',
        // key:'all_all_all',
        // pagesize:100,
        // pagenum:1,
        // loginUin:0,
        // hostUin:0,
        // notice:0,
        // platform:'yqq',
        // needNewCode:0,
        // g_tk:5381,
        // inCharset:'utf8'
    })

    return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid='+singerId
  const data=Object.assign({},commonParams,{})
  return jsonp(url, data, options)
  // return axios.get(url,{
  //   params:data
  // }).then((res)=>{
  //   return Promise.resolve(res.data)
  // }).catch((error)=>{
  //   if(error.response){
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   }else{
  //     console.log(error.message);
  //   }
  // })
}
