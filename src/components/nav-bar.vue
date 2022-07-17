<template lang="pug">
.nav
  .sub-nav.display
    router-link(
      to="/"
    ) Home
    div |
    router-link(
      to="/styling/savory"
      :class="{ selected: stylingSelected }"
      @mouseover="mouseover('styling')"
      @mouseout="mouseout('styling')"
    ) Styling
    div |
    router-link(
      to="/recipes/savory"
      :class="{ selected: recipesSelected }"
      @mouseover="mouseover('recipes')"
      @mouseout="mouseout('recipes')"
    ) Recipes
    div |
    router-link(
      to="/contact"
    ) Contact
  .sub-nav(
    ref="styling"
    @mouseover="mouseover('styling')"
    @mouseout="mouseout('styling')"
  )
    router-link(to="/styling/savory") Savory
    div |
    router-link(to="/styling/sweet") Sweet
    div |
    router-link(to="/styling/drinks") Drinks
  .sub-nav(
    ref="recipes"
    @mouseover="mouseover('recipes')"
    @mouseout="mouseout('recipes')"
  )
    router-link(to="/recipes/savory") Savory
    div |
    router-link(to="/recipes/sweet") Sweet
    div |
    router-link(to="/recipes/drinks") Drinks
</template>

<script>
  export default {
    computed: {
      stylingSelected() {
        const path = this.$router.currentRoute.value.fullPath;
        const stylingPaths = ['/', '/styling/savory', '/styling/sweet', '/styling/drinks'];
        return stylingPaths.includes(path);
      },

      recipesSelected() {
        const path = this.$router.currentRoute.value.fullPath;
        const recipesPaths = ['/recipes/savory', '/recipes/sweet', '/recipes/drinks'];
        return recipesPaths.includes(path);
      },
    },

    methods: {
      mouseover(ref) {
        this.$refs[ref].classList.add('display');
      },

      mouseout(ref) {
        this.$refs[ref].classList.remove('display');
      },
    },
  }
</script>

<style scoped lang="scss">
  $selected-color: #424242;
  .nav {
    padding: 30px;
    margin-bottom: 8px;
  }
  .nav a {
    color: black;
    text-decoration: none;
  }
  .nav a.router-link-exact-active { color: $selected-color }
  .nav a:hover { color: $selected-color }
  .nav a.selected { color: $selected-color }

  .sub-nav > * { margin-right: 8px; }

  .sub-nav {
    height: 0;
    overflow: hidden;
    display: flex;
    transition: all 0.2s linear;
  }
  .sub-nav.display {
    height: 22px;
  }
</style>
