<template lang="pug">
router-view(v-slot="{ Component, route }")
  transition(:name="route.meta.transition || 'fade'")
    component(:is="Component")
</template>

<script>
  export default {
  }
</script>

<style>
#app {
  font-family: 'Pirata One', cursive;
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  height: 100vh;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(100vw);
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(-100vw);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s;
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
