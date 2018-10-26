<template>
  <div class="">
    <div class="allsize">
      全部结果 > 新闻列表
    </div>
    <!---->
    <div class="news_box">
      <ul>
        <li>
          <a href="newsdetails.html">
            <div class="news_img"><img src="images/04.jpg"/></div>
            <div class="news_center">
              <div class="news_title"><a href="newsdetails.html">新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题</a></div>
              <div class="news_zi"><a href="newsdetails.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
                新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>
              </div>
              <div class="news_k"><a href="newsdetails.html">关键词</a><span style="padding: 0 10px;">|</span><a href="newsdetails.html">重要关键词</a> </div>
              <div class="clear"></div>
            </div>
            <div class="news_date">
              <p>09-03</p>
              <sapn><a href="newsdetails.html" class="news_data_more"><</a></sapn>
            </div>
          </a>
        </li>
        <li>
          <a href="newsdetails.html">
            <div class="news_img"><img src="images/04.jpg"/></div>
            <div class="news_center">
              <div class="news_title"><a href="newsdetails.html">新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题</a></div>
              <div class="news_zi"><a href="newsdetails.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
                新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>
              </div>
              <div class="news_k"><a href="newsdetails.html">关键词</a><span style="padding: 0 10px;">|</span><a href="newsdetails.html">重要关键词</a> </div>
              <div class="clear"></div>
            </div>
            <div class="news_date">
              <p>09-03</p>
              <sapn><a href="newsdetails.html" class="news_data_more"><</a></sapn>
            </div>
          </a>
        </li>
        <li>
          <a href="newsdetails.html">
            <div class="news_img"><img src="images/04.jpg"/></div>
            <div class="news_center">
              <div class="news_title"><a href="newsdetails.html">新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题</a></div>
              <div class="news_zi"><a href="newsdetails.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
                新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>
              </div>
              <div class="news_k"><a href="newsdetails.html">关键词</a><span style="padding: 0 10px;">|</span><a href="newsdetails.html">重要关键词</a> </div>
              <div class="clear"></div>
            </div>
            <div class="news_date">
              <p>09-03</p>
              <sapn><a href="newsdetails.html" class="news_data_more"><</a></sapn>
            </div>
          </a>
        </li>
        <li>
          <a href="newsdetails.html">
            <div class="news_img"><img src="images/04.jpg"/></div>
            <div class="news_center">
              <div class="news_title"><a href="newsdetails.html">新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题新闻大标题</a></div>
              <div class="news_zi"><a href="newsdetails.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题
                新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>
              </div>
              <div class="news_k"><a href="newsdetails.html">关键词</a><span style="padding: 0 10px;">|</span><a href="newsdetails.html">重要关键词</a> </div>
              <div class="clear"></div>
            </div>
            <div class="news_date">
              <p>09-03</p>
              <sapn><a href="newsdetails.html" class="news_data_more"><</a></sapn>
            </div>
          </a>
        </li>
      </ul>
      <div class="clear"></div>
      <!-- 分页开始 -->
      <div class="tcdPageCode"></div>
      <!-- 分页结束 -->
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  $(".tcdPageCode").createPage({
    pageCount:20,
    current:1,
    backFn:function(p){
      //console.log(p);
    }
  });
    export default {
        name: "News"
    }
</script>

<style scoped>

</style>
