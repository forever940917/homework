/**
 * Multations
 * */

import * as types from './Multation-type'


const mutations={
  [types.SET_SINGER](state,singer) {
    state.singer=singer
  },
  [types.SET_PLAYING_STATE](state,flag){
    state.playing=flag
  },
  [types.SET_FULLSCREEN](state,flag){
    state.fullScreen=flag
  },
  [types.SET_PLAYLIST](state,list){
    state.playlist=list
    console.log(state.playlist)
  },
  [types.SET_SEQUENCE_LIST](state,list){
    state.sequenceList=list
  },
  [types.SET_PLAY_MODE](state,mode){
    state.mode=mode
  },
  [types.SET_CURRENT_INDEX](state,index){
    state.currentIndex=index
  }
}

export default mutations
