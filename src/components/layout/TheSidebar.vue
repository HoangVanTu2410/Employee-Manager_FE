<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="sidebar__toggle"></div>
      <img src="../../assets/imgs/Logo_Module_TiengViet_White.66947422.svg" class="sidebar__logo">
    </div>
    <div class="sidebar-list-item">
      <a class="sidebar-item sidebar-item__selected">
        <div class="sidebar-item__icon ic-overview"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.OVERVIEW }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-cash"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.CASH }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-bank"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.DEPOSIT }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-bag"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.SHOPPING }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-cart"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.SELL }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-bill"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.BILL }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-stock"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.STOCK }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-tool"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.TOOL }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-asset"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.ASSET }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-tax"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.TAX }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-price"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.PRICE }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-general"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.GENERAL }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-budget"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.BUDGET }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-report"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.REPORT }}</div>
      </a>
      <a class="sidebar-item">
        <div class="sidebar-item__icon ic-finance"></div>
        <div class="sidebar-item__text">{{ SIDEBAR_ITEM_TITLE.FINANCE }}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { SIDEBAR_ITEM_TITLE } from "../../scripts/resources.js";
export default {
  name: "TheSidebar",
  data() {
    return {
      SIDEBAR_ITEM_TITLE
    }
  },
}
</script>

<style scoped>
@import url(../../css/layout/sidebar.css);
</style>