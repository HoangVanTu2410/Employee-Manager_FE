<template>
    <div class="dialog">
        <div class="dialog-content dialog-warning">
            <div class="dialog__header">
                <div class="dialog__header--title">{{ DIALOG_TITLE.NOTIFICATION }}</div>
                <div class="dialog__icon--close" @click="hideWarning" :title="TOOLTIP.CLOSE"></div>
            </div>
            <div class="dialog__body">
                <div class="item-notification" v-for="(item, index) in warnings" :key="index">
                    <div class="icon-error"></div>
                    <div class="pd-l-8">{{ item }}</div>
                </div>
            </div>
            <div class="dialog__footer">
                <button class="btn" @click="hideWarning">{{ BUTTON_NAME.ACCEPT }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { BUTTON_NAME } from "../../scripts/resources.js";
import { TOOLTIP } from "../../scripts/resources.js";
import { DIALOG_TITLE } from "../../scripts/resources.js";
export default {
    name: "MISAWarning",
    props: ["myWarnings", "hideWarning"],
    created() {
        this.warnings = this.myWarnings;
    },
    data() {
        return {
            BUTTON_NAME,
            TOOLTIP,
            DIALOG_TITLE,
            warnings: [],
        }
    },
}
</script>

<style>

</style>