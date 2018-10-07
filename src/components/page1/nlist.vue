<template>
    <div class="nlist">
        <router-link  v-for="(item,idx) in slist" :key="idx" :to="'/films/'+item.id">
            <ul>
                <li><img :src="item.cover.origin" alt=""></li>
                <li class="fl">
                    <h6>{{item.name}}</h6>
                    <div>{{item.cinemaCount}}家影院上映 0人购票</div>
                </li>
                <li class="fr">{{item.grade}}</li>
            </ul>
        </router-link>  
        <router-link to="/film/now-playing"><div>更多热映电影</div></router-link>                     
    </div>
    
</template>


<script>

export default {
    data(){
        return {slist:''}
    },
    created(){
        this.getData(); 
        
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/film/now-playing").then((res)=>{
                this.slist=res.data.data.films;
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .nlist{
        padding:0.36rem 0.34rem 0.6rem;
        height:100%;
        ul{
            background: #f9f9f9;
            height:4.82rem;
            width:6.86rem;
            
            box-shadow: 0 0 1px 1px #ddd;
            img{
                width: 100%;
            }
            .fl{
                float: left;
                text-indent: .26rem;
                h6{
                    color:#333333;
                    height:.57rem;
                    line-height: .8rem;
                    font-size:12px;
                }
                div{
                    color:#9a9a9a;
                    font-size:10px;
                    line-height: .3rem;
                }
            }
            .fr{
                float: right;
                line-height: 1rem;
                color:#f78360;
                font-size:20px;
                margin-right:.32rem;
            }
        }
        >a{
            display: inline-block;
            margin-bottom: .32rem;
            >div{
            width:3.2rem;
            height:.61rem;
            border-radius: 0.3rem;
            border: 1px solid #bababa;
            text-align: center;
            line-height: .61rem;
            color:#616161;
            font-size:12px;
        }}
        >a:last-of-type{
            margin-left:1.81rem;
            margin-bottom:0;
        }
        >a:active{
            opacity: 0.5;
        }
    }
</style>
