<template>
  <div class="toast">
    <div class="item-toast" v-show="result.value == RESULT_CODE.SUCCESS">
      <div class="toast__icon--success"></div>
      <div class="toast__text">{{ TOAST_CONTENT.SUCCESS }}</div>
      <div class="toast__content">{{ result.content }}</div>
      <div class="space"></div>
      <div class="toast__button" @click="hideToast"></div>
    </div>
    <div class="item-toast" v-show="result.value == RESULT_CODE.EXCEPTION">
      <div class="toast__icon--error"></div>
      <div class="toast__text">{{ TOAST_CONTENT.ERROR }}</div>
      <div class="toast__content">{{ result.content }}</div>
      <div class="space"></div>
      <div class="toast__button" @click="hideToast"></div>
    </div>
  </div>
</template>

<script>
import { TOAST_CONTENT } from "../../scripts/resources.js";
import { RESULT_CODE } from "../../scripts/enums.js";
export default {
  name: "MISAToast",
  props: ["hideToast", "resultHandle"],
  created() {
    this.result = this.resultHandle;
  },
  mounted() {
    setTimeout(() => {
      this.hideToast();
    }, 3000);
  },
  data() {
    return {
      TOAST_CONTENT,
      RESULT_CODE,
      result: {
        value: null,
        content: ""
      }
    }
  },
}
</script>

<style scoped>
@import url(../../css/base/toast.css);
</style>