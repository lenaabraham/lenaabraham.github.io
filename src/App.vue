<template>
  <nav>
    <router-link to="/">Savory</router-link> |
    <router-link to="/sweet">Sweet</router-link> |
    <router-link to="/drinks">Drinks</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e6e6e6;
}
</style>
