<template>
    <div class="overlay">
    </div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
    name: "OverlayBackground",
    components: {
    },
});
</script>
  
<style lang="scss" scoped>
.overlay {
    background: #121127d0;
    z-index: 999999999;
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;

    @media only screen and (max-width: 1100px) {}

    @media only screen and (max-width: 600px) {}

}
</style>
  