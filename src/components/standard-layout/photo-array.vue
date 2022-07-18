<template lang="pug">
.array(
  @scroll="onScroll"
  ref="array"
)
  PhotoImg.margin-right(
    v-for="(photo, idx) in photos"
    :key="idx"
    :photo="photo"
  )
</template>

<script>
  import PhotoImg from './photo-img.vue';
  import Colors from '@/colors.js';

  export default {
    mixins: [Colors],
    components: {
      PhotoImg,
    },

    props: {
      photos: {
        type: Array,
        required: true,
      },
      fullColors: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        colorDistances: null,
      };
    },

    mounted() {
      const distances = {};
      ['r', 'g', 'b'].forEach((rgbKey) => {
        distances[rgbKey] = this.fullColors.left[rgbKey] - this.fullColors.right[rgbKey];
      });
      this.colorDistances = distances;

      const array = this.$refs.array;
      this.registerScroll(array, true);
    },

    methods: {
      setBodyBackground(scrollPercentages) {
        const gradientColorValues = { left: {}, right: {}};
        ['r', 'g', 'b'].map((rgbKey) => {
          const origin = this.fullColors.left[rgbKey]
          const distance = this.colorDistances[rgbKey];
          ['left', 'right'].forEach((side) => {
            const partialDistance = scrollPercentages[side] * distance;
            const rgbVal = parseInt(origin - partialDistance);
            gradientColorValues[side][rgbKey] = rgbVal;
          });
        });
        const gradient = this.linearGradient(gradientColorValues);
        document.body.style.background = gradient;
      },

      onScroll(e) {
        const array = e.target;
        this.registerScroll(array);
      },

      registerScroll(array, isFromMount) {
        const scrollLeft = array.scrollLeft;
        const scrollRight = array.scrollLeft + array.offsetWidth;
        const scrollWidth = parseFloat(array.scrollWidth);
        if (isFromMount && scrollWidth === scrollRight) {
          // The photos haven't loaded and it thinks it's just the full width of the screen
          // Gotta hack it until it's fully loaded
          this.setBodyBackground({
            left: 0,
            right: 0.1,
          });
        } else {
          const scrollPercentageLeft = scrollLeft / scrollWidth;
          const scrollPercentageRight = scrollRight / scrollWidth;
          this.setBodyBackground({
            left: scrollPercentageLeft,
            right: scrollPercentageRight,
          });
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  $height: 600px;
  .array {
    display: flex;
    overflow-x: scroll;
    height: $height;
    margin-top: calc(50vh - #{$height / 2});
    padding: 16px;

    .margin-right:not(:last-child) {
      margin-right: 24px;
    }
    .margin-right:last-child {
      margin-right: 8px;
    }
  }
</style>
