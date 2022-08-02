<template lang="pug">
.container
  a(
    :href="photo.link"
    target="_blank"
  )
    img.img(
      :src="photo.image"
    )
</template>

<script>
  export default {
    props: {
      photo: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;

    .img {
      height: 100%;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .img:hover {
      transform: translate(-2px, -2px);
      box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);
      -webkit-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);
      -moz-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);
    }
  }
</style>
