<template>
  <div class="singer" ref="singer">
<!--      在listview中监听select 事件-->
       <list-view :data="singer" @select="selectSinger"></list-view>
       <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import {getSingerList} from 'api/singer'

    import {ERR_OK} from 'api/config'
    import Singer from 'common/js/singer'
    import ListView from 'base/listview/listview'
    import {mapMutations} from 'vuex'

    const HOT_NAME='热门'
    const HOT_SINGER_LEN=10

  export default {
       created(){
           this._getSingerList()
       },
       data(){
          return {
               singer:[]
          }
       },
       methods:{
         selectSinger(singer) {
             this.$router.push({
               path: `/singer/${singer.id}`
             })
            this.setSinger(singer)
         },

          _getSingerList(){
             getSingerList().then((res)=>{
                if(res.code===ERR_OK){
                     this.singer=this._normalizeSinger(res.data.list)
                }
             })
          },



          _normalizeSinger(list){
              let map={
                hot:{
                    title:HOT_NAME,
                    item:[]
                }
              }
              list.forEach((item,index)=>{
                  if(index<HOT_SINGER_LEN){
                      map.hot.item.push(new Singer({
                           id:item.Fsinger_mid,
                           name:item.Fsinger_name
                      }))
                  }
                  const key=item.Findex
                  if(!map[key]){
                    map[key]={
                        title:key,
                        item:[]
                    }
                  }
                  map[key].item.push(new Singer({
                       id:item.Fsinger_mid,
                       name:item.Fsinger_name
                  }))
              })

              // 为了得到有序列表需要处理map 分成ret 和hot两组
              let hot=[]
              let ret=[]
              for(let  key in map){
                let val=map[key]
                if(val.title.match(/[a-zA-Z]/)){
                   ret.push(val)
                }else if(val.title===HOT_NAME){
                    hot.push(val)
                }
              }
              ret.sort((a,b)=>{
                return a.title.charCodeAt(0)-b.title.charCodeAt(0)
              })
              return hot.concat(ret);
          },
           ...mapMutations({
             setSinger: 'SET_SINGER'
           })
       },
      computed:{

      },

       components:{
         ListView
       }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .singer
    position:fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
