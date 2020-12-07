<template>
    <div id="Seven">
       <div class="fh">
           <van-nav-bar title="公开课介绍                                                " left-text=""
            left-arrow  @click-left="submit">
            </van-nav-bar>
       </div>
       <div class="mb">
           <img src="../assets/39.png" alt="">
           <div class="right">
               <p style="font-size:0.16rem;color:black;">鲸鱼自然拼读课程</p>
                  <p>Whaies Phonics-Consonant Series</p>
                     <p>共5节</p>
           </div>
       </div>
          <div class="tab">
              <van-tabs v-model="active">
            <van-tab title="课程">
              <div class="div1">
                  <div class="left">
                   <p><span></span>第 1 节</p>
                      <p>自然拼音读-辅音p和b</p>
                      <p style="font-size:15px; color:#9E9E9E;">Phonics: p & b</p>
                  </div>
                  <div class="rigth">
                   <button @click="clickbtn">报名</button>
                  </div>
             </div>      
            <div class="div1">
                  <div class="left">
                   <p><span></span>第 2 节</p>
                      <p>自然拼音读-辅音t和d</p>
                      <p style="font-size:15px; color:#9E9E9E;">Phonics: p & b</p>
                  </div>
                  <div class="rigth">
                   <button @click="clickbtn">报名</button>
                  </div>
             </div>    
             <div class="div1">
                  <div class="left">
                   <p><span></span>第 3 节</p>
                      <p>自然拼音读-辅音p和b</p>
                      <p style="font-size:15px; color:#9E9E9E;">Phonics: p & b</p>
                  </div>
                  <div class="rigth">
                   <button @click="clickbtn">报名</button>
                  </div>
             </div>    
             <div class="div1">
                  <div class="left">
                   <p><span></span>第 4 节</p>
                      <p>自然拼音读-辅音p和b</p>
                      <p style="font-size:15px; color:#9E9E9E;">Phonics: p & b</p>
                  </div>
                  <div class="rigth">
                   <button @click="clickbtn">报名</button>
                  </div>
             </div>    
             <div class="div1">
                  <div class="left">
                   <p><span></span>第 5 节</p>
                      <p>自然拼音读-辅音p和b</p>
                      <p style="font-size:15px; color:#9E9E9E;">Phonics: p & b</p>
                  </div>
                  <div class="rigth">
                   <button @click="clickbtn">报名</button>
                  </div>
             </div>    
            </van-tab>
            <van-tab title="课程简介">
                <div class="div2">
                      <strong style="font-size:18px;">课程简介</strong>     
               <p>适合3-6岁，或刚开始英语启蒙期的孩子。</p>     
                </div>
              <div class="div2">
                      <strong style="font-size:18px;">课程内容</strong>     
               <p style="text-indent: 0.2rem;">学习自然拼读辅音部分。每节课以生动有趣的英文绘
                        本为载体，孩子在中教老师的带领下，完成2个辅音的发
                        音和对应4个核心词汇的学习，并通过外教老师的歌谣视
                        频，完全掌握每节课的内容。除此之外，每节课还包括
                        中教老师带领孩子完成课后作业，教孩子如何完成课后
                        练习的环节，大大减轻了家长辅导孩子作业的负担。
                    </p>     
                </div>
                  <div class="div2">
                      <strong style="font-size:18px;">学习目标</strong>     
               <p style="">
                    1.孩子能够听懂核心词汇及所学绘本相关内容; <br>
                    2.每节课后，孩子可快速掌握最常用的辅音，包括pb,t
                    d, sz,fv,kg的发音，并学会对应常见词的发音，以及一
                    些高频词的含义，并能做到看到它们既能读又能理解其<br>
                    含义;<br>
                    3.孩子会建立初步的英文语音意识，并能够在拼读单词
                    时，正确读出所学过的字母对应发音，如p， b,t,d等;<br>
                    4.孩子能够独立且流利地朗读出所学绘本的内容; <br>
                    5.孩子可掌握课程中的辅音对应字母的正确写法，并能
                    够自己描写出来;

                    </p>     
                </div>
            </van-tab>
           
            </van-tabs>
          </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { Toast } from 'vant';
Vue.use(Toast);
Vue.use(Dialog);

export default {
    name:"Seven"
    ,
    data() {
        return {
      
        }
    },
    methods: {
        submit:function(){
            this.$router.back();
        },
        clickbtn(){
                        Dialog.confirm({
            title: '提示',
            message: '报名此课程将扣除1公开课课时，确定要报名吗？',
            })
            .then(() => {
               Toast('所剩可预约课时不足');
            } )
            .catch(() => {
                // on cancel
               
            });
        }
    },
  
}
</script>
<style scoped>
.div2{
        padding: 15px 23px;
        color: #7C7B80;
}
::v-deep .rigth>button{
        padding: 2px 18px;
    border: none;
    color: white;
    background: #02B1FF;
    border-radius: 12px;
    font-size: 16px;
}
.div1{
     display: flex;
    padding-left: 0.1rem;
    width: 90%;
    height: 1.3rem;;
    margin-top: 15px;
    margin-left: 9px;
    background: white;
    border: 0.01rem solid #F2F2F2;
    box-shadow: #E9E9E8 0px 0px 2px 1px;
    border-radius: 0.1rem;
    justify-content: space-between;
        font-size: 16px;
}
.div1 .left>p>span{
     width: 4px;
    height: 18px;
    background:#49B5DE;
    border-radius: 29px;
    display: inline-block;
    margin-right: 5px;
}
.div1 .left>p{
    line-height: 0.366rem;
}
.div1 div{
    padding: 18px 20px;
}
.div1 .rigth{
    display: flex;
        align-items: flex-end;
}
.mb>img{
    width: 30%;
    height: 86%;
        align-self: center;
}
.right p{
    line-height: 0.266667rem;
    color: #9C9C9C;
}
.right{
    /* align-self: center; */
     padding-left: 0.1rem;
     padding-top: 0.3rem;
}
.mb{
    display: flex;
    padding-left: 0.1rem;
    width: 90%;
    height: 1.5rem;;
       margin-top: 65px;
    margin-left: 9px;
    background: white;
    border: 0.01rem solid #F2F2F2;
    box-shadow: #E9E9E8 0px 0px 2px 1px;
    border-radius: 0.1rem;
}
.fh{
        position: fixed;
    width: 100%;
    top: 0;
        background: white;
    z-index: 9999;
    /* height: 50px; */

}
::v-deep .van-tab--active{
color:#49B5DE;
}
::v-deep .van-tabs__line {
  
    background-color: #49B5DE;
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: 176px;
    height: 3px;
    border-radius: 3px;
 
}
::v-deep .van-tabs--line .van-tabs__wrap {
    height: 44px;
    border-bottom: 1px solid #E9E9E9;
    padding: 0px -5px;
    margin: 0px 19px;
}
    
</style>