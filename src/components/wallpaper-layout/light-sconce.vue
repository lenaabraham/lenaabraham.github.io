<template lang="pug">
img.sconce(
  :src="src"
)
</template>

<script>
  export default {
    data() {
      return {
        src: null,
      };
    },

    created() {
      this.src = require(`@/../public/sconce.png`);
    }
  }
</script>

<style scoped lang="scss">
  .sconce {
    height: 250px;
    background: radial-gradient(rgba(270, 270, 270, 0.9) 0%, rgba(0, 0, 0, 0) 50%);
  }
</style>
