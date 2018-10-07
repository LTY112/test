<template>
    <div class="city">
            <li>GPS定位你所在的城市</li>
            <dd class="remen"><span>深圳</span></dd>
            <ul v-for="(item,idx) in shuju1" :key="idx">
                <li>{{item.shang}}</li>
                <dd>
                    <span v-for="(item2,idx2) in item.xia" :key="idx2">
                    {{item2}}</span>
                </dd>
            </ul>
            <ul v-for="(item,idx) in shuju2" :key="idx">
                <li>{{item.shang}}</li>
                <dd>
                    <a :href="'#'+item2" v-for="(item2,idx2) in item.xia" :key="idx2">
                        <span @click="maodian(item2)">{{item2}}</span></a>
                </dd>
            </ul>
            <ul v-for="(item,idx) in zimu2" :key="idx">
                <li :id="item">{{item}}</li>
                <dd>
                    <span v-for="(item2,idx2) in diming[idx]" :key="idx2">
                        {{item2.name}}
                    </span>
                </dd>
            </ul>
        
    </div>
</template>

<script>
export default {
    data(){
        return {ctlist:[],
        shuju1:[{shang:'热门城市',xia:['北京','上海','广州','深圳']}],
        shuju2:[{shang:'按字母排序',xia:'ABCDEFGHJKLMNPQRSTWXYZ'}],
        zimu:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        diming:[],
        zimu2:'ABCDEFGHJKLMNPQRSTWXYZ'
        }
    },
    created(){
        this.getData(); 
    },
    methods:{
        getData(){
           this.$http.get("/mz/v4/api/city").then((res)=>{
                this.ctlist=res.data.data.cities;
                var arr=[];
                this.ctlist.forEach(item=>{
                    arr.push(item.pinyin[0]);
                })
                this.paixu(arr);
                
                var arr2=[];
                for(var i=0;i<this.zimu.length;i++){
                    
                    if(arr.indexOf(this.zimu[i])!=-1){
                       arr2.push(arr.indexOf(this.zimu[i])); 
                    }
                }
                var arr3=[];
                for(var i=0;i<arr2.length;i++){
                    
                    var fenkai=this.ctlist.slice(arr2[i],arr2[i+1]);
                    
                    arr3.push(fenkai)
                }
                this.diming=arr3;
            })
        },
        paixu(arr){
            for(var i=0;i<arr.length-1;i++){
                for(var k=0;k<arr.length-i-1;k++){
                    if(arr[k]>arr[k+1]){
                        var tem=arr[k+1];
                        arr[k+1]=arr[k];
                        arr[k]=tem;
                        var tem2=this.ctlist[k+1];
                        this.ctlist[k+1]=this.ctlist[k];
                        this.ctlist[k]=tem2;
                    }
                }
            }
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
    }
    .remen{
        span{
            color:#e2941a;
        }
        
    }
    dd{
        span{
            color:#838383;
            line-height: .9rem;
            font-size: 16px;
            height:.9rem;
            display: inline-block;
            width:7.5/4+rem;
            text-align: center;
            border-bottom:1px solid #ebebeb;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
</style>
