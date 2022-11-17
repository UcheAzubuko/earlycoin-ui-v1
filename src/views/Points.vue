<template>
  <div class="points">
  </div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
  name: "PointsView",
  components: {
  },
  data: function () {
    return {

    };
  },

  computed: {

  }
});
</script>
  
<style lang="scss">
.points {
  margin: 0 50px;
}

@media only screen and (max-width: 600px) {
  .points {
    margin: 0 20x;
  }
}
</style>
  