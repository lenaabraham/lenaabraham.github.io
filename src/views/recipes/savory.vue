<template lang="pug">
HomeButton
PhotoArray(
  :photos="recipes.savory"
  :full-colors="colors.recipes"
)
</template>

<script>
import HomeButton from '@/components/home-button.vue';
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';
import Colors from '@/colors.js';

export default {
  name: 'SavoryRecipes',
  mixins: [
    PhotoList,
    Colors,
  ],
  components: {
    HomeButton,
    PhotoArray,
  },
}
</script>
