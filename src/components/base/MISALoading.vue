<template>
  <div class="loading">
    <div class="loading__content">
      <img class="loading__icon" src="../../assets/loading.svg" alt="">
      <div class="loading__text">{{ LOADING_TITLE }}</div>
    </div>
  </div>
</template>

<script>
import { LOADING_TITLE } from "../../scripts/resources.js";
export default {
  name: "MISALoading",
  data() {
    return {
      LOADING_TITLE
    }
  },
}
</script>

<style scoped>
@import url(../../css/base/loading.css);
</style>