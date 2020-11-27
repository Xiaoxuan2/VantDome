
// 底部公共组件
<template>
    <div id="FootNav">
         <div class="foot">
    <van-tabbar v-model="active" active-color="#01A5FF" inactive-color="#000">
  <van-tabbar-item icon="wap-home" to="/One">首页</van-tabbar-item>
  <van-tabbar-item icon="live" to="/Two">学习</van-tabbar-item>
  <van-tabbar-item icon="contact" dot>我的</van-tabbar-item>

</van-tabbar>
         </div>   
    </div>
</template>
<script>

export default {
    name:"FootNav",
     data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
  methods: {
      submit:function(){
          this.$router.push({
              name:"One"
          })
      }
  },
}
</script>

<style scoped>
 .foot{
  
     position: fixed;
  
     bottom: 0;
      /* border-top: 0.01px solid #EBEBEB;
    padding: 0.093333rem 0rem !important;
        width: 100%;
     display: flex;   flex-wrap: wrap; */
 }
  /* .foot ul{
      display: flex;
      align-self: center;
      justify-content: center;
     width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  .foot ul li{
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center
  }
  .foot ul li>img{
     width: 0.3rem;
  }
   .foot ul li>p{
         padding-top:0.066667rem !important;
  } */
</style>