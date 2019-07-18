import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

//获取歌曲文件需要的vkey和歌曲名
export function getSongvkey() {
  const url='https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=003lghpv0jfFXG&filename=C400003lghpv0jfFXG.m4a&guid=126548448'
  return jsonp(url,options)
}

//获取歌曲文件
export function getSongurl(vkey,filename) {
  const url='http://dl.stream.qqmusic.qq.com/'+ filename +'?vkey='+vkey

  return jsonp(url,options)
}
