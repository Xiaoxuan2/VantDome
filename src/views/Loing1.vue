<template>
  <div class="Loing" style="style=overflow:-Scroll;overflow-x:hidden">
    <div class="isshow" v-show="isshow">
      <div class="one">
        <img src="../assets/18.png" alt />
        <strong>手机验证码登录</strong>
      </div>

      <div class="text">登录鲸鱼外教培优，成为英语优等生</div>
      <div class="input">
        <van-field
          v-model="from.text"
          type="tel"
          label="+86 "
          oninput="if(value.length>11)value=value.slice(0,11)"
          required
        />
      </div>
      <div class="text text2">*未注册过的手机号将自动创建账号</div>
      <div class="yanz">
        <button class="light-btn">点击按钮开始智能验证</button>
      </div>
      <div class="btn">
        <van-button round type="info" @click="denglu1">下一步</van-button>
      </div>
      <div class="center">
        <center>
          <a  @click="changIsshow">验证码登录</a>
        </center>
      </div>
    </div>

    <div class="isshow" v-show="isshows">
      <div class="one">
        <img src="../assets/18.png" alt />
        <strong>账号密码登录</strong>
      </div>

      <div class="text">登录鲸鱼外教培优，成为英语优等生</div>
      <div class="input">
        <van-field
          v-model="from.tel"
          type="tel"
          label="+86 "
          oninput="if(value.length>11)value=value.slice(0,11)"
          required
        />
      </div>
      <div class="input">
        <el-input placeholder="请输入密码" v-model="from.input" required show-password></el-input>
      </div>

      <div class="yanz">
        <button class="light-btn">点击按钮开始智能验证</button>
      </div>
      <div class="btn">
        <van-button round type="info" @click="denglu">登录</van-button>
      </div>
      <div class="center">
        <center>
          <a  @click="aa">密码登录</a>
        </center>
      </div>
    </div>
    <div class="foot">
      <van-checkbox v-model="checked" icon-size="15px">我已阅读并同意《用户协议》和《隐私政策》</van-checkbox>
      <br />
      <p>且同意接收相关推送信息和回访电话</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
window.alert = function(msg) {
  var maskBg = "#0000002b"; //蒙版展示色
  var zIndex = 999999; //修改弹出层z-index,应为最顶层,避免被覆盖
  var desColor = "#1f0000"; //提示信息字体颜色
  var buttonVal = "确定"; //确定按钮名称
  var btnBgColor = "#f61717"; //确定按钮背景颜色
  var btnColor = "#fff"; //确定按钮字体颜色
  var btnAlign = "right"; //按钮在水平位置,默认居中,变量值:left,center,right
  var style =
    `
			<style class="mask-style">
				.box-sizing{
					box-sizing: border-box;
				}
				.alertMask{
					position: fixed;	/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
					display: flex;
					display: webkit-flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: ` +
    zIndex +
    `;
					background: ` +
    maskBg +
    `;
				}
				.alertContainer{
					min-width: 240px;	/*容器最小240px*/
					max-width: 320px;	/*容器最大320px*/
				    background: rgba(0,0,0,0.5);
					// border: 1px solid ` +
    maskBg +
    `;
					border-radius: 3px;
					color: ` +
    "white" +
    `;
					overflow: hidden;									
				}
				.alertDes{
					padding: 35px 30px;
					text-align: center;
					letter-spacing: 1px;
					font-size: 14px;
					color: ` +
    "white" +
    `;
				}
				.alertDes img{
					max-width: 100%;
					height: auto;
				}
				.alertConfirmParent{
					width: 100%;
					padding: 8px 30px;
					text-align: ` +
    btnAlign +
    `;
					box-sizing: border-box;
				    background: rgba(0,0,0,1);
				}
				.alertConfirmBtn{
					cursor: pointer;
					padding: 8px 10px;
					border: none;
					border-radius: 2px;
					color: ` +
    "black" +
    `;
					background-color: ` +
    "white" +
    `;
			
				}
			</style>
		`;

  var head = document.getElementsByTagName("head")[0];
  head.innerHTML += style; //头部加入样式,注意不可使用document.write()写入文件,否则出错

  const body = document.getElementsByTagName("body")[0];

  var alertMask = document.createElement("div");
  var alertContainer = document.createElement("div");
  var alertDes = document.createElement("div");
  var alertConfirmParent = document.createElement("div");
  var alertConfirmBtn = document.createElement("button");

  body.append(alertMask);
  alertMask.classList.add("alertMask");
  alertMask.classList.add("box-sizing");

  alertMask.append(alertContainer);
  alertContainer.classList.add("alertContainer");
  alertContainer.classList.add("box-sizing");

  alertContainer.append(alertDes);
  alertDes.classList.add("alertDes");
  alertDes.classList.add("box-sizing");

  alertContainer.append(alertConfirmParent);
  alertConfirmParent.classList.add("alertConfirmParent");
  alertConfirmParent.classList.add("box-sizing");

  alertConfirmParent.append(alertConfirmBtn);
  alertConfirmBtn.classList.add("alertConfirmBtn");
  alertConfirmBtn.classList.add("box-sizing");
  alertConfirmBtn.innerText = buttonVal;

  //加载提示信息
  alertDes.innerHTML = msg;
  //关闭当前alert弹窗
  function alertBtnClick() {
    body.removeChild(alertMask);
    maskStyle = head.getElementsByClassName("mask-style")[0];
    head.removeChild(maskStyle); //移除生成的css样式
  }
  alertConfirmBtn.addEventListener("click", alertBtnClick);
};
export default {
  name: "Loing1",
  call: "",
  passworder: "",
  data() {
    return {
      isshow: true,
      isshows: false,
      from: {
        tel: "",
        input: "",
        text:""
      },
      checked: true
    };
  },
  methods: {
    changIsshow: function() {
      this.isshow = false;
      this.isshows = true;
      console.log(this.isshow+"----"+this.isshow1)
    },
    aa: function() {
      this.isshow = true;
      this.isshows = false;
    },
    denglu() {
      if (this.from.tel == "") {
        alert("账号为空");
      } else if (this.from.input == "") {
        alert("密码为空");
      } else if (this.from.tel != 18684608399) {
        alert("账号错误请重新输入");
      } else if (this.from.input != 123456) {
        alert("密码错误请重新输入");
      } else {
        var user = localStorage.setItem("user", JSON.stringify(this.from));
        this.$router.push({
          path: "/Comdtiy"
        });
      }
    },
    denglu1(){
      if(this.from.text==""){
        alert("账号为空");
      }else{
          Toast('创建成功');
           this.$router.push({
          path: "/Comdtiy"
        });
      }
    }
  }
};
</script>
<style scoped>

