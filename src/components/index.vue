<template>
  <div class='' id="show">
    <div class="" v-if="show">
      <top-nav></top-nav>
      <my-nav></my-nav>
    </div>
    <router-view v-on:showTalkAbout="showTalkAbout"></router-view>
    <div class="" v-if="show">
      <index-detail v-if="href==='/'"></index-detail>
      <my-footer></my-footer>
    </div>
    <talk-about v-if="!show" v-on:showTalkAbout="showTalkAbout"></talk-about>
  </div>
</template>

<script>
  import myFooter from '@/components/footer'
  import myNav from '@/components/Nav'
  import TopNav from '@/components/TopNav'
  import indexDetail from '@/components/project/index.vue'
  import talkAbout from '@/components/project/TalkAbout.vue'

  export default {
    name: "index",
    components: {
      myFooter: myFooter,
      myNav: myNav,
      TopNav: TopNav,
      indexDetail: indexDetail,
      talkAbout: talkAbout
    },
    watch: {
      $route: function (to, from) {
        this.href = to.path;
        sessionStorage.setItem("href", this.href);
      },
    },
    beforeDestroy: function(ev) {
      console.log(ev)
    },
    data() {
      return {
        href: '',
        show: true
      }
    },
    mounted: function () {
      this.href = this.$route.path;
    },
    methods: {
      showTalkAbout: function () {
        this.show = !this.show;
        console.log(!this.show);
      }
    }
  }
</script>

<style src="../assets/css/index.css"></style>
<style src="../assets/css/mystyle.css"></style>
<style src="../assets/css/reset.css"></style>
<style src="../assets/css/retable-f721744060.css"></style>
