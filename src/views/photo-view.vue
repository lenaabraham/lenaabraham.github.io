<template>
  <div class="container">
    <a href="/#/" class="back">{{ '<' }}</a>
    <div ref="title" class="title">{{ title }}</div>
    <div class="row">
      <component
        v-for="(photo, i) in photoList"
        :is="photo.link ? 'a' : 'div'"
        :href="photo.link ? photo.link : ''"
        target="_blank"
        :key="i"
        class="photo"
      >
        <iframe v-if="src(photo).includes('.mp4')" :src="src(photo)"></iframe>
        <img v-else :src="src(photo) + '?autoplay=1'" />
      </component>
    </div>
  </div>
</template>

<script>
  import PhotoList from '@/lib/photos.js';
  import { capitalize }from 'lodash';

  export default {
    name: 'PhotoView',
    
    props: {
      photoType: { type: String, required: true },
    },

    computed: {
      photoList() {
        return PhotoList[this.photoType];
      },

      title() {
        return capitalize(this.photoType);
      },
    },

    methods: {
      src(photo) {
        return photo.image || photo.path;
      },
    },

    mounted() {
      setTimeout(() => {
        this.$refs.title.classList.add('slid');
      }, 300);
    },
  };
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 24px;
    margin-left: 24px;
    transform: translateX(-80px);
    transition: transform 0.2s ease-in;
  }
  .title.slid {
    transform: translateX(0px);
  }
  .row {
    display: flex;
    gap: 16px;
    height: 60vh;
    width: calc(100% - 24px);
    padding: 0 12px;
    overflow-x: scroll;

    .photo {
      height: 100%;

      img, iframe {
        height: 100%;
      }
    }
  }
</style>