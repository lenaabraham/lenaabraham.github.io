<template lang="pug">
PhotoArray(
  :photos="styling.sweet"
  :full-colors="colors"
)
</template>

<script>
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';

export default {
  name: 'SweetView',
  mixins: [PhotoList],
  components: {
    PhotoArray,
  },

  data() {
    return {
      colors: {
        left: { r: 215, g: 187, b: 252 },
        right: { r: 255, g: 163, b: 197 },
      },
    };
  },
}
</script>
