<template>
    <div class="clist">
        <div class="tit">即将上映</div>
            <router-link  v-for="(item,idx) in clist" :key="idx" :to="'/films/'+item.id">
                <ul >
                    <li><img :src="item.cover.origin" alt=""></li>
                    <div>
                        <li class="fl">
                            <h6>{{item.name}}</h6>
                        </li>
                        <li class="fr">12月31日上映</li>
                    </div>
                </ul>
            </router-link>  
            <router-link to="/film/coming-soon"><div>更多即将上映电影</div></router-link>                     
    </div>
    
</template>


<script>

export default {
    data(){
        return {clist:''}
    },
    created(){
        this.getData(); 
        
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/film/coming-soon?page:1&&count=3").then((res)=>{
                this.clist=res.data.data.films;
            })
        }
    }
}
</script>

<style scoped lang="scss">
     .clist{
        height:100%;
        border-top:1px solid #a8a8a8;
        margin-top:.2rem;
        padding-bottom:.6rem;
        .tit{
            width:1.3rem;
            margin:-.2rem 0 .78rem 3.1rem ;
            height:.4rem;
            border-radius:.1rem;
            background: #a7a7a7;
            color:#eaeaea;
            text-align: center;
            line-height: .4rem;
            font-size:10px;
        }
        ul{
            background: #f9f9f9;
            width:6.86rem;
            box-shadow: 0 0 1px 1px #ddd;
            >div{
                height:.7rem;
            }
            img{
                width: 100%;
            }
            .fl{
                float: left;
                text-indent: .26rem;
                
                h6{
                    color:#333333;
                    line-height: .7rem;
                    font-size:12px;
                }
            }
            .fr{
                float: right;
                line-height: .7rem;
                color:#f5a886;
                font-size:12px;
                margin-right:.98rem;
            }
        }
        >a{
            margin-left: 0.34rem;
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
            margin-left:1.81+0.34+rem;
            margin-bottom:0;
        }
        >a:active{
            opacity: 0.5;
        }
    }
</style>
