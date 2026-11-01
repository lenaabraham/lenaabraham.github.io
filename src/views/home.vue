<template>
  <div class="container">
    <div class="menu">
      <a href="/#/about" class="home-menu-title">Lena Abraham</a>
      <p class="subtitle">Food Stylist + Recipe Developer</p>
      <a href="/#/styling" class="header">Styling</a>
      <a href="/#/recipes" class="header">Recipes</a>
      <a href="/#/about" class="header">Contact</a>
      <img src="../../public/food/compost.png" class="image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    components: {},

    methods: {
      open(path) {
        this.$router.push(path);
      },
    },
  }
</script>

<style scoped lang="scss">
  .menu {
    margin-top: 72px;
    padding: 16px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    a { text-decoration: none; }

    .header, .home-menu-title {
      font-weight: 600;
      color: black;
    }
    .home-menu-title {
      font-size: 48px;
    }
    .subtitle {
      font-size: 20px;
      margin-top: -12px;
    }

    .image {
      height: 50vh;
    }
  }
</style>
