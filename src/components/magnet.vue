<!-- orange crush, strawberry shortcake, fennel salad -->
<template lang="pug">
img.magnet(
  :src="src"
  :style="style"
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

    computed: {
      style() {
        const rotation = Math.floor(Math.random() * 30) - 15;
        const top = Math.floor(Math.random() * 15) + 35;
        const left = Math.floor(Math.random() * 10) + 25;
        return {
          transform: `rotate(${rotation}deg)`,
          top: `${top}vh`,
          left: `${left}px`,
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .magnet {
    position: absolute;
    width: 500px;

    border: 1px solid white;

    box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);
    -webkit-box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);
    -moz-box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.44);

    z-index: 2;
  }
</style>
