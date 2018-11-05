<template>
  <div class='' id="show">
    <div class="">
      <top-nav></top-nav>
      <my-nav></my-nav>
    </div>
    <router-view></router-view>
    <div class="">
      <index-detail v-if="href=='/'"></index-detail>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
  import myFooter from '@/components/footer'
  import myNav from '@/components/Nav'
  import TopNav from '@/components/TopNav'
  import indexDetail from '@/components/project/index.vue'

  export default {
    name: "index",
    components: {
      myFooter: myFooter,
      myNav: myNav,
      TopNav: TopNav,
      indexDetail: indexDetail,
    },
    watch: {
      $route: function (to, from) {
        this.href = to.path;
      }
    },
    data() {
      return {
        href:'',
      }
    },
  }
</script>

<style src="../assets/css/index.css"></style>
<style src="../assets/css/mystyle.css"></style>
<style src="../assets/css/reset.css"></style>
<style src="../assets/css/retable-f721744060.css"></style>
