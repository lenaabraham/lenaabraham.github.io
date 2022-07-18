<template lang="pug">
router-link.back-button(
  to="/"
  :style="style"
) home
</template>

<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'right',
      }
    },

    data() {
      return {
        style: {},
      }
    },

    mounted() {
      this.style[this.position] = '16px';
      this.style.opacity = 1;
    },
  }
</script>

<style scoped lang="scss">
  .back-button {
    position: fixed;
    top: 16px;
    color: white;
    text-decoration: none;

    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
