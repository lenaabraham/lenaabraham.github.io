export default {
  data() {
    return {
      colors: {
        // Will's experiment
        contact: {
          left: { r: 225, g: 236, b: 242 },
          right: { r: 244, g: 194, b: 133 },
        },
        styling: {
          left: { r: 244, g: 194, b: 133 },
          right: { r: 245, g: 211, b: 127 },
        },
        recipes: {
          left: { r: 245, g: 211, b: 127 },
          right: { r: 108, g: 225, b: 225 },
        },
        // Lena's original
        // contact: {
        //   left: { r: 197, g: 149, b: 245 },
        //   right: { r: 237, g: 221, b: 78 },
        // },
        // styling: {
        //   left: { r: 245, g: 143, b: 42 },
        //   right: { r: 73, g: 88, b: 245 },
        // },
        // recipes: {
        //   left: { r: 79, g: 232, b: 65 },
        //   right: { r: 232, g: 81, b: 81 },
        // },
      }
    };
  },

  methods: {
    linearGradient(colors) {
      const gradientColorPhrases =['left', 'right'].map((side) => {
        const rgbObj = colors[side];
        const rgbVals = [rgbObj['r'], rgbObj['g'], rgbObj['b']];
        return `rgb(${rgbVals.join(', ')})`;
      });
      return `linear-gradient(to right, ${gradientColorPhrases.join(', ')})`;
    },
  },
}
