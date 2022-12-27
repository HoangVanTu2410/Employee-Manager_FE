<template>
    <div class="dialog">
        <div class="dialog-content dialog-confirm">
            <div class="dialog__header">
                <div class="dialog__header--title">{{ DIALOG_TITLE.DELETE_EMPLOYEE }}</div>
                <div class="dialog__icon--close" @click="hideDialogConfirm" :title="TOOLTIP.CLOSE"></div>
            </div>
            <div class="dialog__body">
                <div class="item-notification">
                    <div class="icon-warning"></div>
                    <div class="content__title">{{ title }}</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="dialog__footer">
                <button class="light-btn" @click="hideDialogConfirm">{{ BUTTON_NAME.NO }}</button>
                <button class="btn" @click="onAccept">{{ BUTTON_NAME.YES }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { BUTTON_NAME } from '../../scripts/resources.js';
import { TOOLTIP } from "../../scripts/resources.js";
import { DIALOG_TITLE } from "../../scripts/resources.js"
export default {
    name: "DialogConfirm",
    props: ["dialogConfirmTitle", "hideDialogConfirm", "deleteEmployee"],
    created() {
        this.title = this.dialogConfirmTitle;
    },
    methods: {
        /**
         * Thực hiện xóa nhân viên và ẩn dialog
         * Author: HVTu (24/11/2022)
         */
        onAccept() {
            try {
                this.deleteEmployee();
                this.hideDialogConfirm();
            } catch (error) {
                console.log(error);
            }
        }
    },
    data() {
        return {
            TOOLTIP,
            BUTTON_NAME,
            DIALOG_TITLE,
            title: ""
        }
    },
}
</script>

<style scoped>
@import url(../../css/base/dialog.css);
</style>