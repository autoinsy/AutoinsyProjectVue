<template>
  <div class="">
    <div class="allsize">
      全部结果 > 汽配城
    </div>
    <!---->
    <div class="qpcbox">
      <ul>
        <li v-for="city in cities">
          <router-link :to='{path: "/MotorPartsTownDetails", query: {cityId: city.cityId}}' tag="a" active-class="activer"><img v-bind:src="city.cityImgUrl" style="width: 100%;height: 100%"/>
            <p>{{city.cityName}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!--中间内容 over-->
  </div>
</template>

<script>
  export default {
    name: "MotorPartsTown",
    data() {
      return {
        cities: []
      }
    },
    mounted: function () {
      let _this = this;
      this.$axios({
        url: _this.HOME + '/autoinsyCity/cityList'
      }).then(res => {
        _this.cities = res.data.data;
      })
    }
  }
</script>

<style scoped>

</style>
