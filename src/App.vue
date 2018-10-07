<template>
  <div id="app">
    <top :toggle="toggle" :n="n"/>
    <cenav :toggle="toggle" :flag="flag"/>
    <router-view />
  </div>
</template>

<script>
import top from './components/common/top'
import cenav from './components/common/nav'
export default {
  name: 'App',
  components:{
    top,cenav
  },
    data(){
       return {flag:false,n:''} 
    },
    methods:{
        toggle(){
            this.flag=!this.flag;
        }
    }
}
</script>

<style>
body,html{
  height:100%;
}
html{font-size:13.33vw;}
#app{
  width:100%;
}
</style>
