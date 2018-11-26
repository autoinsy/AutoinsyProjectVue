<template>
  <div class="">
    <div class="allsize">
      全部结果 > 新闻列表
    </div>
    <!---->
    <div class="news_box">
      <ul>
        <li v-for="news in newsList">
          <router-link :to='{path: "/NewsDetails", query:{newsId: news.newsID, newsList: newsList}}'>
            <div class="news_img"><img v-bind:src="news.imageUrl1" style="height: 100%; width: 100%"/></div>
            <div class="news_center">
              <div class="news_title">
                <a href="">{{news.newsTitle}}</a>
              </div>
              <div class="news_zi">
                <a href="">{{news.content}}</a>
              </div>
              <div class="news_k">
                <a href="">{{news.content}}</a>
                <span style="padding: 0 10px;">|</span>
                <a href="">{{news.content}}</a>
              </div>
              <div class="clear"></div>
            </div>
            <div class="news_date">
              <p>{{news.publishTime.split('-')[1]+'-'+news.publishTime.split('-')[2]}}</p>
              <span>
                <router-link to='/NewsDetails' class="news_data_more"><</router-link>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="clear"></div>
      <div class="tcdPageCode"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        newsList: []
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/news/allNews'
      }).then(res => {
        _this.newsList = res.data.data;
      })
    }
  }
</script>

<style scoped>

</style>
