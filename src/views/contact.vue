<template lang="pug">
HomeButton
form.contact-form(
  ref="form"
  @submit.prevent="sendEmail"
)
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
          emailjs.sendForm('service_i3kuprh', 'template_jye1rgf', this.$refs.form, 'JxDhn_2D5kkXHlRwM')
            .then((result) => {
              this.sending = false;
              this.name = null;
              this.email = null;
              this.message = null;
              console.log('SUCCESS!', result.text);
            }, (error) => {
              this.sending = false;
              console.log('FAILED...', error.text);
            });
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  $padding: 16px;
  .contact-form {
    margin: 32px;
    display: flex;
    flex-direction: column;

    padding: $padding;
    background-color: #accde6;
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
