<template>
  <div id="Six">
    <div class="fh">
      <van-nav-bar title="听绘本" left-text left-arrow @click-left="submit1"></van-nav-bar>
    </div>
    <div class="cli">
   <van-swipe @change="onChange">
  <van-swipe-item>
    <img src="../assets/33.png" alt="">
  </van-swipe-item>
  <van-swipe-item>  <img src="../assets/33.png" alt=""></van-swipe-item>
  <van-swipe-item>  <img src="../assets/34.png" alt=""></van-swipe-item>
  <van-swipe-item>  <img src="../assets/35.png" alt=""></van-swipe-item>
    <van-swipe-item>  <img src="../assets/36.png" alt=""></van-swipe-item>
  <van-swipe-item>  <img src="../assets/37.png" alt=""></van-swipe-item>
 <van-swipe-item>  <img src="../assets/38.png" alt=""></van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/7
    </div>
  </template>
</van-swipe>

    </div>
  </div>
</template>
<script>
export default {
  name: "Six",
  data() {
    return {
        current: 0,
    
    };
  },
  methods: {
    onChange(index) {
      this.current  = index;
    },
     submit1() {
    console.log(111);
    this.$router.go(-1);
  }
  },
 
};
</script>
<style scoped>

.custom-indicator {
    position: absolute;
       right: 172px;
    top: 0px;
    padding: 2px 5px;
    font-size: 18px;
    /* background: rgba(0, 0, 0, 0.1); */
  }
  .van-swipe-item img{
        width: 95%;
    height: 580px;
        margin-left: 7px;
    margin-top: 25px;
  }
</style>