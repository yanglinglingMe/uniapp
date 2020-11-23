<template>
  <view>
    <ling-navbar :title="title" :background="background"></ling-navbar>
    <u-card :title="title" :sub-title="subTitle" :thumb="thumb">
      <view class="" slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
        </view>
        <view class="u-body-item u-flex u-row-between u-p-b-0">
          <view class="u-body-item-title u-line-2">釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞待放</view>
          <image src="https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg" mode="aspectFill"></image>
        </view>
      </view>
      <view class="" slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view>
    </u-card>
    <u-table>
      <u-tr class="u-tr">
        <u-th class="u-th">姓名</u-th>
        <u-th class="u-th">年龄</u-th>
        <u-th class="u-th">籍贯</u-th>
        <u-th class="u-th">性别</u-th>
      </u-tr>
      <u-tr class="u-tr">
        <u-td class="u-td">吕布</u-td>
        <u-td class="u-td">22</u-td>
        <u-td class="u-td">楚河</u-td>
        <u-td class="u-td">男</u-td>
      </u-tr>
    </u-table>
	wode
    {{comment}}

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
        placeholder: '开始输入...',
        title:'我的',
        background:{
          backgroundColor:'#f3f4f6'
        },
        titles: '素胚勾勒出青花，笔锋浓转淡',
        subTitle: '2020-05-15',
        thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
        comment:''
      }
    },
    methods:{
      onEditorReady() {
        uni.createSelectorQuery().select('#editor').context((res) => {
          this.editorCtx = res.context
        }).exec()
      },
      undo() {
        this.editorCtx.undo()
      }
    },
    onLoad() {
      this.comment = this.vuex_comment_id

      console.log(this.comment,'vuex')
    }
  }
</script>

<style lang="scss" scoped>
.u-card-wrap {
  background-color: $u-bg-color;
  padding: 1px;
}

.u-body-item {
  font-size: 32rpx;
  color: #333;
  padding: 20rpx 10rpx;
}

.u-body-item image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  border-radius: 8rpx;
  margin-left: 12rpx;
}
.container {
  padding: 10px;
}

#editor {
  width: 100%;
  height: 300px;
  background-color: #CCCCCC;
}

button {
  margin-top: 10px;
}
</style>