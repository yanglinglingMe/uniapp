<template>
  <view>
    <u-navbar :title="title" :background="background" :is-back="isBack" :back-text="backText"></u-navbar>
  </view>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:''
    },
    background:{
      type:Object,
      default: {}
    },
    isBack:{
      type:Boolean,
      default:false
    },
    backText:{
      type:String,
      default:''
    }
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
</style>