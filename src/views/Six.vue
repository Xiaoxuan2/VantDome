<template>
    <div>
        <div class="fh">
            <van-nav-bar title="听绘本" left-text="" left-arrow 
              @click-left="submit">
  
</van-nav-bar>
        </div>
        <div class="cli">
           
<van-image-preview v-model="show" :images="images"  @change="onChange" >
          
  <template v-slot:index>{{ index }}/7</template>
</van-image-preview>
        </div>
       
        
    </div>
</template>
<script>
export default {
    name:"Six",
     data() {
    return {
      show: true,
      index: 0,
      images: [
        '../assets/31.png',
        '../assets/32.png',
        '../assets/31.png',
        '../assets/32.png',
        '../assets/31.png',
        '../assets/32.png',
        '../assets/32.png',
      ],
    };
  },
  methods: {
    onChange(index) {
      this.index = index+1;
    },
  },
  submit:function(){
      $this.$router.black();
  }
}
</script>
<style scoped>

::v-deep .van-image-preview {
    position: fixed;
    top: 45px;
    left: 0;
    width: 100%;
    height: 93%;
   
}
::v-deep .van-image-preview{
    display: block  !important;
}
 ::v-deep .van-image-preview__index {
    position: absolute;
    top: 16px;
    left: 50%;
    color: black;}
    ::v-deep .van-image-preview__overlay {
    background: none;
}

 ::v-deep .van-overlay {
    top: 47px;
    height: 93%;
   
    background:none;
}
</style>