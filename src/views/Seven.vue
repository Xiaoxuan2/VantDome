<template>
    <div id="Seven">
       <div class="fh">
           <van-nav-bar title="蓝思分级阅读测频体系" left-text=""
            left-arrow  @click-left="submit">
            </van-nav-bar>
       </div>
            <div class="textder">
            {{obj}}
           <p><strong style="font-size:18px;">一.蓝思阅读测评体系如何衡量读物难度</strong></p>
<span v-for="(objs,index) in obj.slice(1,15)" :key="index">
   <!-- slice(6,12) 输出 obj中得6-12字符-->
    {{objs.name}}
     <!-- slice(6,12) 输出 obj中得name-->
 </span>
             
            </div>

    </div>
</template>
<script>
export default {
    name:"Seven"
    ,
    data() {
        return {
            obj:''
        }
    },
    methods: {
        submit:function(){
            this.$router.back();
        }
    },
    created() {
        this.axios.get("http://yapi.dapengjiaoyu.com/mock/380/order")
        .then((res)=>{  
            this.obj=res.data.data
            console.log(this.obj)
        })
    },
}
</script>
<style scoped>
.fh{
        position: fixed;
    width: 100%;
    top: 0;
    /* height: 50px; */

}
    .textder{
        
    width: 94%;
    padding: 0px 13px;
   margin-top: 49px;
    word-break: break-all;
  
    }
</style>