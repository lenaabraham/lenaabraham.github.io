<template lang="pug">
.container
  section(:style="sectionStyles.styling")
    .header-group(
      ref="styling"
      @mouseover="adjustHeight('styling', 4)"
      @mouseout="adjustHeight('styling', 1)"
    )
      .header(@click="open('/styling/savory')") styling
      .header(@click="open('/styling/savory')") savory
      .header(@click="open('/styling/sweet')") sweet
      .header(@click="open('/styling/drinks')") drinks
  section(:style="sectionStyles.recipes")
    .header-group(
      ref="recipes"
      @mouseover="adjustHeight('recipes', 4)"
      @mouseout="adjustHeight('recipes', 1)"
    )
      .header(@click="open('/recipes/savory')") recipes
      .header(@click="open('/recipes/savory')") savory
      .header(@click="open('/recipes/sweet')") sweet
      .header(@click="open('/recipes/drinks')") drinks
  section(:style="sectionStyles.contact")
    .header-group
      .header(@click="open('/contact')") contact
</template>

<script>
  import Colors from '@/colors.js';

  export default {
    name: 'HomeView',
    mixins: [Colors],

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
      ['styling', 'recipes'].forEach(group => this.adjustHeight(group, 1));
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

    section {
      width: 100%;
      height: 100vh;
      padding: 36px;
      text-align: center;
      transition: all 0.5s;

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
      .header:hover {
        color: white;
      }
    }
  }
</style>
