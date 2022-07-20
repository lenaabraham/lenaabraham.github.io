<template lang="pug">
img.magnet(
  :src="src"
  :style="style"
  @mouseover="mouseover"
  @mouseout="mouseout"
)
</template>

<script>
  export default {
    name: 'PhotoMagnet',
    props: {
      src: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        translate: null,
        rotation: null,
        top: null,
        left: null,
      };
    },

    computed: {
      style() {
        return {
          transform: [this.translate, this.rotation].join(' '),
          top: this.top,
          left: this.left,
        }
      },
    },

    mounted() {
      this.rotation = `rotate(${Math.floor(Math.random() * 30) - 15}deg)`;
      this.top = `${Math.floor(Math.random() * 15) + 35}vh`;
      this.left = `${Math.floor(Math.random() * 10) + 25}px`;
    },

    methods: {
      mouseover() {
        this.translate = 'translate(-2px, -2px)';
      },
      mouseout() {
        this.translate = null;
      },
    },
  }
</script>

<style scoped lang="scss">
  .magnet {
    position: absolute;
    width: 36vw;

    border: 1px solid white;

    box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);
    -webkit-box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);

    z-index: 2;

    transition: transform 0.3s;

    @media only screen and (max-width: 450px) {
      display: none;
    }
  }
  .magnet:hover {
    box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.44);
    -webkit-box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.44);

    z-index: 3;
  }
</style>
