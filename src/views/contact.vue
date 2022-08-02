<template lang="pug">
div
  HomeButton
  form.contact-form(
    ref="form"
    @submit.prevent="sendEmail"
    :style="formColors"
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
      };
    },

    computed: {
      formColors() {
        const colors = {
          left: this.colors.contact.right,
          right: this.colors.contact.left,
        };
        return { 'background-image': this.linearGradient(colors) };
      },

      disabled() {
        return this.sending || !this.name || !this.email || !this.message;
      },
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
  .contact-form {
    .header {
      font-size: 32px;
      margin-bottom: 16px;
    }
    margin: 32px;
    display: flex;
    flex-direction: column;

    padding: $padding;
    // background-color: #accde6;
    width: 1000px;

    border: 1px solid #878787;
    border-radius: $padding / 2;

    .input:not(:last-child) {
      margin-bottom: $padding;
    }
    .input {
      font-family: 'Pirata One', cursive;
      font-size: 24px;
    }
    .input:focus {
      outline: none;
    }
    .textarea {
      resize: none;
    }
    .button:not(.disabled) {
      cursor: pointer;
    }
  }
</style>
