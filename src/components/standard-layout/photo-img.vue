<template lang="pug">
.container
  img.img(
    :src="src"
  )
  .link Recipe ⮕
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
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
    }

    .link {
      display: none;
    }
    // TODO: Get this working
    // $height: 40px;
    // $padding: 8px;
    // .img:hover + .link {
    //   display: block;
    //   position: absolute;
    //   width: calc(100% - $padding);
    //   height: $height;
    //   bottom: 0;
    //   right: 0;
    //   padding: $padding;
    //
    //   background-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 30%);
    //
    //   text-align: right;
    //   line-height: calc($height / 2 * 3);
    // }
  }
</style>
