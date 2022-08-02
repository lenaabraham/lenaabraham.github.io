<template lang="pug">
.toast(v-if="toast") {{ toast }}
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'ToastEl',

    computed: {
      ...mapState([
        'toast',
      ]),
    },
  }
</script>

<style scoped lang="scss">
  .toast {
    width: 400px;
    height: 60px;
    border: 2px solid white;
    border-radius: 4px;
    position: fixed;
    top: 20px;
    left: calc(50vw - 200px);
    background-color: rgb(20, 52, 43);

    text-align: center;
    font-size: 32px;
    line-height: 52px;
    color: white;

    animation-name: toast;
    animation-duration: 3s;
  }

  @keyframes toast {
    0%   {opacity: 0; top: 0px;}
    20%  {opacity: 1; top: 20px;}
    80%  {opacity: 1; top: 20px;}
    100% {opacity: 0; top: 0px;}
  }
</style>
