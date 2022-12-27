<template>
  <div class="content">
    <div class="content__header">
      <div class="content__header--title">
        <h2>{{ EMPLOYEELIST_TITLE.EMPLOYEE }}</h2>
      </div>
      <div class="content__header--button">
        <button @click="this.showEmployeeDetail({});" class="btn">{{ EMPLOYEELIST_TITLE.ADD_EMPLOYEE }}</button>
      </div>
    </div>
    <div class="content__page">
      <div class="content__page--toolbar">
        <div class="search-bar">
          <input :placeholder="EMPLOYEELIST_TITLE.SEARCH_BY_CODE_NAME" type="text" class="input input-search"
            v-model="inputSearch">
          <div class="ic-search"></div>
        </div>
        <div class="ic-reload" :title="TOOLTIP.RELOAD" @click="loadData"></div>
        <div class="ic-excel" :title="TOOLTIP.EXPORT_EXCEL" @click="exportExcel"></div>
      </div>
      <div class="content__page--body">
        <div class="body__table">
          <table ref="table_employee">
            <thead>
              <tr>
                <th class="col-40">
                  <input class="input-checkbox" type="checkbox">
                </th>
                <th class="col-150">{{ EMPLOYEELIST_TITLE.EMPLOYEE_CODE }}</th>
                <th class="col-250">{{ EMPLOYEELIST_TITLE.EMPLOYEE_NAME }}</th>
                <th class="col-150">{{ EMPLOYEELIST_TITLE.GENDER }}</th>
                <th class="col-150 col-text-center">{{ EMPLOYEELIST_TITLE.DATEOFBIRTH }}</th>
                <th class="col-150" :title="TOOLTIP.IDENTITYNUMBER">{{ EMPLOYEELIST_TITLE.IDENTITYNUMBER }}</th>
                <th class="col-250">{{ EMPLOYEELIST_TITLE.JOBPOSITION }}</th>
                <th class="col-250">{{ EMPLOYEELIST_TITLE.DEPARTMENT_NAME }}</th>
                <th class="col-150">{{ EMPLOYEELIST_TITLE.BANKACCOUNTNUMBER }}</th>
                <th class="col-250">{{ EMPLOYEELIST_TITLE.BANKNAME }}</th>
                <th class="col-250" :title="TOOLTIP.BANK_BRANCH_NAME">{{ EMPLOYEELIST_TITLE.BANKBRANCHNAME }}</th>
                <th class="col-120 col-text-center">{{ EMPLOYEELIST_TITLE.FUNCTION }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in this.pagingResult.data" :key="index" @dblclick="onRowDblClick(item)">
                <td><input class="input-checkbox" type="checkbox"></td>
                <td>{{ item.EmployeeCode }}</td>
                <td>{{ item.EmployeeName }}</td>
                <td>{{ getGenderName(item.Gender) }}</td>
                <td class="col-text-center">{{ formatDate(item.DateOfBirth) }}</td>
                <td>{{ item.IdentityNumber }}</td>
                <td>{{ item.JobPosition }}</td>
                <td>{{ item.DepartmentName }}</td>
                <td>{{ item.BankAccountNumber }}</td>
                <td :title="item.BankName">{{ item.BankName }}</td>
                <td>{{ item.BankBranchName }}</td>
                <td>
                  <div class="row-control">
                    <div @click="onClickEditRow(item)" class="row-control__edit">{{ EMPLOYEELIST_TITLE.EDIT }}</div>
                    <div class="row-control__more" @click="showDropMenu(item)"
                      :class="{ 'border-blue': (item.EmployeeID == this.employeeSelected.EmployeeID) && isShowDropMenu }">
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="body__paging">
          <div class="body__paging--left">
            {{ EMPLOYEELIST_TITLE.TOTAL }} <b>{{ pagingResult.totalRecord }}</b> {{ EMPLOYEELIST_TITLE.RECORD }}
          </div>
          <div class="body__paging--right">
            <div class="paging-input">
              <select class="select">
                <option v-for="(item, index) in this.NUMBER_OF_RECORDS" :key="index" :value="item.key"
                  :selected="item.key == this.pageSize">{{ item.value }}</option>
              </select>
            </div>
            <div class="paging-control">
              <div class="text-control">{{ EMPLOYEELIST_TITLE.PREVIOUS }}</div>
              <div class="paging-number"><b>1</b></div>
              <div class="text-control">{{ EMPLOYEELIST_TITLE.AFTER }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dropdown-menu" v-if="isShowDropMenu" :style="{ top: topDrop, left: leftDrop }">
    <div class="dropdown-list">
      <div class="dropdown-item" @click="reproductionEmployee">{{ EMPLOYEELIST_TITLE.REPRODUCTION }}</div>
      <div class="dropdown-item" @click="showDialogConfirm">{{ EMPLOYEELIST_TITLE.DELETE }}</div>
      <div class="dropdown-item">{{ EMPLOYEELIST_TITLE.STOP_USING }}</div>
    </div>
  </div>
  <DialogConfirm v-if="isShowDialogConfirm" :dialogConfirmTitle="dialogConfirmTitle"
    :hideDialogConfirm="hideDialogConfirm" :deleteEmployee="deleteEmployee">
  </DialogConfirm>
</template>

<script>
import { EMPLOYEELIST_TITLE } from '../../scripts/resources.js';
import { TOAST_CONTENT } from "../../scripts/resources.js";
import { TOOLTIP } from "../../scripts/resources.js";
import { GENDER } from "../../scripts/enums.js";
import { RESULT_CODE } from "../../scripts/enums.js";
import { ERROR_NAME } from "../../scripts/resources.js";
import { NUMBER_OF_RECORDS } from "@/scripts/resources.js";
import DialogConfirm from '../../components/base/DialogConfirm.vue';
import axios from 'axios';
export default {
  name: "EmployeeList",
  components: { DialogConfirm },
  props: ["showLoading", "hideLoading", "showEmployeeDetail", "showToast"],
  created() {
    this.loadData();
  },
  methods: {
    /**
     * Load dữ liệu danh sách nhân viên, danh sách phòng ban
     * Author: HVTu (21/11/2022)
     */
    loadData() {
      // Hiển thị loading:
      this.showLoading();
      // Lấy danh sách nhân viên
      axios.get(`http://localhost:58234/api/v1/Employees/filter?offset=0&limit=${this.pageSize}`)
        .then(response => {
          this.pagingResult = response.data;
          // Ẩn loading
          this.hideLoading();
        })
        .catch(error => {
          console.log(error);
          this.resultHandle.value = RESULT_CODE.EXCEPTION;
          this.resultHandle.content = ERROR_NAME.EXCEPTION;
          // Ẩn loading
          this.hideLoading();
          this.showToast(this.resultHandle);
        });
    },
    /**
     * Bắt sự kiện click nút sửa trên 1 dòng
     * Author: HVTu (11/11/2022)
     */
    onClickEditRow(item) {
      try {
        // Hiển thị form chi tiết:
        this.showEmployeeDetail(item);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Bắt sự kiện double click vào 1 dòng
     * Author: HVTu (10/11/2022)
     */
    onRowDblClick(item) {
      try {
        // Hiển thị form chi tiết:
        this.showEmployeeDetail(item);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Gọi API xóa nhân viên
     * Author: HVTu (23/11/2022)
     */
    deleteEmployee() {
      axios.delete(`http://localhost:58234/api/v1/Employees/${this.employeeSelected.EmployeeID}`)
        .then(res => {
          console.log("delete:" + res.data);
          this.resultHandle.value = RESULT_CODE.SUCCESS;
          this.resultHandle.content = TOAST_CONTENT.DELETE_EMPLOYEE_SUCCESS;
          this.showToast(this.resultHandle);
          this.loadData();
        })
        .catch(error => {
          console.log(error);
          this.resultHandle.value = RESULT_CODE.EXCEPTION;
          this.resultHandle.content = ERROR_NAME.EXCEPTION;
          this.showToast(this.resultHandle);
        })
    },
    /**
     * Show dialog confirm
     * Author: HVTu (24/11/2022)
     */
    showDialogConfirm() {
      this.dialogConfirmTitle = EMPLOYEELIST_TITLE.CONFIRM_DELETE_PREFIXES + this.employeeSelected.EmployeeCode + EMPLOYEELIST_TITLE.CONFIRM_DELETE_SUFFIXES;
      this.isShowDropMenu = false;
      this.isShowDialogConfirm = true;
    },
    /**
     * Ẩn dialog confirm
     * Author: HVTu (24/11/2022)
     */
    hideDialogConfirm() {
      this.isShowDialogConfirm = false;
    },
    /**
     * Hiển thị drop menu cho tính năng nhân bản và xóa nhân viên
     * Author: HVTu (28/11/2022)
     */
    showDropMenu(employee) {
      try {
        this.isShowDropMenu = !this.isShowDropMenu;
        // Lấy theo tọa độ trục x:
        this.leftDrop = event.clientX - 110 + "px";
        // Lấy theo tọa độ trục y:
        this.topDrop = event.clientY + 10 + "px";
        this.employeeSelected = employee;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Nhân bản nhân viên được chọn
     * Author: HVTu (10/12/2022)
     */
    reproductionEmployee() {
      try {
        var itemEmployee = {
          EmployeeName: this.employeeSelected.EmployeeName,
          Gender: this.employeeSelected.Gender,
          DateOfBirth: this.employeeSelected.DateOfBirth,
          DepartmentID: this.employeeSelected.DepartmentID,
          JobPosition: this.employeeSelected.JobPosition,
          IdentityNumber: this.employeeSelected.IdentityNumber,
          IdentityIssueDate: this.employeeSelected.IdentityIssueDate,
          IdentityIssuePlace: this.employeeSelected.IdentityIssuePlace,
          Address: this.employeeSelected.Address,
          PhoneNumber: this.employeeSelected.PhoneNumber,
          LandlineNumber: this.employeeSelected.LandlineNumber,
          Email: this.employeeSelected.Email,
          BankAccountNumber: this.employeeSelected.BankAccountNumber,
          BankName: this.employeeSelected.BankName,
          BankBranchName: this.employeeSelected.BankBranchName
        }
        this.isShowDropMenu = false;
        this.showEmployeeDetail(itemEmployee);
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Chuyển giới tính từ dạng int sang string
     * Author: HVTu (2/12/2022)
     * @param {int} gender 
     */
    getGenderName(gender) {
      try {
        switch (gender) {
          case GENDER.FEMALE.VALUE: return GENDER.FEMALE.NAME;
          case GENDER.MALE.VALUE: return GENDER.MALE.NAME;
          case GENDER.OTHER.VALUE: return GENDER.OTHER.NAME;
        }
      } catch (error) {
        console.log(error);
        return "";
      }
    },
    /**
     * Xuất thành file excel
     * Author: HVTu (11/12/2022)
     */
    exportExcel() {
    },
    /**
     * Định dạng ngày tháng năm sinh
     * @param {Date} date 
     * Author: HVTu (10/11/2022)
     */
    formatDate(date) {
      try {
        date = new Date(date);
        // Lấy ngày
        var day = date.getDate();
        day = day < 10 ? `0${day}` : day;
        // Lấy tháng
        var month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        // Lấy năm
        var year = date.getFullYear();
        return `${day}/${month}/${year}`;
      } catch (error) {
        console.log(error);
        return "";
      }
    },
    /**
      * Tính toán tổng số trang
      * Author: HVTu (9/12/2022)
      */
    getTotalPage() {
      return Math.ceil(this.pagingResult.totalRecord / this.pageSize);
    },
  },
  data() {
    return {
      RESULT_CODE,
      GENDER,
      TOAST_CONTENT,
      TOOLTIP,
      EMPLOYEELIST_TITLE,
      ERROR_NAME,
      NUMBER_OF_RECORDS,
      pagingResult: {
        totalRecord: 0,
        data: []
      },
      pageSize: 20,
      pageNumber: 1,
      inputSearch: "",
      isShowDialogConfirm: false,
      isShowDropMenu: false,
      topDrop: "0",
      leftDrop: "0",
      dialogConfirmTitle: "",
      employeeSelected: {},
      resultHandle: {
        value: null,
        content: ""
      }
    }
  },
}
</script>

<style>
.border-blue {
  border: 1px solid blue;
}

.dropdown-menu {
  z-index: 5;
  box-sizing: border-box;
  position: fixed;
}

.dropdown-list {
  box-sizing: border-box;
  background: #fff;
  padding: 2px 1px;
  min-width: max-content;
  border-radius: 2px;
  border: 1px solid #bdbebd;
}

.dropdown-list>.dropdown-item {
  cursor: pointer;
  transition: all .2s ease;
  padding: 5px 10px;
  position: relative;
  display: block;
}

.dropdown-item:hover {
  background-color: #E7F5EC;
  color: #089740;
}
</style>