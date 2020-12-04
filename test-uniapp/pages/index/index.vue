<template>
	<view>
    <ling-navbar :title="title" :background="background"></ling-navbar>
    <view class="u-top">
      <u-search class="u-padding-10" placeholder="uniapp、vue" v-model="keyword" :animation="true" :clearabled="true" shape="round"></u-search>
    </view>
    <view class="u-tab-setting u-flex u-row-between ling-border-b-f5f5f5">
      <view>
        <u-tabs-swiper ref="uTabs" :list="navList" :current="current" @change="tabsChange" :is-scroll="false"
                       swiperWidth="750" :show-bar="false"></u-tabs-swiper>
      </view>
      <view class="ling-w-10-p ling-border-l-f5f5f5 u-p-l-10">
        <u-icon name="setting" size="48" @click="handleSet"></u-icon>
      </view>
    </view>
    <view>
      <swiper class="ling-h-100-vh" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
        <swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
          <scroll-view scroll-y style="width: 100%;height: 100%" @scrolltolower="onreachBottom">
            <view class="u-margin-20">
              <view class="ling-card u-padding-20" @click="toDetail(item)">
                <view class="u-flex u-p-b-15">
                  <view class="u-flex-1 ling-overflow">满满干货，bobo老师诚挚分享：锻炼内功，高效学习，如果有什么秘诀的话，那就都在这里了</view>
                  <view class="ling-w-5-p"><u-icon name="heart" color="blue" size="30"></u-icon></view>
                </view>
                <view class="u-p-b-15 u-flex">
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5ad7065c0001164714310597.png"></u-image>
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5ad702d70001a59008640155.png"></u-image>
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5ad7065c0001164714310597.png"></u-image>
                </view>
                <view class="u-flex u-row-between">
                  <view><u-tag mode="plain" text="职场生活" shape="circle" /></view>
                  <view class="ling-tips-color">12530浏览量</view>
                </view>
              </view>
              <view class="ling-card u-padding-20 u-m-t-15 u-flex">
                <view>
                  <u-image border-radius="10rpx" width="120rpx" height="120rpx" src="https://cdn.uviewui.com/uview/example/fade.jpg"></u-image>
                </view>
                <view class="u-flex-1 u-p-l-20">
                  <view class="u-flex u-p-b-15">
                    <view class="u-flex-1 ling-overflow">培训班出身如何构建自己的知识体系</view>
                    <view class="ling-w-5-p"><u-icon name="heart" color="blue" size="30"></u-icon></view>
                  </view>
                  <view class="u-flex u-row-between">
                    <view><u-tag mode="plain" text="职场生活" shape="circle" /></view>
                    <view class="ling-tips-color">5077浏览量</view>
                  </view>
                </view>
              </view>
              <view class="ling-card u-padding-20">
                <view class="u-flex u-p-b-15">
                  <view class="u-flex-1 ling-overflow">面对职场的“裁员潮”，“抢功劳”，“瞎指挥”，“薪资倒挂”，程序员们何去何从</view>
                  <view class="ling-w-5-p"><u-icon name="heart" color="blue" size="30"></u-icon></view>
                </view>
                <view class="u-p-b-15 u-flex u-m-t-15">
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5dfc48470001d0c605200311.png"></u-image>
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5dfc488a00011b8b04960312.png"></u-image>
                  <u-image border-radius="10rpx" width="223rpx" height="120rpx" src="https://img1.sycdn.imooc.com/5dfc48aa0001e5ee01900224.png"></u-image>
                </view>
                <view class="u-flex u-row-between">
                  <view><u-tag mode="plain" text="职场生活" shape="circle" /></view>
                  <view class="ling-tips-color">5058浏览量</view>
                </view>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import lingNavbar from '../../components/navbar/ling-navbar'
import {apiNewList} from '../../api/mock'
	export default {
    components:{
      lingNavbar
    },
		data() {
			return {
        title:'首页',
        background:{
          backgroundColor:'#f3f4f6'
        },
        keyword: '',
        navList: [{
          name: '全部'
        }, {
          name: '职场生活'
        }, {
          name: '前端开发'
        }, {
          name: '人工智能'
      }],
        listData:[],
        // 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
        current: 0, // tabs组件的current值，表示当前活动的tab选项
        swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        tabs:[1,2,3]
      }
		},
		methods: {
      /***
       * 初始化数据
       * ***/
      async init() {
        this.listData = await apiNewList(2,10)
        console.log(this.listData)
      },
      /***
       * 标签管理
       * ***/
      handleSet() {
        console.log(23)
        this.$u.route({
          url: 'pages/index/ll-setting/index',
          params:{
            name:this.title
          }
        })
      },
      /***
       * tabs通知swiper切换
       * ***/
      tabsChange(index) {
        this.swiperCurrent = index;
      },
      /***
       * swiper-item左右移动，通知tabs的滑块跟随移动
       * ***/
      transition(e) {
        let dx = e.detail.dx;
        this.$refs.uTabs.setDx(dx);
      },
      /***
       * 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
       *  swiper滑动结束，分别设置tabs和swiper的状态
       * ***/
      animationfinish(e) {
        let current = e.detail.current;
        this.$refs.uTabs.setFinishCurrent(current);
        this.swiperCurrent = current;
        this.current = current;
      },
      /***
       * scroll-view到底部加载更多
       * ***/
      onreachBottom() {

      },
		  /***
       * 去详情
       * ***/
      toDetail(item) {
        this.$u.route({
          url: 'pages/detail/index',
          params: {
            item: item
          }
        })
      }

		},
    onLoad() {
      this.init()
    },
	}
</script>

<style scoped lang="scss">
.u-top {
  width: 100%;
  background:linear-gradient(left ,#2979ff,#a0cfff);
}

.ling-card {
  border-radius: 10rpx;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}
.ling-overflow {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.ling-border-r-20 {
  border-radius: 20rpx;
}


</style>
