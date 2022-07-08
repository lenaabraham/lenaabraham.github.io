<template lang="pug">
.home
  //- PhotoGallery
  PhotoArray
</template>

<script>
import PhotoGallery from '@/components/wallpaper-layout/photo-gallery.vue'
import PhotoArray from '@/components/standard-layout/photo-array.vue'

export default {
  name: 'HomeView',
  components: {
    PhotoGallery,
    PhotoArray,
  },
}
</script>
