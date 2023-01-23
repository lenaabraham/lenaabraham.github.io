<template lang="pug">
.container
  section(:style="sectionStyles.contact")
    .header-group(
      ref="contact"
      @mouseover="adjustHeight('contact', 1)"
      @mouseout="adjustHeight('contact', 0)"
    )
      .header.primary.xl Lena Abraham
      .header(@click="open('/contact')") About / Contact
    Magnet(
      :hor="1"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/orange-crush-horizontal-1646080000.jpg"
    )
  section(:style="sectionStyles.styling")
    .header-group(
      ref="styling"
      @mouseover="adjustHeight('styling', 3)"
      @mouseout="adjustHeight('styling', 0)"
    )
      .header.primary Styling
      .header(@click="open('/styling/savory')") Savory
      .header(@click="open('/styling/sweet')") Sweet
      .header(@click="open('/styling/drinks')") Drinks
    Magnet(
      :hor="-1"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/curried-chick-pea-salad-3-1651248610.jpg"
    )
  section(:style="sectionStyles.recipes")
    .header-group(
      ref="recipes"
      @mouseover="adjustHeight('recipes', 3)"
      @mouseout="adjustHeight('recipes', 0)"
    )
      .header.primary Recipes
      .header(@click="open('/recipes/savory')") Savory
      .header(@click="open('/recipes/sweet')") Sweet
      .header(@click="open('/recipes/drinks')") Drinks
    Magnet(
      :hor="-4"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210915-cranberry-pie-007-ab-1632768669.jpg"
    )
</template>

<script>
  import Magnet from '@/components/magnet.vue';
  import Colors from '@/colors.js';

  export default {
    name: 'HomeView',
    mixins: [Colors],
    components: {
      Magnet,
    },

    data() {
      return {
        stylingOpen: false,
        recipesOpen: false,
        contactOpen: false,
      };
    },

    computed: {
      sectionStyles() {
        return {
          styling: {
            background: this.linearGradient(this.colors.styling),
            width: (this.recipesOpen || this.contactOpen) ? '0' : '100%',
          },
          recipes: {
            background: this.linearGradient(this.colors.recipes),
            width: (this.stylingOpen || this.contactOpen) ? '0' : '100%',
          },
          contact: {
            background: this.linearGradient(this.colors.contact),
            width: (this.stylingOpen || this.recipesOpen) ? '0' : '100%',
          },
        };
      },
    },

    mounted() {
      ['styling', 'recipes', 'contact'].forEach(group => this.adjustHeight(group, 0));
    },

    methods: {
      adjustHeight(ref, numChildren) {
        if (!this.$refs[ref]) { return; }
        // ...HeaderHeight and padding derived from .header class below
        const primaryHeaderHeight = 36;
        const secondaryHeaderHeight = 24;
        const margin = 12;
        const hangerOnHeight = 12;
        const totalHeight = primaryHeaderHeight + hangerOnHeight + (numChildren * (secondaryHeaderHeight + hangerOnHeight + margin));
        this.$refs[ref].style.height = `${totalHeight}px`;
      },

      open(path) {
        if (window.screen.width <= 450) {
          // 450 is my app-wide designation for mobile and the animations look weird on mobile.
          this.$router.push(path);
        } else {
          const group = ['styling', 'recipes', 'contact'].find(group => path.includes(group));
          this[`${group}Open`] = true;
          this.$router.push(path);
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 450px) {
      height: 100%;
      flex-direction: column;
    }

    section {
      width: 100%;
      height: 100vh;
      padding: 36px;
      transition: all 0.5s;
      position: relative;

      @media only screen and (max-width: 450px) {
        width: 100vw;
        height: 100%;
      }

      .header-group {
        display: inline-flex;
        flex-direction: column;
        overflow: hidden;
        transition: all 0.5s;
        z-index: 1000;
      }

      .header {
        cursor: pointer;
        display: inline-block;
        font-size: 24px;
        margin-bottom: 12px;
        color: #303030;

        @media only screen and (min-width: 451px) {
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .header.primary {
        font-size: 36px;
        color: black;
      }
      .header.primary.xl {
        font-weight: 700;
        font-size: 40px;
      }
      .header:not(.primary):hover {
        color: white;
      }
    }
  }
</style>
