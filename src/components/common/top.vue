<template>
    <div class="header">
        <li @click="toggle"></li>
        <h1 @click="toggle">{{mzdy}}</h1>
        <div></div>
        <router-link to="/city"><span @click="posi">北京&nbsp;&nbsp;<i class="fa fa-angle-down"></i></span></router-link>
    </div>
</template>
<script>
    import bus from "../bus"

    export default{
        props:["toggle"],
        data(){
            return {mzdy:'卖座电影'}
        },
        watch:{
            $route:{
                handler(route){
                    if(!route.params.id&&route.path!='/city'){
                        this.mzdy="卖座电影"
                    }
                },
                immediate:true
            }
        },
        created(){
            bus.$on("head",(n)=>{
                this.mzdy=n;
            })
        },
        methods:{
            posi(){
                this.mzdy="选择城市"
            }
        }
    }
</script>
<style scoped>
    .header{
        position: fixed;
        z-index: 4;
        width:100%;
        height:1rem;
        background: #282828;
    }
    li{
        width:1rem;
        height:1rem;
        background:url(../../assets/1.png) no-repeat;
        background-size:1rem 1rem;
        float: left;
    }
    li:active{
        opacity: 0.7;
    }
    h1{
        height:1rem;
        font-size:14px;
        text-align: center;
        line-height:1rem;
        float: left;
        color:#fff;
        margin-left:.2rem;
    }
    span{
        float: right;
        line-height: 1rem;
        font-size:14px;
        color:#999999;
        margin-right:0.1rem;
    }
    .header div{
        float: right;
        width:.92rem;
        height:1rem;
        background:url(../../assets/2.png) no-repeat;
        background-size:.92rem 1rem;
    }
</style>
