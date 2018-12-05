<template>
  <div class="">
    <div class="allsize">
      全部结果 > 新闻列表 > 新闻快讯
    </div>
    <!---->
    <div class="centermy">
      <div class="left">
        <div class="details_left">
          <div class="detalis_top">新闻快讯</div>
          <ul>
            <li v-for="(news, index) in newsList">
              <router-link :to="{path: '/NewsDetails', query: {newsId: news.newsID}}" v-if="index===0"
                           class="li_active">
                {{news.newsTitle}}
              </router-link>
              <router-link :to="{path: '/NewsDetails', query: {newsId: news.newsID}}" v-else>
                {{news.newsTitle}}
              </router-link>
            </li>
            <p class="news_p"><a href="javascript:">更多></a></p>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="details_right news_ps">
          <ul>
            <li style="display:block;">
              <div class="news_details_title"><h1 style="font-size: 250%;color: #333">{{newsInfo.newsTitle}}</h1></div>
              <div class="news_date_s">时间：{{newsInfo.publishTime}}</div>
              <p>{{newsInfo.content}}</p>
              <p></p>
              <p>
              <div class="img_center"><img v-bind:src="newsInfo.imageUrl1" width="415" height="318"/></div>
              </p>
              <p></p>
              <p>
              <div class="img_center"><img v-bind:src="newsInfo.imageUrl2" width="415" height="318"/></div>
              </p>
              <p></p>
              <p>
              <div class="img_center"><img v-bind:src="newsInfo.imageUrl3" width="415" height="318"/></div>
              </p>
              <p></p>
              <p>
              <div class="img_center"><img v-bind:src="newsInfo.imageUrl4" width="415" height="318"/></div>
              </p>
              <p></p>
              <p>
              <div class="img_center"><img v-bind:src="newsInfo.imageUrl5" width="415" height="318"/></div>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "NewsDetails",
    data() {
      return {
        newsInfo: '',
        newsList: [],
        newsID: ''
      }
    },
    watch: {
      $route: function (to, from) {
        this.getNewsDetail(to.query.newsId)
      }
    },
    mounted: function () {
      let _this = this;
      this.newsId = this.$route.query.newsId;
      this.$axios({
        url: _this.HOME + '/news/allNews'
      }).then(res => {
        _this.newsList = res.data.data;
        if (_this.newsId) {
          _this.getNewsDetail(_this.newsId)
        } else {
          _this.getNewsDetail(_this.newsList[0].newsID)
        }
      });
    },
    methods: {
      getNewsDetail: function (newsID) {
        let _this = this;
        _this.$axios({
          url: _this.HOME + '/news/getOneNews?news_id=' + newsID,
          method: 'post'
        }).then(res => {
          _this.newsInfo = res.data.data;
        })
      }
      ,
    }
  }
</script>

<style scoped>

</style>
