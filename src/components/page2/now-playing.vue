<template>
    <div class="np">
        <router-link  v-for="(item,idx) in nplist" :key="idx" :to="'/films/'+item.id">
            <ul>
                <img :src="item.poster.origin" alt="">
                <li class="fl">
                    <h6>{{item.name}}</h6>
                    <div>{{item.intro}}</div>
                    <dd>
                        <span>{{item.cinemaCount}}</span>家影院上映
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>0</span>人购票
                    </dd>
                </li>
                <li class="fr">
                    {{item.grade}}<i>></i>
                </li> 
            </ul>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {nplist:[],y:0}
    },
    created(){
        this.getData(1); 
        
    },
    mounted(){
        window.addEventListener("scroll",this.scr);
    },
    watch:{
        y(n){
            this.getData(n);
        }
    },
    methods:{
        getData(p){
           this.$http.get("/mz/v4/api/film/now-playing?page="+p+"&count=7").then((res)=>{   
                   this.nplist=this.nplist.concat(res.data.data.films);
            })
        },
        scr(){
            this.scroT=document.documentElement.scrollTop;
            if(this.scroT>320&&this.y==0){
                this.y=2;
            }
            
            var x=Math.floor((this.scroT-320)/845)+2  
            this.y=this.y<x&&this.y>=2?x:this.y;
        }
    }
}
</script>

<style scoped lang="scss">
    .np{
        width:6.9rem;
        border-top:1px solid #fd8223;
        height:100%;
        >a{
            display: block;
        }
        >a:active{
            opacity: 0.5;
        }
        ul{
            padding-top:.4rem;
            border-bottom:1px dashed #c5c5c5;
            height:2rem;
            img{
                width:1.2rem;
                float: left;
                margin-right:.3rem;
            } 
            .fl{
                float: left;
                h6{
                    font-size:16px;
                    color:#111111;
                    height:.65rem;
                    line-height: .65rem;
                    width:3.5rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                div{
                    height:.45rem;
                    line-height: .45rem;
                    color:#838383;
                    font-size:12px;
                }
                dd{
                    line-height: .62rem;
                    color:#838383;
                    font-size:12px;
                    span{
                        color:#7591b4;
                    }
                }
            }
            .fr{
                float: right;
                font-size:16px;
                color:#fc5500;
                height:.65rem;
                line-height: .65rem;
                margin-right:.7rem;
                i{
                    color:#c7c7c7;
                    font-family: "宋体";
                    font-size:10px;
                    float: right;
                }
            }
        }
        >a:last-of-type ul{
            border-bottom:0;
        }
    }
</style>
