<template>
    <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut" >
    <nav v-show="flag">  
        
        <div  @click="toggle"></div>
       
        <transition enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutLeft" >
        <ul v-show="flag">
        <li v-for="item in list" :key="item.id" @click="toggle" >
            <dd @click="mzd"><router-link :to="item.path">{{item.text}}<i class="fa fa-angle-right"></i></router-link></dd>
            
        </li>
        </ul>
        </transition>

    </nav>
     </transition>
</template>
<script>
import bus from "../bus"

export default {
    props:["flag","toggle"],
    data(){
        return {
            dianji:'',
            flag1:'',
            list:[
                {
                    id:1,
                    text:"首页",
                    path:"/home"
                },
                {
                    id:2,
                    text:"影片",
                    path:"/film/now-playing"
                },
                {
                    id:3,
                    text:"影院",
                    path:"/cinema"
                },
                {
                    id:4,
                    text:"商城",
                    path:"/"
                },
                {
                    id:5,
                    text:"我的",
                    path:"/"
                },
                {
                    id:6,
                    text:"卖座卡",
                    path:"/"
                }
            ]
        }
    },
    methods:{
        mzd(){
            bus.$emit("head","卖座电影")
        }
    }
}
</script>
<style scoped>
    /* .v-enter{
        transform: translateX(-100%);
    }
    .v-leave{
        transform: translateX(0);
    }
    .v-enter-to{
        transform: translateX(0);
    }
    .v-leave-to{
        transform: translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        transition:all 0.4s;
    } */
    .animated {
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    
    nav{
        width:100%;
        height:100%;
        position: fixed;
        top:1rem;
        z-index: 5;
    }
    ul{
        position: absolute;
        width:5.31rem;
        height:100%;
        background:#282828 url(../../assets/3.png) no-repeat;
        background-size:5.31rem 6.08rem;
        
    }
    li{
        height:1.01rem;
        text-indent: .32rem;
    }
    a{
        display: block;
        line-height: 1.01rem;
        font-size:14px;
        color:#9a9a9a;
    }
    a:active{
        background:#383636;
    }
    div{
        width: 100%;
        height:100%;
        background:#000;
        opacity: 0.5;
        position: absolute;
    }
    i{
        float: right;
        color:#646464;
        font-size:22px;
        line-height: 1rem;
        margin-right:0.4rem;
    }
</style>