::v-deep .van-field__label {
  font-size: 16px;
}
::v-deep .van-field__control {
  font-size: 12px;
}

::v-deep .el-input__inner {
  -webkit-appearance: none;

  background-image: none;
  background-color: #f6f6f8;
  border-radius: 10px;
  border: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 45px;
  line-height: 39px;
  outline: 0;
  padding: 0 23px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 79%;
  margin-left: 41px;
}
::v-deep .el-input__suffix {
  right: 45px;
}
.Loing {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.foot {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 0.18rem !important;
}
::v-deep .foot .van-checkbox,
p {
  align-self: center;
}
.center center {
  margin-top: 1rem !important;
  font-size: 0.14rem;
}
.btn {
  margin-left: 0.3rem !important;
  margin-top: 0.1rem !important;
}
.van-button--normal {
  padding: 0 15px;
  font-size: 19px;
  width: 90%;
}
.yanz {
  margin-left: 1.888888rem !important;
  margin-top: 1rem !important;
}
.input {
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
  border-right: 1px solid #cfcfd1;
}
.van-cell {
  /* position: relative; */
  display: -webkit-box;
  /* display: -webkit-flex; */
  /* display: flex; */
  /* box-sizing: border-box; */
  width: 80%;
  padding: 0.133333rem 0.2rem;
  border-radius: 0.16rem;
  overflow: hidden;
  color: #323233;
  font-size: 0.2rem;
  /* line-height:0.333333rem; */
  background-color: #f6f6f8;

  align-self: center;
  text-indent: 0.21rem;
}
.text {
  color: #a1a5a7;
  font-size: 0.15rem;
  margin-left: 0.5rem !important;
  margin-top: 0.12rem !important;
}
.text2 {
  font-size: 0.15rem;
  align-self: auto;
}
.one {
  margin: 0.133333rem 0.15rem !important;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-around; */
}
.one img {
  width: 1rem;
  align-items: center;
}
.one strong {
  font-size: 0.24rem;
  font-weight: 500;
  align-items: center;
  color: #494a4e;
  padding: 0rem 0.28rem !important;
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
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#03a9f4),
    color-stop(#f441a5),
    color-stop(#ffeb3b),
    to(#03a9f4)
  );
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  width: 3rem !important;
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
  content: "";
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
  100% {
    background-position: -400% 0;
  }
}
</style>