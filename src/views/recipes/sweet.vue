<template lang="pug">
PhotoArray(
  :photos="recipes.sweet"
  :full-colors="colors.recipes"
)
</template>

<script>
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';
import Colors from '@/colors.js';

export default {
  name: 'SweetRecipes',
  mixins: [
    PhotoList,
    Colors,
  ],
  components: {
    PhotoArray,
  },
}
</script>
