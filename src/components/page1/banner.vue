<template>
    <div class="banner">
        <ul id="ul" class="swiper-wrapper">
            <li v-for="(item,idx) in pic" :key="idx" class="swiper-slide">
                <a :href="item.url">
                    <img :src="item.imageUrl" :alt="idx">
                </a>
            </li>
        </ul>                                  
    </div>
</template>


<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.css"

export default {
    data(){
        return {pic:''}
    },
    created(){
        this.getData();  
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/billboard/home").then((res)=>{
                this.pic=res.data.data.billboards;
            })
        }
    },
    watch:{
        pic(){
            this.$nextTick(()=>{
                new Swiper(".banner",{
                    loop:true,  //是否无缝播放
                    autoplay:{   //自动切换
                        delay:2000, //时间
                        disableOnInteraction:false   //滑动完是否取消自动播放 
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
    a{display: inline-block;}
    .banner{
        overflow: hidden;
    }
    .banner #ul{
        width:5*7.5+rem;
    }
    img{
        width:100%;
    }
</style>
