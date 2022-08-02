<template lang="pug">
.container(:style="size")
  a(
    :href="photo.link"
    target="_blank"
  )
    img.img(
      ref="img"
      :src="photo.image"
    )
</template>

<script>
  export default {
    data() {
      return {
        width: null,
      };
    },

    props: {
      photo: {
        type: Object,
        required: true,
      },
    },

    computed: {
      size() {
        // There was some weirdness with sizing on mobile, hoping this fixes it
        if (this.width) {
          return { 'width': `${this.width}px` };
        } else {
          return {};
        }
      }
    },

    mounted() {
      this.width = Math.floor(this.$refs.img.getBoundingClientRect().width);
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
