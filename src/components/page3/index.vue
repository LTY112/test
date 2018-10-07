<template>
    <div class="cinema">
        <ul v-for="(item,index) in cinema" :key="index">
            <li v-if="index==0||cinema[index-1].name!=cinema[index].name" @click="show1(item.name)">
                {{item.name}}
            </li>
            <div class="show" :ref="item.name" v-show="item.name==cinema[0].name">
                <div>{{item.cnm}}</div>
                <span>{{item.adr}}</span>
                <span>距离未知</span>
            </div>
        </ul>
        
    </div>
</template>

<script>
export default {
    data(){
        return {cinema:[],show:'',cix:''}
    },
    created(){
        this.getData();
        
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/cinema").then((res)=>{
                var arr=res.data.data.cinemas;
                arr=arr.sort((a,b)=>{
                    return a.district.name.charCodeAt()-b.district.name.charCodeAt();
                })
                this.cinema=arr.map(item=>{
                    return {
                        'name':item.district.name,
                        'adr':item.address,
                        'cnm':item.name
                    }
                })
               
               
            })     
        },
        show1(n){
            
            var flag=this.$refs[n][0].style.display;
            if(flag=="none"){
                this.$refs[n].forEach(item=>{
                    item.style.display="block"
                })
                
            }else{
                this.$refs[n].forEach(item=>{
                    item.style.display="none"
                })
            }

        }      
    }
    
}
</script>

<style scoped lang="scss">
    .cinema{
        width:7.5rem;
        padding-top:1rem;
        text-indent:.33rem;
        .show{
            border-bottom:1px solid #e1e1e1;
        }
        li{
            height:.8rem;
            background: #e1e1e1;
            line-height: .8rem;
            font-size:14px;
            color:#636363;
            border-bottom:1px solid #fff;
        }
        .show>div{
            height:.88rem;
            font:16px/1.12rem "微软雅黑";
            color:#333333;
        }
        span{
            display: block;
            color:#cccccc;
            font:12px/.43rem "微软雅黑";
            height:.53rem;
            width:5.30rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    
</style>
