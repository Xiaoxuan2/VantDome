
// 底部公共组件
<template>
    <div id="One">
        
        <div class="fexnac">
      <p>首页</p> 
   <van-icon name="bell" @click="submit" />
        </div>
     <div class="banner_img">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../assets/banner1.png" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/banner2.png" alt=""></van-swipe-item>
</van-swipe>
     </div>
     <div class="subjectone">
           
      <p class="tilti">绘本馆</p> 
      <p class="gengduo">
    <span>更多</span><van-icon name="arrow"/>
      </p>
        <div class="imgVueal">
            <van-row type="flex" justify="space-around">
            <van-col span="6">
                
               
             <router-link to="/Five">
              <img src="../assets/20.png" alt="">
             </router-link>   
                </van-col>
            <van-col span="6"><img src="../assets/21.png" alt=""></van-col>
            <van-col span="6"><img src="../assets/23.png" alt=""></van-col>
            </van-row>
        </div>
     </div>
      <div class="subjectone">
           
      <p class="tilti">公开课</p> 
    
        <div class="imgVueal imgtext">
           <van-swipe :loop="false" width="185" class="lunbo">
  <van-swipe-item class="bannerimg_pa">
      <img src="../assets/24.png" alt=""> 
        <p>Whales Phonics-Consonant...</p>
         <p>鲸鱼自然拼读课程</p>   
         <p>7247人报名</p>
  </van-swipe-item>
  <van-swipe-item class="bannerimg_pa">
      <img src="../assets/25.png" alt="">
      <p>Whales Phonics-Consonant...</p>
         <p>鲸鱼自然拼读课程</p>   
         <p>7247人报名</p>
      </van-swipe-item>
  <van-swipe-item class="bannerimg_pa">
      <img src="../assets/26.png" alt="">
      <p>Whales Phonics-Consonant...</p>
         <p>鲸鱼自然拼读课程</p>   
         <p>7247人报名</p>
      </van-swipe-item>
        <van-swipe-item>
   
      </van-swipe-item>
      
</van-swipe>
            
        </div>
        <div class="foot_text">
                <p><img src="../assets/27.png" alt=""></p>
      
            <van-divider style="color:#E5E5E5;">原版精读小班课，从零培养优等生</van-divider>
       
        </div>
       
     </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"One",
    methods: {
        submit(){
            this.$router.push({
                name:"Four"
            })
        }
    },
}
</script>

<style scoped>
.lunbo{
 width: 400px;
}
.van-divider {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #969799;
    font-size: 0.12rem;
    line-height: 0.32rem;
    border-style: solid;
    border-width: 0px;
    margin: 0.16rem 0px 0px 0.8rem;
}
.foot_text{
    height: 1.8rem;
} 
.foot_text p{
    text-align: center
}
.foot_text p>img{
        width: 44%;
    margin: 0.32rem 0px 0px 0.8rem;
}
::v-deep .van-swipe__indicators i{
   display: none;
}
.imgtext{
    overflow: hidden;
        height: 2.11rem;
            /* width: 675px; */
}
.bannerimg_pa>p{
    font-size: 0.14rem;
}
.bannerimg_pa>p:nth-of-type(1){
        margin-top: 10px;
}
.bannerimg_pa>p:nth-of-type(3){
        margin-top: 10px;
        color: #B4B4B4;

}
.bannerimg_pa{
     padding: 0.09rem 0.09rem !important;
    border: 0.01rem solid #F2F2F2;
    box-shadow: #E9E9E8 0px 0px 2px 1px;
    margin:  0.01rem 0.093333rem !important;
    border-radius: 0.05rem;

}
.van-col--6 {
    width: 30%;
}
.imgVueal img{
    width:100%
}
.banner_img{
    width: 100%;
    height: 20%;
   margin-top: 46px !important;
}
.banner_img .van-swipe-item>img{
     width: 100%;
    height: 100%;
}
.fexnac{
   position: fixed;
   top: 0;
   display: flex;
   justify-content:space-between;
   font-size: 0.23rem;
   font-weight: 500;
   width: 100%;
       background: white;
       z-index: 999;     
}
.subjectone{
    display: flex;
     justify-content:space-between;
   font-size: 0.2rem;
   font-weight: 500;
   width: 100%;
       background: white;
       flex-wrap: wrap;
}
.subjectone .tilti,.gengduo{
    align-self: center;
      margin: 0.08rem 0.186667rem !important;
}
.gengduo{
        display: flex;    align-items: center;
        color: #C3C3C3;
            position: relative;
    left: 18px;
}
.subjectone .gengduo>span{
    font-size: 0.15rem;
        margin-right: -19px !important;
}
.fexnac p,.van-icon {
  align-self: center;
      margin: 0.08rem 0.186667rem !important;
}

    .van-pull-refresh {
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    height:0.44rem;
}
.pullRefresh{
        width: 89%;
    margin-left: 42px !important;
}

</style>