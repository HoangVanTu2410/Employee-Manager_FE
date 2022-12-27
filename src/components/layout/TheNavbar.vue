<template>
  <div class="navbar">
    <div class="navbar-left">
      <div class="navbar-left__toggle"></div>
      <div class="navbar-left__title">
        <h3>{{ NAVBAR_TITLE.TITLE }}</h3>
      </div>
      <div class="navbar-left__dropdown"></div>
    </div>
    <div class="navbar-right">
      <div class="navbar-right__notification"></div>
      <div class="navbar-right__infor">
        <div class="navbar-right__avatar"></div>
        <div class="navbar-right__name">
          <h3>{{ NAVBAR_TITLE.USER_NAME }}</h3>
        </div>
        <div class="navbar-right__dropdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { NAVBAR_TITLE } from "../../scripts/resources.js";
export default {
  name: "TheNavbar",
  data() {
    return {
      NAVBAR_TITLE
    }
  },
}
</script>

<style>
@import url(../../css/layout/navbar.css);
</style>