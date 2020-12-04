<template>
  <view>
    <ling-navbar :title="title" :background="background"></ling-navbar>
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
      title:'112'
    }
  },

  onLoad() {

  }
}
</script>

<style lang="scss" scoped>

</style>
