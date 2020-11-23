<template>
  <view>
    <ling-navbar :title="title" :background="background" :isBack="true"></ling-navbar>
    <view>
      <view>
      1111
      </view>
      <view>
<!--        <u-empty text="没有更多数据了" mode="list"></u-empty>-->
      </view>
    </view>
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
        title:'评论列表',
        background:{
          backgroundColor:'#f3f4f6'
        }
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
</style>