export default {
  data() {
    return {
      colors: {
        contact: {
          left: { r: 187, g: 223, b: 197 },
          right: { r: 186, g: 183, b: 0 },
        },
        styling: {
          left: { r: 186, g: 183, b: 0 },
          right: { r: 96, g: 147, b: 93 },
        },
        recipes: {
          left: { r: 96, g: 147, b: 93 },
          right: { r: 20, g: 52, b: 43 },
        },
      }
    };
  },

  methods: {
    linearGradient(colors) {
      const isMobile = window.screen.width <= 450;
      const gradientColorPhrases =['left', 'right'].map((side) => {
        const rgbObj = colors[side];
        const rgbVals = [rgbObj['r'], rgbObj['g'], rgbObj['b']];
        return `rgb(${rgbVals.join(', ')})`;
      });
      return `linear-gradient(to ${isMobile ? 'bottom' : 'right'}, ${gradientColorPhrases.join(', ')})`;
    },
  },
}
