<template>
    <section>
        <div>
            <router-link to="/film/now-playing" :class="{'active':flag}">
                正在热映</router-link> 
            <router-link to="/film/coming-soon" :class="{'active':!flag}">
                即将上映
            </router-link>
        </div> 
        <component :is="type"/>
    </section>
</template>
<script>
import np from "./now-playing"
import cs from "./come-soon"
import dt from "../common/details"

export default {
    props:["type"],
    components:{
        "now-playing":np,
        "coming-soon":cs,
        'details':dt
    },
    created(){
        this.flag=this.type=='now-playing'?true:false;  
    },
    watch:{
        type(n){
            this.flag=n=='now-playing'?true:false;  
        }
    },
    data(){
        return {flag:true}
    }
}
</script>
<style scoped lang="scss">
    section{
        width: 100%;
        height:100%;
        min-height:12rem;
        padding:1rem .3rem 1rem;
        box-sizing: border-box;
        background: #f9f9f9;
        >div{
            height:.9rem;
        }
        a{
            width:1.72*2+rem;
            height:.9rem;
            box-sizing: border-box;
            color:#616161;
            font-size:16px;
            line-height: .9rem;
            text-align: center;
            float: left;
        }
        a.active{
            color:#ff5c00;
            border-bottom:.05rem solid #fe6c00;
        }
    }
</style>
