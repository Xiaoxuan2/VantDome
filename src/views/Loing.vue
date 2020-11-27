<template>
  <div class="Loing">
          
          <div class="one"> <img src="../assets/18.png" alt=""><strong>手 机 验 证 码 登 录</strong></div> 
          
          <div class="text">
            登录鲸鱼外教培优，成为英语优等生
          </div>
          <div class="input">
          <van-field v-model="tel" type="tel" label="+86 "  oninput="if(value.length>11)value=value.slice(0,11)"/>
          </div>
           <div class="text text2">
        *未注册过的手机号将自动创建账号
          </div>
           <div class="yanz"> <button class="light-btn">点击按钮开始智能验证</button></div>
      <div class="btn">
    <router-link to="/Comdtiy"> <van-button round type="info">下一步</van-button></router-link>  
      </div>
        <div class="center">
          <center> <a href="">密码登录</a></center>
         
        </div>
        <div class="foot">
            <van-checkbox v-model="checked" icon-size="15px">我已阅读并同意《用户协议》和《隐私政策》</van-checkbox>
        <br>  <p> 且同意接收相关推送信息和回访电话</p>
        </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      tel: '',
       checked: true,
    };
  },
}
</script>
<style scoped>
.Loing{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.foot{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
      justify-content: center;
  margin-top: 0.18rem !important;
}
::v-deep .foot .van-checkbox,p{
      align-self: center;

}
.center center{
   margin-top: 1.3rem !important;
   font-size: 0.14rem;
}
.btn{
      margin-left: 0.3rem !important;
          margin-top: 0.3rem !important;
}
.van-button--normal {
    padding: 0 15px;
    font-size: 19px;
    width: 90%;
   
}
.yanz{
    
    margin-left: 1.888888rem !important;
       margin-top: 1rem !important;
}
.input{
  display: flex;
  justify-content: center;
  margin-top: 0.2rem !important;
}
::v-deep .van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    box-sizing: border-box;
    width: 4.2em;
    margin-right: 12px;
    color: #646566;
    text-align: left;
    word-wrap: break-word;
    border-right: 1px solid #CFCFD1;
}
.van-cell {
    /* position: relative; */
    display: -webkit-box;
    /* display: -webkit-flex; */
    /* display: flex; */
    /* box-sizing: border-box; */
    width: 80%;
    padding: 10px 16px;
    border-radius: 12px;
    overflow: hidden;
    color: #323233;
    font-size: 21px;
    line-height: 52px;
    background-color: #F6F6F8;
 
    align-self: center;
    text-indent: 0.21rem;
}
.text{
  color: #A1A5A7;
  font-size: 0.17rem;
  margin-left: 0.5rem !important;
 margin-top: 0.12rem !important;
  
  }
  .text2{
    font-size: 0.15rem;
    align-self: auto;
  }
.one{
  margin: 0.133333rem 0.15rem !important;
  width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
  /* justify-content: space-around; */
   
}
.one img{
  width: 1rem;
  align-items: center;

}
.one strong{
  font-size: 0.24rem;
  font-weight: 500;
   align-items: center;
   color:#494A4E ;
       padding: 0rem 0.28rem!important;
}
  .light-btn {
    
  text-decoration: none;
    /* position: relative; */
    display: flex;
    /* left: 50%; */
    justify-content: center;
    align-items: center;
    /* top: 53%; */
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: -webkit-gradient(linear, left top, right top, from(#03a9f4), color-stop(#f441a5), color-stop(#ffeb3b), to(#03a9f4));
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    width: 3.333333rem !important;
    height: 0.5rem !important;
    line-height: 0.333333rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
    border: none;
    width: 3.56rem;
    height: 0.68rem;
    font-size: 0.18rem;
}

.light-btn:hover::before,
.light-btn:hover {
  animation: sun 8s infinite;
}

.light-btn::before {
  content: '';
  /* position: absolute;
  left: -5px;
  right: -5px;
  top: -5px;
  bottom: -5px; */
  /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
  background-size: 400%;
  border-radius: 50px;
  filter: blur(10px);
  z-index: -1;
}

@keyframes sun {
  100%{
    background-position: -400% 0;
  }
}
</style>