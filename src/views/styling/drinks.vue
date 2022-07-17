<template lang="pug">
PhotoArray(
  :photos="photos.drinks"
  :full-colors="colors"
)
</template>

<script>
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';

export default {
  name: 'DrinksView',
  mixins: [PhotoList],
  components: {
    PhotoArray,
  },

  data() {
    return {
      colors: {
        left: { r: 242, g: 156, b: 70 },
        right: { r: 99, g: 173, b: 107 },
      },
    };
  },
}
</script>
