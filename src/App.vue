<template lang="pug">
Toast
router-view(v-slot="{ Component, route }")
  transition(:name="route.meta.transition || 'fade'")
    component(:is="Component")
</template>

<script>
  import Toast from '@/components/toast.vue';

  export default {
    components: { Toast },
  }
</script>

<style>
  #app {
    font-family: 'MuseoModerno', cursive;
    font-size: 32px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    height: 100vh;
  }

  .fade-enter-from, .fade-leave-to, .fade-menu-enter-from, .fade-menu-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active, .fade-menu-enter-active {
    transition: opacity 0.4s;
  }
  .fade-menu-leave-active {
    transition: opacity 0;
  }
</style>
