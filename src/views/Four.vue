<template>
    <div id="Four">
        <div class="fh">

<router-link  to="/Comdtiy">
<van-nav-bar title="消息中心" left-text="" left-arrow></van-nav-bar>
</router-link>
        </div>
    <div class="two_nav">
      <van-tabs v-model="activeName">
  <van-tab title="系统通知" name="a">
    <div class="tab_img">
      <img src="../assets/29.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
     
      </ul>
     
      
    </div>

  </van-tab>
  <van-tab title="学习提醒" name="b">
     <div class="tab_img">
      <img src="../assets/29.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
      
      </ul>
     
      
    </div>
  </van-tab>
  <van-tab title="精彩活动" name="c">
   <div class="tab_img">
      <img src="../assets/29.png" alt="">
      <ul>
        <li><p>暂时没有课程 </p></li>
      
      </ul>
     
      
    </div>
  </van-tab>
</van-tabs>
    </div>

    </div>
</template>
<script>
export default {
    name:"Four",
     data() {
    return {
      activeName: 'a',
    };
  },
}
</script>


<style scoped>
#Four{
    background: #F5F5F5;
        height: 665px;
}
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
    display:flex;
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
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: 40px;
    height: 3px;
    background-color: #0FAAF0;
    border-radius: 3px;
}

</style>