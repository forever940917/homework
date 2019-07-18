/*
* 异步操作，如果多次提交multations
* 那么可以封装一个action
* */
import * as types from './Multation-type'

export const selectPlay =function ({commit,state},{list,index}){
   commit(types.SET_SEQUENCE_LIST,list)
   commit(types.SET_PLAYLIST,list)
   commit(types.SET_CURRENT_INDEX,index)
   commit(types.SET_FULLSCREEN,true)
   commit(types.SET_PLAYING_STATE,true)
   //
}

