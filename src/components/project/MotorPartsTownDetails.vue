<template>
  <div class="">
    <div class="allsize">
      全部结果 > 汽配城 >汽配城详情
    </div>
    <!---->
    <div class="qpcboxs">
      <div class="qpctitle">
        {{cityInfo.cityTitle}}
      </div>
      <p>{{cityInfo.cityContent}}</p>
      <p>市场的重要集散地；国内外汽车及汽配厂商、代理商云集，世界著名汽车及零配件品牌荟萃的国际汽车、零配件贸易服务平台；集汽车会展、博览、科普、文化、休闲旅游于一
        体的国际性现代化汽车文化园区；中国东北地区最大的国际汽车及汽配交易中心、会展博览中心、服务中心、研发中心、物流信息中心和文化中心。主营商品：汽车配件、汽车用品</p>
      <p> 沈阳西部汽配城是集汽车配件、汽车维修、汽车装饰于一体的大型专业市场，建筑面积达八万平方米，为沈城最大规模的汽车配件专营市场之一。沈阳西部汽配城位于沈阳西
        南主入口，沈大、京沈高速公路要塞。紧靠西南二环路，沈辽路、沈新路、肇工南街交叉处，周边有多条公交线路经过。辽宁北方快速货运集团辽沈货运站（覆盖全国）、沈阳长客
        西站（覆盖全省）、沈阳西部货运中心（覆盖东北三省）、另有九路家具城配货中心相距3公里，一公里范围内聚集300余家汽车维修企业。西部汽配城是省市重点扶持培育市场，以
        先进的经营理念，高效的管理模式发展成为拥有配件经营、汽车维修信息服务的综合市场。汽配城本着高起点、高品位、大规模的市场定位，以开拓、整合、服务汽配市场为契机，
        为商户营造经营名优商品的市场环境和气氛；维护商户的合法权益；引进了年营业额10亿元以上的北京西郊汽配城企业管理团队，实现了政府、业主、企业三赢得目的。投资商还
        紧随现代市场发展潮流，搭建网上西部汽配商城，</p>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "MotorPartsTownDetails",
    data() {
      return{
        cityInfo:''
      }
    },
    mounted: function () {
      let _this = this;
      let cityId = this.$route.query.cityId;
      this.$axios({
        url: _this.HOME + '/autoinsyCity/autoinsyCity?autoinsy_city_id=' + cityId,
        method:'post'
      }).then(res => {
        _this.cityInfo = res.data.data;
        console.log(_this.cityInfo)
      })
    }
  }
</script>

<style scoped>

</style>
