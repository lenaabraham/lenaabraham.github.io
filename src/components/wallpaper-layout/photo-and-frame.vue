<template lang="pug">
.container(:style="containerDimensions")
  template(v-if="frame && picture")
    img.picture(
      :src="picture.src"
      :style="pictureDimensions"
    )
    img.frame(
      :src="frame.src"
    )
</template>

<script>
  export default {
    props: {
      pictureSrc: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        default: 1,
      },
    },

    data() {
      return {
        frame: null,
        picture: null,
      };
    },

    computed: {
      containerDimensions() {
        const dim = { width: 0, height: 0 };
        if (this.frame) {
          dim.width = `${this.frame.width}px`;
          dim.height = `${this.frame.height}px`;
        }
        return dim;
      },

      pictureDimensions() {
        if (this.picture && this.frame) {
          const widthRatio = this.picture.width / parseFloat(this.frame.width);
          const heightRatio = this.picture.height / parseFloat(this.frame.height);
          if (widthRatio > heightRatio) {
            // Longer than the frame
            return {
              width: `${this.picture.width / heightRatio}px`,
              height: `${this.picture.height / heightRatio}px`,
            }
          } else {
            // Taller than the frame
            return {
              width: `${this.picture.width / widthRatio}px`,
              height: `${this.picture.height / widthRatio}px`,
            }
          }
        }
        return null;
      },
    },

    created() {
      this.loadPicture();
    },

    methods: {
      loadPicture() {
        const picture = new Image();
        picture.onload = () => {
          this.picture = picture;
          const frameTitle = picture.width > picture.height ? 'hor' : 'ver';
          this.loadFrame(frameTitle);
        }
        picture.src = this.pictureSrc;
      },

      loadFrame(frameTitle) {
        const frameSrc = require(`@/../public/frames/${frameTitle}.png`);
        const frame = new Image();
        frame.onload = () => {
          // The division by 2 is arbitrary, investigate actually
          frame.width = frame.width / 2;
          frame.height = frame.height / 2;
          this.frame = frame;
        }
        frame.src = frameSrc;
      },
    }
  }
</script>

<style scoped lang="scss">
  .container {
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    margin: 0 40px;
    box-shadow: -6px 10px 5px 0px rgba(0,0,0,0.75);

    .frame, .picture {
      width: 100%;
      position: absolute;
    }
  }
</style>
