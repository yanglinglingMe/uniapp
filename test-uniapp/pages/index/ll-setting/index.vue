<template>
  <view>
    <ling-navbar :title="title" :background="background" :isBack="true"></ling-navbar>
    <!--我的标签-->
    <view class="setting-bg u-m-10 u-p-10">
      <u-cell-item title="我的标签" :arrow="false" hover-class="none">
        <view class="edit-color" slot="right-icon" @click="isEdit=!isEdit">{{isEdit ? '完成' : '编辑'}}</view>
      </u-cell-item>
      <view class="u-flex u-flex-wrap u-p-b-20 u-p-t-20" v-if="tagList.length>0">
        <view class="u-m-l-30" v-for="(items,index) in tagList" :key="index">
          <u-tag class="u-m-t-10" :text="items.title" mode="plain" :closeable="isEdit ? true : false" @close="tagClick(items.title,index,'mine')" shape="square"/>
        </view>
      </view>
      <view v-else>
        <u-empty text="当前暂无数据哦！！！" mode="data"></u-empty>
      </view>
    </view>
    <!--标签推荐-->
    <view class="setting-bg u-m-10 u-p-10">
      <u-cell-item title="标签推荐" :arrow="false" hover-class="none" />
      <view class="u-flex u-flex-wrap u-p-b-20 u-p-t-20" v-if="tagRecom.length>0">
        <view class=" u-m-l-30" v-for="(item,index) in tagRecom" :key="index">
          <u-tag class="u-m-t-10" @click="tagClick(item.title,index,'')" :text="item.title" mode="plain" shape="square"/>
        </view>
      </view>
      <view v-else>
        <u-empty text="当前暂无数据哦！！！" mode="data"></u-empty>
      </view>
    </view>
  </view>
</template>

<script>
import lingNavbar from '../../../components/navbar/ling-navbar'
export default {
  components:{
    lingNavbar
  },
  data() {
    return {
      title:'标签管理',
      background:{
        backgroundColor:'#f3f4f6'
      },
      tagList:[
        {
          title:'职场生活',
        },
        {
          title:'前端开发',
        },
        {
          title:'人工智能',
        },
        {
          title:'人工智能',
        },
        {
          title:'123',
        }
      ],
      tagRecom:[
        {
          title:'ktv',
        },
        {
          title:'追剧',
        },
      ],
      isEdit:false,
    }
  },
  methods:{
    tagClick(titles,index,type) {
      let item = {
        title:titles
      }
      this.$u.vuex('vuex_user.userName', res.username);
      if(type === 'mine') {
        this.tagList.splice(index,1)
        this.tagRecom.push(item)
      } else {
        if(this.isEdit && this.tagRecom.length>0) {
          this.tagRecom.splice(index,1)
          this.tagList.push(item)
        }
      }
    }
  },
  onLoad(option) {
    console.log(option.name,'name')
  }
}
</script>

<style lang="scss" scoped>
.setting-bg {
  width: 100%;
  border-radius: 10rpx;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.edit-color {
  color:$u-type-success;
}
.u-row {
  margin: 40rpx 0;
}
.tag-width {
  width: 150rpx;
}
</style>