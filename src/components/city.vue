<template>
    <div class="city">
        <ul>
            <li>GPS定位你所在的城市</li>
            <dd class="remen"><span>深圳</span></dd>
        </ul>
           
        <ul>
            <li>{{shuju1.shang}}</li>
            <span v-for="(item,idx) in shuju1.xia" :key="idx">
            {{item}}</span>
        </ul>
        <ul>
            <li>{{shuju2.shang}}</li>
            <a :href="'#'+item" v-for="(item,idx) in shuju2.xia" :key="idx">
                <span @click="maodian(item)">{{item}}</span></a>
        </ul>
        <ul v-for="(item,idx) in diming" :key="idx">
            <li :id="item.zm" v-if="idx==0||diming[idx-1].zm!=diming[idx].zm">
                {{item.zm}}
            </li>
            
            <span>
                {{item.name}}
            </span>
            
        </ul>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
        shuju1:{shang:'热门城市',xia:['北京','上海','广州','深圳']},
        shuju2:{shang:'按字母排序',xia:'ABCDEFGHJKLMNPQRSTWXYZ'},
        diming:[]
        }
    },
    created(){
        this.getData(); 
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/city").then((res)=>{
                var arr=res.data.data.cities;
                arr=arr.sort((a,b)=>{
                    return a.pinyin[0].charCodeAt()-b.pinyin[0].charCodeAt()
                })
                this.diming=arr.map(item=>{
                    return {
                        'name':item.name,
                        'id':item.id,
                        'zm':item.pinyin[0]
                    }
                })
                
            })
        },
        maodian(n){
            if(n!='Y'&&n!='Z'){
                setTimeout(function(){
                    document.documentElement.scrollTop-=50;
                },10)
            }
            
            
        }
    }
    
}
</script>

<style scoped lang="scss">
    .city{
        width:7.5rem;
        padding-top:1rem;
    }
    li{
        height:.77rem;
        background: #ebebeb;
        text-indent: .31rem;
        color:#333333;
        font-size:14px;
        line-height: .77rem;
        clear: both;
    }
    .remen{
        span{
            color:#e2941a;
        }
        
    }
    
    span{
        color:#838383;
        line-height: .9rem;
        font-size: 16px;
        height:.9rem;
        display: inline-block;
        float: left;
        width:7.5/4+rem;
        text-align: center;
        border-bottom:1px solid #ebebeb;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    
</style>
