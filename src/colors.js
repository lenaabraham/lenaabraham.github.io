export default {
  data() {
    return {
      colors: {
        // Lena's experiment (snake variety)
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
