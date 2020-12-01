<template>
    <div id="Five">
      <div class="fh">
   <van-nav-bar title="绘本详情"
    left-text="" left-arrow  @click-left="submint"> 

   <template #right>

    <van-icon name="info-o" size="18" style="right: 28px;" />
    <van-icon name="share-o" 
 title="显示分享面板"
  @click="showShare = true" />
  </template>

  </van-nav-bar>
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
    <div class="subject_titl">
        <strong>Playgound Friends</strong>
        <div class="subject_img">
              <img src="../assets/30.png" alt="">
        </div>
      
    </div>
    <div class="subject_two">
        <div class="">
      <span>蓝思值</span><van-progress :percentage="10" stroke-width="6" />
        </div>
        <div class="zz">
            <span>作者  :</span> <span>Amelia Edwards</span>
        </div>
    </div>
    <div class="subject_three">
        <ul>
            <li>
              
            
                <img src="../assets/31.png" alt="" @click="submit1"> 
             
                <p>听绘本</p>    
            </li>
        <li>
               <img src="../assets/32.png" alt="">     
                <p>听绘本</p>    
            </li>
        </ul>
    </div>
 </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"Five",
     data() {
    return {
      showShare: false,
      options: [
        { name: '微信好友', icon: 'wechat' },
        { name: '朋友圈', icon: 'weibo' },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    submint:function(){
      
        this.$router.back();
    }
    ,
    submit1:function(){
      
        this.$router.push({
            name:"Six"
        })
    }
  },
}
</script>
<style scoped>
.subject_three{
    display: flex;
    justify-content: center;
    margin-top: 0.566667rem;
 
}
.subject_three ul{
    width: 100%;
    display: flex;
     justify-content: center;
}
.subject_three ul li{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 0px 0.133333rem; */
}
.subject_three ul li>img{
  width: 30%;   
  margin-bottom: 0.1rem;
}
.subject_two div:nth-of-type(1){
    display: flex;
    justify-content: center;color: #C5C5C5;
    font-size: 0.15rem;
}
.subject_two div:nth-of-type(2){
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 0.44rem;
    margin-top: 0.133333rem;
}
.subject_two div:nth-of-type(2)>span{
   margin-left: 0.133333rem;
   color: #C5C5C5;   font-size: 0.15rem;
}
.subject_two div:nth-of-type(1)>.van-progress{
  align-self: center;
  margin-left: 0.133333rem
}
.van-progress {
  
    width: 213px;
}
::v-deep .van-progress__pivot{
       left: 59.5px;
}
::v-deep .van-progress__portion {
    width: 93.5%
}
.subject_titl{
    display: flex;
    justify-content: center;
    margin-top: 0.266667rem;
    flex-wrap: wrap;
}
.subject_titl strong{
    font-size: 0.2rem;
}
.subject_titl .subject_img{
    display: flex;
    flex-direction: column;
    margin-top: 0.266667rem;
}
.subject_titl .subject_img>img{
       width:70%;
       align-self: center;
}
  ::v-deep .van-share-sheet__options {
    padding: 16px 0 16px 53px;
}
::v-deep  .van-share-sheet__option {
    padding: 0px 24px;
}
</style>