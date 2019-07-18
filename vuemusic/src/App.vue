<template>
  <div id="app">
  <!-- 可以写连字符 -->
      <m-header></m-header>
      <tab></tab>
      <keep-alive>
           <router-view></router-view>
      </keep-alive>
      <player></player>
  </div>
</template>

<script>
 import MHeader from './components/m-header/m-header'
 import Tab from './components/tab/tab'
 import Player from './components/player/player'


export default {
     components:{
         MHeader,
         Tab,
         Player
     }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
