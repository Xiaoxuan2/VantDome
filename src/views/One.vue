
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
           
      <p>绘本馆</p> 
      <p class="gengduo">
    <span>更多</span><van-icon name="arrow"/>
      </p>
        <div class="imgVueal">
            <van-row type="flex" justify="space-around">
            <van-col span="6"> <img src="../assets/20.png" alt=""></van-col>
            <van-col span="6"><img src="../assets/21.png" alt=""></van-col>
            <van-col span="6"><img src="../assets/23.png" alt=""></van-col>
            </van-row>
        </div>
     </div>
      <div class="subjectone">
           
      <p>公开课</p> 
    
        <div class="imgVueal">
            <van-row type="flex" justify="space-around">
            <van-col span="6"> <img src="../assets/20.png" alt=""></van-col>
            <van-col span="6"><img src="../assets/21.png" alt=""></van-col>
            <van-col span="6"><img src="../assets/23.png" alt=""></van-col>
            </van-row>
            
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
                name:"Three"
            })
        }
    },
}
</script>

<style scoped>

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
.subjectone p,.gengduo{
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