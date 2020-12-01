<template>
    <div id="Three">
        <div class="flex">
            <div class="lef">
                    <strong>Hi~ , Student</strong>
                    <img src="../assets/4.png" alt="">
             </div>
             <div class="ringth">
                 <img src="../assets/3.png" alt="">
             </div>
        </div>
       <div class="ks">
        <ul>
            <li><strong>0</strong> <p>剩余课时</p></li>
            <li><strong>0</strong> <p>余额</p></li>
            <li><strong>0</strong> <p>鲸币</p></li>
        </ul>
       </div>
        <div class="tj">
             <strong>推荐有奖</strong>
             <ul>
                 <li> 
                    <img src="../assets/5.png" alt="">
                    <p>推荐有奖</p>
                  </li>
                 <li>
                     <img src="../assets/6.png" alt="">
                    <p>我的任务</p>
                 </li>
                 <li>   
                    <img src="../assets/7.png" alt="">
                    <p>鲸币任务</p>
                 </li>
             </ul>
        </div>
         <div class="rmhd">
             <strong>热门活动</strong>
             <ul>
                 <li style="margin-right: 9px;"> 
                    <img src="../assets/8.png" alt="" style="margin-right: 9px;">
                    <p>分享鲸鱼币</p>
                  </li>
                 <li>
                    <p>分享截屏，鲸币兑好礼</p>
                    <van-icon name="arrow" />
                 </li>
             </ul>
        </div>
         <div class="jl">
             <ul>
                 <li > 
                  <p> <img src="../assets/9.png" alt=""> <span>奖励明细</span></p> 
                   <p>  <van-icon name="arrow" /></p>
                  </li>
                  <li > 
                  <p> <img src="../assets/10.png" alt=""> <span>我的订单</span></p> 
                       <p>  <van-icon name="arrow" /></p>
                  </li>
                   <li > 
                  <p> <img src="../assets/11.png" alt=""> <span>我的班主任</span></p> 
                       <p>  <van-icon name="arrow" /></p>
                  </li>
                 
             </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Three"
}
</script>
<style scoped>
.jl{
    width: 100%;   
    display: flex;
    justify-content:flex-start;
    background: white;
    padding:0.2rem 0px;
    flex-wrap: wrap;
      margin-top: 0.2rem;
   
    margin-bottom: 0.4rem;
}
.jl ul li>p:nth-of-type(1){
        margin-left: -6px;
}
.jl ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.jl ul li{
       width: 100%;
    display: flex;
     flex-wrap: wrap;  
      padding: 0.05rem 0.39rem;
        line-height:0.33rem;
        justify-content: space-between;
        font-size: 0.15rem;
}
.jl ul li>p>img{
  width: 18%;
}
.jl ul li>p i{

   color: #E2E2E2;
      margin-right: -0.4rem
}
.jl ul li p{
      display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    
}
.rmhd{
     width: 100%;   
    display: flex;
    justify-content:flex-start;
    background: white;
    padding:0.2rem 0px;
    flex-wrap: wrap;
    margin-top: 0.2rem;
}
.rmhd strong{
       margin-left: 0.3rem;
    font-size: 0.2rem;
    font-weight: 600;
    margin-bottom: 0.133333rem;
}
.rmhd ul{
     display: flex;  width: 100%;   
    /* justify-content: space-between;   */
    align-self: center;
    flex-wrap: nowrap;
    justify-content: space-around;
}
.rmhd ul li{
     display: flex;  width: 100%;    flex-wrap: nowrap;
     align-items: center;
    justify-content: center;
        font-size: 0.15rem;
}

.rmhd ul li:nth-of-type(2)>P{
    color: #D35D68;
    align-self: center;
}
.rmhd ul li:nth-of-type(2)>i{
    color: #E2E2E2;
    align-self: center;
}
.rmhd ul li>img,p{
    align-self:center;
}
.rmhd ul li>img{
    width: 11%;
}
.tj strong{
       margin-left: 0.3rem;
    font-size: 0.2rem;
    font-weight: 600;
    margin-bottom: 0.133333rem;
}
.tj{
  width: 100%;   
    display: flex;
    justify-content:flex-start;
    background: white;
    padding:0.2rem 0px;
    flex-wrap: wrap;
        margin-top: 0.2rem;
}
.tj ul{
       display: flex;  width: 100%;   
    justify-content: space-around;  align-self: center;
}
.tj ul li{
     display: flex;
    flex-direction: column;
    align-items: center;
}
.tj ul li>img{
        width: 41%;
}

.tj ul li>p{
    font-size: 0.14rem;
    margin-top: 0.1rem;
        font-weight: 600;

}
#Three{
    background: #F6F6F6;
}
.ks{
    width: 100%;   
    display: flex;
    justify-content: space-evenly;
    background: white;
    padding:0.2rem 0px;
}
.ks ul{
    display: flex;  width: 100%;   
    justify-content: space-around;  align-self: center;
}
.ks ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-self: center; 
    flex-wrap: wrap; */
}
.ks ul li strong{
    font-weight: bold;
    font-size: 0.25rem;
}
.ks ul li p{
      align-self: center;
      color: #A5A5A5;
}
  .flex{
      display: flex;
        width: 100%;
        justify-content: space-around;
        background: url("../assets/baimg.png") no-repeat;
        background-repeat: round;
  }
  .lef{
      font-size: 0.25rem;    margin: 0.24rem 0.306667rem;
  }
  .lef>img{
      width: 40%;
          margin-top: 0.12rem;
  }
  .ringth>img{
       width: 70%    ;margin: 19px 0px;
  }
</style>