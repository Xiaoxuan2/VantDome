
// 底部公共组件
<template>
    <div id="FootNav">
         <div class="foot">
    <van-tabbar v-model="active" active-color="#01A5FF" inactive-color="#000">
  <van-tabbar-item icon="wap-home" to="/One">首页</van-tabbar-item>
  <van-tabbar-item icon="live" to="/Two">学习</van-tabbar-item>
  <van-tabbar-item icon="contact" dot to="/Three">我的</van-tabbar-item>

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
      z-index: 9999 !important;
     bottom: 0;
 }
</style>