<template lang="pug">
PhotoArray(
  :photos="styling.savory"
  :full-colors="colors.styling"
)
</template>

<script>
import PhotoArray from '@/components/standard-layout/photo-array.vue'
import PhotoList from '@/photos.js';
import Colors from '@/colors.js';

export default {
  name: 'SavoryStyling',
  mixins: [
    PhotoList,
    Colors,
  ],
  components: {
    PhotoArray,
  },
}
</script>
