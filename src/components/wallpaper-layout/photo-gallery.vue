<template lang="pug">
.gallery
  template(
    v-for="(photo, idx) in photos"
    :key="idx"
  )
    PhotoAndFrame(
      :picture-src="photo"
    )
    LightSconce(
      v-if="idx < photos.length - 1"
    )
</template>

<script>
  import PhotoAndFrame from './photo-and-frame.vue';
  import LightSconce from './light-sconce.vue';
  import PhotoList from '@/photos.js';

  export default {
    mixins: [PhotoList],
    components: {
      PhotoAndFrame,
      LightSconce,
    },
  }
</script>

<style scoped lang="scss">
  .gallery {
    display: flex;
    overflow-x: scroll;
    height: 85vh;
    align-items: center;

    background:
      linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("@/../public/wallpaper.jpeg");
    background-attachment: local;

    border-radius: 8px;
    border: 2px solid black;

    /* width */
    ::-webkit-scrollbar {
      width: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
  }
</style>
