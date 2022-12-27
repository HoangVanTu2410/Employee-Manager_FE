<template>
  <div class="container">
    <TheSidebar/>
    <TheMain/>
  </div>
</template>

<script>
import TheSidebar from './components/layout/TheSidebar.vue';
import TheMain from './components/layout/TheMain.vue';
export default {
  name: 'App',
  components: {
    TheSidebar, TheMain
  }
}
</script>

<style>
@import url(./css/main.css);
</style>
