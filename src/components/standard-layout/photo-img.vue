<template lang="pug">
.container(:style="{ width: `${width}px`}")
  a(
    :href="photo.link"
    target="_blank"
  )
    img.img(
      ref="img"
      :src="photo.image"
      @load="onImageLoad"
    )
</template>

<script>
  export default {
    data() {
      return {
        width: 0,
      };
    },

    props: {
      photo: {
        type: Object,
        required: true,
      },
    },

    methods: {
      onImageLoad() {
        this.width = this.$refs.img.getBoundingClientRect().width;
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
