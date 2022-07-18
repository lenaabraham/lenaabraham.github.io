export default {
  data() {
    return {
      colors: {
        styling: {
          left: { r: 242, g: 156, b: 70 },
          right: { r: 99, g: 173, b: 107 },
        },
        recipes: {
          left: { r: 215, g: 187, b: 252 },
          right: { r: 255, g: 163, b: 197 },
        },
        contact: {
          left: { r: 150, g: 181, b: 148 },
          right: { r: 82, g: 179, b: 148 },
        },
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
      const gradient = `linear-gradient(to right, ${gradientColorPhrases.join(', ')})`;
      document.body.style.backgroundImage = gradient;
    },
  },
}
