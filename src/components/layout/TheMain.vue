<template>
  <div class="main">
    <TheNavbar></TheNavbar>
    <EmployeeList :showLoading="showLoading" :hideLoading="hideLoading" :showEmployeeDetail="showEmployeeDetail"
      :showToast="showToast"></EmployeeList>
  </div>
  <MISALoading v-show="isShowLoading"></MISALoading>
  <MISAToast v-if="isShowToast" :hideToast="hideToast" :resultHandle="resultHandle"></MISAToast>
  <EmployeeDetail :employeeSelected="employeeSelected" :hideEmployeeDetail="hideEmployeeDetail" :showToast="showToast"
    v-if="isShowEmployeeDetail"></EmployeeDetail>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import EmployeeList from '../../views/employee/EmployeeList.vue'
import MISALoading from '../base/MISALoading.vue';
import MISAToast from '../base/MISAToast.vue';
import EmployeeDetail from '../../views/employee/EmployeeDetail.vue';
export default {
  name: "TheMain",
  components: { TheNavbar, EmployeeList, MISALoading, MISAToast, EmployeeDetail },
  methods: {
    /**
     * Hiển thị form chi tiết nhân viên
     * Author: HVTu (10/11/2022)
     */
    showEmployeeDetail(employee) {
      try {
        this.isShowEmployeeDetail = true;
        this.employeeSelected = employee;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Ẩn form chi tiết nhân viên
     * Author: HVTu (10/11/2022)
     */
    hideEmployeeDetail() {
      try {
        this.isShowEmployeeDetail = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hiển thị loading
     * Author: HVTu (10/11/2022)
     */
    showLoading() {
      try {
        this.isShowLoading = true;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Ẩn loading
     * Author: HVTu (10/11/2022)
     */
    hideLoading() {
      try {
        this.isShowLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Hiển thị toast
     * Author: HVTu (5/12/2022)
     */
    showToast(resultHandle) {
      try {
        this.isShowToast = true;
        this.resultHandle = resultHandle;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Ẩn toast
     * Author: HVTu (5/12/2022)
     */
    hideToast() {
      try {
        this.isShowToast = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
      isShowLoading: false,
      isShowToast: false,
      isShowWarning: false,
      isShowEmployeeDetail: false,
      employeeSelected: {},
      resultHandle: {}
    }
  }
}
</script>

<style scoped>
@import url(../../css/main.css);
</style>