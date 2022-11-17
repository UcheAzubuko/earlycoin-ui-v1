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
    data: function () {
        return {

        };
    },

});
</script>
  
<style lang="scss" scoped>
.overlay {
    background: #121127e8;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999999999;

    @media only screen and (max-width: 1100px) {}

    @media only screen and (max-width: 600px) {}

}
</style>
  