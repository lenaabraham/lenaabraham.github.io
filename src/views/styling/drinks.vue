<template lang="pug">
PhotoArray(
  :photos="styling.drinks"
  :full-colors="colors.styling"
)
</template>

<script>
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';
import Colors from '@/colors.js';

export default {
  name: 'DrinksStyling',
  mixins: [
    PhotoList,
    Colors,
  ],
  components: {
    PhotoArray,
  },
}
</script>
