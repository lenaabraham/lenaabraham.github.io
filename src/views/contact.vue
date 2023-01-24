<template lang="pug">
div
  HomeButton
  .container
    form.contact-form(
      ref="form"
      @submit.prevent="sendEmail"
    )
      text.header Get in touch!
      input.input(
        v-model="name"
        type="text"
        name="name"
        placeholder="name"
      )
      input.input(
        v-model="email"
        type="text"
        name="email"
        placeholder="email"
      )
      textarea.input.textarea(
        v-model="message"
        :rows="5"
        :cols="30"
        name="message"
        placeholder="message"
      )
      input.input.button(
        type="submit"
        value="Send"
        :disabled="disabled"
        :class="{ disabled }"
      )
    .about-section
      img.about-img(
        :src="aboutImgSrc"
        alt="photo of Lena Abraham"
      )
      text.about-text Lena Abraham is a recipe developer and food stylist, living and working in New York City since 2010. She'd love to work with you next! 🙂
</template>

<script>
  import HomeButton from '@/components/home-button.vue';
  import emailjs from '@emailjs/browser';
  import Colors from '@/colors.js';

  export default {
    name: 'ContactView',
    mixins: [Colors],
    components: {
      HomeButton,
    },

    data() {
      return {
        name: null,
        email: null,
        message: null,
        sending: false,
        aboutImgSrc: null,
      };
    },

    computed: {
      disabled() {
        return this.sending || !this.name || !this.email || !this.message;
      },
    },

    created() {
      this.aboutImgSrc = require(`@/../public/about.jpg`);
    },

    mounted() {
      const gradient = this.linearGradient(this.colors.contact);
      document.body.style.backgroundImage = gradient;
    },

    methods: {
      sendEmail() {
        if (!this.sending) {
          this.sending = true;
          emailjs.sendForm('service_i3kuprh', 'template_jye1rgf', this.$refs.form, 'JxDhn_2D5kkXHlRwM')
            .then((result) => {
              this.clearForm()
              this.$store.dispatch('toast', 'Message sent!');
              console.log('SUCCESS!', result.text);
            }, (error) => {
              this.clearForm()
              this.$store.dispatch('toast', 'Something went wrong...');
              console.log('FAILED...', error.text);
            });
        }
      },

      clearForm() {
        this.sending = false;
        this.name = null;
        this.email = null;
        this.message = null;
      },
    },
  }
</script>

<style scoped lang="scss">
  $padding: 16px;
  $mobile-breakpoint: 450px;

  .container {
    display: flex;
    width: 100vw;
    @media only screen and (max-width: $mobile-breakpoint) {
      flex-direction: column;
      height: 100vh;
      overflow-y: scroll;
    }
  }
  .contact-form {
    .header {
      font-size: 32px;
      margin-bottom: 16px;
    }
    margin: 32px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;

    padding: $padding;
    width: 40%;

    @media only screen and (max-width: $mobile-breakpoint) {
      width: 60vw;
    }

    .input:not(:last-child) {
      margin-bottom: $padding;
    }
    .input {
      font-family: 'Pirata One', cursive;
      font-size: 24px;
      border: 0px;
      background: rgba(255,255,255,0.4);
    }
    .input:focus {
      outline: none;
    }
    .textarea {
      resize: none;
    }
    .button.disabled {
      background: rgba(255,255,255,0.2);
    }
    .button:not(.disabled) {
      cursor: pointer;
      background: rgba(255,255,255,0.8);
    }
  }
  
  $width-breakpoint: 1000px;
  .about-section {
    margin-top: 80px;
    padding: $padding;
    width: 45%;
    display: flex;

    @media only screen and (max-width: $width-breakpoint) {
      flex-direction: column;
    }
    @media only screen and (max-width: $mobile-breakpoint) {
      margin-top: 16px;
      margin-left: 32px;
      width: 60vw;
    }
    .about-img {
      width: 40%;
      margin-right: 16px;
      align-self: flex-start;

      box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);
      -webkit-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);
      -moz-box-shadow: 5px 5px 11px 0px rgba(0,0,0,0.41);

      @media only screen and (max-width: $width-breakpoint) {
        width: 60%;
        margin-right: 0;
        margin-bottom: 16px;
      }
      @media only screen and (max-width: $mobile-breakpoint) {
        width: 100%;
      }
    }
    .about-text {
      width: 50%;
      font-size: 24px;
      @media only screen and (max-width: $width-breakpoint) {
        width: 60%;
      }
      @media only screen and (max-width: $mobile-breakpoint) {
        width: 100%;
    }
    }
  }
</style>
