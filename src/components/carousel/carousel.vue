<template>
    <div class="carousel" @mouseenter="stop()" @mouseleave="autoplay()">
      <div class="imgList" ref="imgList">
        <img :src="imgUrl4" alt="4"/>
        <img :src="imgUrl1" alt="1"/>
        <img :src="imgUrl2" alt="2"/>
        <img :src="imgUrl3" alt="3"/>
        <img :src="imgUrl4" alt="4"/>
        <img :src="imgUrl1" alt="1"/>
      </div>

      <div class="buttons" ref="button">
        <span ref="span1" @mouseenter="spanHover(1)" :class="{color: (isColor[0])}"></span>
        <span ref="span2" @mouseenter="spanHover(2)" :class="{color: (isColor[1])}"></span>
        <span ref="span3" @mouseenter="spanHover(3)" :class="{color: (isColor[2])}"></span>
        <span ref="span4" @mouseenter="spanHover(4)" :class="{color: (isColor[3])}"></span>
      </div>

      <a href="javascripte:;" class="prev" @click="prev()">&lt;</a>
      <a href="javascripte:;" class="next" @click="next()">&gt;</a>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data (){
      return{
        imgUrl1:'./src/assets/1.jpg',
        imgUrl2:'./src/assets/2.jpg',
        imgUrl3:'./src/assets/3.jpg',
        imgUrl4:'./src/assets/4.jpg',
        index:0,
        moveTime:500,      //位移总时间
        moveInterval:10,   //位移间隔时间
        autoTime:0,
        timer:0,
        isColor:[true,false,false,false],
        isMove:false,
      }
    },
    methods:{
      spanHover(number){
        if(!this.isMove){
          if(number==1){
            this.$refs.imgList.style.left = "-900px";
            for(var i=0;i<4;i++){
              this.$set(this.isColor,i,false);
            }
            this.$set(this.isColor,0,true);
          }
          if(number==2){
            this.$refs.imgList.style.left = "-1800px";
            for(var i=0;i<4;i++){
              this.$set(this.isColor,i,false);
            }
            this.$set(this.isColor,1,true);
          }
          if(number==3){
            this.$refs.imgList.style.left = "-2700px";
            for(var i=0;i<4;i++){
              this.$set(this.isColor,i,false);
            }
            this.$set(this.isColor,2,true);
          }
          if(number==4){
            this.$refs.imgList.style.left = "-3600px";
            for(var i=0;i<4;i++){
              this.$set(this.isColor,i,false);
            }
            this.$set(this.isColor,3,true);
          }
          this.stop();
        }
      },
      autoplay(){   //自动播放
        if(!this.isMove){
          var self = this;
          this.timer = setInterval(function () {
            self.next();
          }, 3000);
        }
      },
      stop(){
        var self = this;
        clearInterval(self.timer);
      },
      move(newLeft, speed){
        var self = this;
        this.isMove = true;
        if((speed < 0 && this.$refs.imgList.offsetLeft > newLeft) || (speed > 0 && this.$refs.imgList.offsetLeft < newLeft)) {
          self.$refs.imgList.style.left = self.$refs.imgList.offsetLeft + speed + "px";
          setTimeout(function(){ self.move(newLeft, speed); }, self.moveInterval);
        }
        else{
          this.isMove = false;
          if(this.$refs.imgList.offsetLeft > -900){
            this.$refs.imgList.style.left = "-3600px";
          }
          if(this.$refs.imgList.offsetLeft < -3600){
            this.$refs.imgList.style.left = "-900px";
          }

          this.index = -(this.$refs.imgList.offsetLeft / 900) - 1;
          for(var i=0;i<4;i++){
            this.$set(this.isColor,i,false);
          }
          this.$set(this.isColor,this.index,true);
        }
      },
      calculate(offset){
        var left = this.$refs.imgList.offsetLeft;
        var newLeft = left + offset;
        var speed = offset/(this.moveTime/this.moveInterval); //位移速度

        if(!this.isMove){
          this.move(newLeft, speed);
        }
      },
      prev(){
          this.calculate(900);
      },
      next(){
        this. calculate(-900);
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.autoplay();
      })
    }
  }
</script>


<style scoped>
    @import './reset.css'
</style>
