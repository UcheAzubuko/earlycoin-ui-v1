<template>
    <div @click="goToCompliancePage" class="compliance-prompt">
        <p>Complete your <span>profile</span> to have access</p>
        <!-- <img src="@/assets/icons/close.svg" alt="close"> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CompliancePrompt',

    components: {},

    methods: {
        goToCompliancePage() {
            console.log('going');
            return null;
        }
    },
})
</script>

<style lang="scss">
.compliance-prompt {
    background: #E67337;
    padding: 20px 12px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    color: #ffffff;
    margin: 0 50px 30px 50px;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        font-size: 12px;
        margin: 0 30px 30px 30px;
    }

    p {
        text-align: center;

        span {
            color: #FFDC8D;
            text-decoration: underline;
        }
    }

    img.close {
        cursor: pointer;
    }
}
</style>
