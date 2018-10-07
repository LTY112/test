<template>
    <div class="details">
        <img :src="dtl.cover.origin" alt="">
        <ul>
            <h6>影片简介</h6>
            <li>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span>{{dtl.director}}</span></li>
            <li class="shu">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for="(item,idx) in dtl.actors" :key="idx">{{item.name}} | </span></li>
            <li>地区语言：<span>{{dtl.nation}}({{dtl.language}})</span></li>
            <li>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：<span>{{dtl.category}}</span></li>
            <li>上映日期：<span>{{dtl.nation}}</span></li>
            <li>{{dtl.synopsis}}</li>
        </ul>
        <a href="">立即购票</a>
    </div>
</template>

<script>
import bus from "../bus"

export default {
    props:['id'],
    data(){
        return {dtl:{
            cover:{}
        }}
    },
    created(){
        this.getData(this.id)
      
    },
    methods:{
        getData(id){
           this.$http.get("/mz/v4/api/film/"+id).then((res)=>{
                this.dtl=res.data.data.film;
                bus.$emit("head",this.dtl.name)
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .details{
        padding-top:1rem;
        width:7.5rem;
        overflow: hidden;
        img{
            width:100%;
            display: block;
        }
    }
</style>
