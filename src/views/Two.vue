<template>
    <div id="Two">
    <div class="two_nav">
      <van-tabs v-model="activeName" swipeable >
  <van-tab title="主线课" name="a">
    <div class="tab_img">
      <img src="../assets/28.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
        <li><p>可以先试试体验课哦~</p> </li>
        <li>
          <a href="tel:4000162915">
            
            <van-button type="info">联系课程顾问
          </van-button></a></li>
     
      </ul>
     
      
    </div>

  </van-tab>
  <van-tab title="体验课" name="b">
     <div class="tab_img">
      <img src="../assets/28.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
        <li><p>可以先试试体验课哦~</p> </li>
        <li><van-button type="info">联系课程顾问</van-button></li>
      </ul>
     
      
    </div>
  </van-tab>
  <van-tab title="公开课" name="c">
     <div class="tab_img">
      <img src="../assets/28.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
        <li><p>想上课就去报名吧~</p> </li>
        <li><van-button type="info">去报名</van-button></li>
      </ul>
     
      
    </div>
  </van-tab>
</van-tabs>
    </div>

    </div>
</template>
<script>
export default {
    name:"Two",
     data() {
    return {
      activeName: 'a',
    };
  },
}
</script>


<style scoped>
::v-deep .van-tab--active {
    color: #0FAAF0;
    font-weight: 500;
}
.van-button--info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
    border-radius: 29px;
    width:1.4rem;
        margin-top: 0.666667rem;
    }
.tab_img p{
  color:#DADADA;
}
.tab_img img{
  width: 83%;
   align-self: center;
}
.tab_img ul{
  align-self: center;
  text-align: center;font-size: 0.15rem;

}
.tab_img ul li{
  height: 0.25rem;
}
.tab_img{
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0.9888888rem;
}
 ::v-deep .van-tabs__line {
    background: none;
     position: absolute;
    bottom: 15px;
    left: 0;
     z-index: 1;
    width: 40px;
    height: 6px;
    border: 3px solid #0FAAF0;
    border-radius: 0 0 50% 50%/0 0 100% 100% ;
    border-top: none;
}
</style>