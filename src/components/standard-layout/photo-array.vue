<template lang="pug">
.array(
  @scroll="onScroll"
  ref="array"
)
  PhotoImg.margin-right(
    v-for="(photo, idx) in photos"
    :key="idx"
    :src="photo"
  )
</template>

<script>
  import PhotoImg from './photo-img.vue';

  export default {
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
      this.registerScroll(array);
    },

    methods: {
      setBodyBackground(scrollPercentages) {
        const gradientColorValues = { left: [], right: []};
        ['r', 'g', 'b'].map((rgbKey) => {
          const origin = this.fullColors.left[rgbKey]
          const distance = this.colorDistances[rgbKey];
          ['left', 'right'].forEach((side) => {
            const partialDistance = scrollPercentages[side] * distance;
            const rgbVal = parseInt(origin - partialDistance);
            gradientColorValues[side].push(rgbVal);
          });
        });
        const gradientColorPhrases =['left', 'right'].map((side) => {
          return `rgb(${gradientColorValues[side].join(', ')})`;
        });
        const gradient = `linear-gradient(to right, ${gradientColorPhrases.join(', ')})`;
        document.body.style.backgroundImage = gradient;
      },

      onScroll(e) {
        const array = e.target;
        this.registerScroll(array);
      },

      registerScroll(array) {
        const scrollLeft = array.scrollLeft;
        const scrollRight = array.scrollLeft + array.offsetWidth;
        const scrollPercentageLeft = scrollLeft / parseFloat(array.scrollWidth);
        const scrollPercentageRight = scrollRight / parseFloat(array.scrollWidth);
        this.setBodyBackground({
          left: scrollPercentageLeft,
          right: scrollPercentageRight,
        });
      },
    },
  }
</script>

<style scoped lang="scss">
  .array {
    display: flex;
    overflow-x: scroll;
    height: 600px;

    .margin-right:not(:last-child) {
      margin-right: 24px;
    }
  }
</style>
