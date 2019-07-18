<template>
  <transition class="slide">
    <music-list :title="title" :bgImage="bgImage" :songs="song" ></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from "api/singer"
  import {getSongvkey,getSongurl} from "../../api/songurl";
  import {ERR_OK} from "api/config"
  import {createSong} from "common/js/song"
  import MusicList from 'components/music-list/music-list'
  export default {
    data(){
      return {
        song:[]
      }
    },
    computed:{
      title(){
        return this.singer.name
      },
      bgImage(){
        return this.singer.avatar
      },
      ...mapGetters({
        singer:'singer'
      }),
    },
    created(){
      this._getDetail()
      this._getSongUrl()
    },
    components:{
      MusicList
    },
    methods:{
      _getSongUrl(){
        let songgetinfo={}
        getSongvkey().then((res)=>{
            console.log(res)
            songgetinfo=res.data.items[0]
            console.log(songgetinfo)
            getSongurl(songgetinfo.vkey,songgetinfo.filename).then((res)=>{
              console.log(res)
            })
         })


      },
      _getDetail(){
        if(!this.singer.id){
          this.$router.push({
            path:`/singer`
          })
          return
        }
        getSingerDetail(this.singer.id).then((res)=>{
          if(res.code===ERR_OK){
             this.song=this._nomalizeSongs(res.data.list)
          }
        })
      },
      _nomalizeSongs(list){
        let ret=[]
        list.forEach((item)=>{
           let {musicData}=item
           if(musicData.songid && musicData.albummid){
             ret.push(createSong(musicData))
           }
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
     transform :translate3d(100%, 0, 0)
</style>
