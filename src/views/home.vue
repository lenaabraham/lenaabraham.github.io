<template lang="pug">
.container
  section(:style="sectionStyles.contact")
    .header-group(
      ref="contact"
      @mouseover="adjustHeight('contact', 3)"
      @mouseout="adjustHeight('contact', 1)"
    )
      .header.primary Lena Abraham
      .header(@click="open('/about')") About
      .header(@click="open('/contact')") Contact
    Magnet(
      :hor="1"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/orange-crush-horizontal-1646080000.jpg"
    )
  section(:style="sectionStyles.styling")
    .header-group(
      ref="styling"
      @mouseover="adjustHeight('styling', 4)"
      @mouseout="adjustHeight('styling', 1)"
    )
      .header.primary Styling
      .header(@click="open('/styling/savory')") Savory
      .header(@click="open('/styling/sweet')") Sweet
      .header(@click="open('/styling/drinks')") Drinks
    Magnet(
      :hor="-1"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fennel-salad-horizontal2-1646080323.jpg"
    )
  section(:style="sectionStyles.recipes")
    .header-group(
      ref="recipes"
      @mouseover="adjustHeight('recipes', 4)"
      @mouseout="adjustHeight('recipes', 1)"
    )
      .header.primary Recipes
      .header(@click="open('/recipes/savory')") Savory
      .header(@click="open('/recipes/sweet')") Sweet
      .header(@click="open('/recipes/drinks')") Drinks
    Magnet(
      :hor="-3"
      src="https://hips.hearstapps.com/hmg-prod/images/strawberry-shortcake-ice-cream-cake-1649267424.jpg"
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
      ['styling', 'recipes', 'contact'].forEach(group => this.adjustHeight(group, 1));
    },

    methods: {
      adjustHeight(ref, numChildren) {
        if (!this.$refs[ref]) { return; }
        // textHeight and padding derived from .header class below
        const textHeight = 36;
        const margin = 12;
        const totalHeight = (numChildren * textHeight) + ((numChildren - 1) * margin);
        this.$refs[ref].style.height = `${totalHeight}px`;
      },

      open(path) {
        const group = ['styling', 'recipes', 'contact'].find(group => path.includes(group));
        this[`${group}Open`] = true;
        this.$router.push(path);
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
      }

      .header {
        cursor: pointer;
        display: inline-block;
        font-size: 36px;
        margin-bottom: 12px;
      }
      .header:not(.primary):hover {
        color: white;
      }
    }
  }
</style>
