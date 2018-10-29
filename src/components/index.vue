<template>
  <div class='' id="show">
    <top-nav></top-nav>
    <Nav></Nav>
    <footer></footer>
  </div>
</template>

<script>
    import footer from '@/components/footer'
    import Nav from '@/components/Nav'
    import TopNav from '@/components/TopNav'

    export default {
      name: "index",
      components: {
        footer: footer,
        Nav: Nav,
        TopNav: TopNav,
      },

      data() {
      },
    }
</script>

<style scoped>

</style>
