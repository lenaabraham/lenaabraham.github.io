<template>
  <NavBar />
  <router-view/>
</template>

<script>
  import NavBar from '@/components/nav-bar.vue';

  export default {
    components: {
      NavBar,
    },
  }
</script>

<style>
#app {
  font-family: 'Pirata One', cursive;
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

</style>
