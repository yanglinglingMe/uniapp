<template>
  <view>
    <ling-navbar :title="title" :background="background" :isBack="true"></ling-navbar>
    <view class="content-detail u-margin-20 u-p-b-80" :class="{'isPrevent':isPrevent}">
      <!-- 标题-->
      <view class="title u-font-36">疫情风险下的项目管理与紧急预案策略</view>
      <!-- 个人信息-->
      <view class="person-mess u-flex">
        <view>
          <u-avatar src="https://cdn.uviewui.com/uview/example/fade.jpg" mode="circle" class="w-and-h"></u-avatar>
        </view>
        <view class="u-flex-1 u-p-l-10">
          <view>name</view>
          <view class="ling-tips-color">2020.02.10 22:40 浏览 38赞</view>
        </view>
        <view @click="operation('attention')">
          <button class="buttons" v-if="isAttention" key="attention1">关注</button>
          <button class="buttons" v-if="!isAttention" key="attention2">取消关注</button>
        </view>
      </view>
      <view>
        <view class="u-font-36">
          案例
        </view>
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
        A 同学来面试，我出的第一个问题是一个有关逻辑、算法的问题，并不是一个什么新技术。按照正常的流程，A 就说：先让我思考两分钟。我说：可以。
      </view>
      <!-- 最新评论-->
      <view class="new-comment">
        <view v-if="messageList.length>0">
          <view class="ling-border-b-f5f5f5 u-m-t-10 u-m-b-10 ling-tips-color">最新评论</view>
          <view class="u-border u-padding-15 u-m-b-10" v-for="(item,index) in messageList" :key="index">
            <view class="person-mess u-flex">
              <view>
                <u-avatar src="" mode="circle" class="w-and-h"></u-avatar>
              </view>
              <view class="u-flex-1 u-p-l-10">
                <view>name</view>
                <view class="ling-tips-color">{{nowTime}}</view>
              </view>
              <view>
                <u-button size="mini" shape="circle" @click="focusInput('reply',index)">回复</u-button>
              </view>
            </view>
            <view class="comment">
              {{ item.contentVal }}
            </view>
            <view class="reply u-m-t-10 u-m-l-60 u-p-l-20 ling-border-2l-f5f5f5" v-if="item.replyVal!=='' && item.replyVal!==undefined && item.replyVal!==null">
              {{ item.replyVal }}
            </view>
          </view>
        </view>
        <view v-else class="u-m-t-20 u-m-b-20 u-text-center ling-tips-color">暂无最新评论~</view>
      </view>
      <!-- 底部操作-->
      <view class="foot-fixed u-flex">
        <view class="input u-flex u-m-l-20 u-p-l-20 u-p-r-20">
          <u-input placeholder="谈谈你的看法..." clearable type="text" @focus="focusInput('',999)"/>
          <u-icon class="position-icon" name="zhuanfa" color="blue" size="40" @click="focusInput('',999)"></u-icon>
        </view>
        <view class="u-flex u-row-around u-flex-1" >
          <!-- 评论列表-->
          <view @click="commentList">
            <u-icon name="more-circle" color="blue" size="40"></u-icon>
          </view>
          <!-- 收藏-->
          <view @click="operation('collection')">
            <u-icon name="heart" color="blue" size="40" v-if="!heart" key="heart" ></u-icon>
            <u-icon name="heart-fill" color="blue" size="40" v-if="heart"></u-icon>
          </view>
          <!-- 点赞-->
          <view @click="operation('thumbsUp')">
            <u-icon name="thumb-up" color="blue" size="40" v-if="!thumbUp" key="thumbUp"></u-icon>
            <u-icon name="thumb-up-fill" color="blue" size="40" v-if="thumbUp"></u-icon>
          </view>
        </view>
      </view>
    </view>
    <u-popup v-model="show" mode="bottom" height="60%" :closeable="true" close-icon-pos="top-left" @close="close">
      <view class="position-re">
        <u-cell-item :arrow="false" center value="发布" @click.self="publish"></u-cell-item>
        <u-field label="评论内容" v-model="contentVal" placeholder="请输入评论内容" type="textarea" :clearable="false" :border-bottom="false" maxlength="200"></u-field>
        <view class="position-end">{{maxLength}}/200</view>
      </view>
    </u-popup>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import lingNavbar from '../../components/navbar/ling-navbar'
  export default {
    components:{
      lingNavbar
    },
    data() {
      return {
        title:'详情',
        background:{
          backgroundColor:'#f3f4f6'
        },
        show:false,
        nowTime:'',
        // commentVal:'',
        contentVal:'',//评论内容
        heart:false,
        thumbUp:false,
        isAttention:true,
        maxLength:0,
        isPrevent:false,
        messageList:[],
        focusType:'',
        focusIndex:0,
      }
    },
    methods:{
      operation(type) {
        console.log(type,'1122')
        if(type === 'attention') { //关注
          this.isAttention = !this.isAttention
          console.log(this.isAttention)
        }else if(type === 'collection') { //收藏
          this.heart = !this.heart
        }else if(type === 'thumbsUp') { //点赞
          this.thumbUp = !this.thumbUp
        }
      },
      /**
       * 评论列表
       * */
      commentList() {
        this.$u.route({
          url: 'pages/detail/comment-list',
          params: {

          }
        })
      },
      /**
       * 发布评论
       * */
      focusInput(type,index) {
        this.focusType = type
        this.focusIndex = index
        this.show = true
        this.isPrevent = true
      },
      /**
       * 发布按钮
       * */
      publish() {
        if(this.contentVal === ''){
          this.$refs.uToast.show({
            title: '请输入评论内容后发布哦！！！',
            type: 'warning',
          })
        } else {
          let contentVal = {}
          if(this.focusType !== 'reply') {
            this.$set(contentVal,'contentVal',this.contentVal)
            this.messageList.push(contentVal)
            // console.log(this.messageList,'message')
          } else { //点击回复时候
            // let replyVal = {}
            this.messageList.find((item,index) => {
              console.log(this.focusIndex,index,'ndex')
              if(this.focusIndex === index) {
                // this.$set(contentVal,'replyVal',this.contentVal)
                  this.messageList[index].replyVal = this.contentVal
              }
            })

            // console.log(this.messageList,'list')
          }
          console.log(this.messageList,'list')
          this.$refs.uToast.show({
            title: '发布成功',
            type: 'success',
          })
          this.show = false
          this.contentVal = ''
        }
      },
      close() {
        this.isPrevent = false
        this.contentVal = ''
      },
      // 补0
      addZero(num) {
        if(num < 10)
          return "0" + num;
        return num;
      }
    },
    mounted() {
      this.nowTime = `${new Date().getFullYear()}-${this.addZero(new Date().getMonth() + 1)}-${this.addZero(new Date().getDate())} ${this.addZero(new Date().getHours())}:${this.addZero(new Date().getMinutes())}:${this.addZero(new Date().getSeconds())}`
    }
  }
</script>

<style scoped lang="scss">
.foot-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
  border-top: 1px #f5f5f5 solid;
  background-color: #fff;
  z-index:9999;
  //box-sizing: border-box;
  .input {
    width: 60%;
    height: 60rpx;
    border: 1px #ddd solid;
    border-radius: 10rpx;
    position: relative;
    .position-icon {
      position: absolute;
      right: 15rpx;
      top: 7rpx;
    }
  }
}
.position-re {
  position: relative;
  .position-end {
    position: absolute;
    right: 26rpx;
    bottom: -451rpx;
  }
}
.isPrevent {
  position: fixed;
  overflow: hidden;
}
.buttons {
  display: inline-flex;
  width: auto;
  font-size: 26rpx;
  height: 70rpx;
  line-height: 70rpx;
  padding: 0 40rpx;
  color: #ffffff;
  border-color: #2979ff;
  background-color: #2979ff;

}
/deep/.u-cell__value {
  color:$u-type-primary !important;
}
</style>