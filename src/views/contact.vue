<template lang="pug">
form.contact-form(
  ref="form"
  @submit.prevent="sendEmail"
)
  input.input(
    v-model="name"
    type="text"
    name="name"
    placeholder="Name..."
  )
  input.input(
    type="text"
    name="company"
    placeholder="Company... (Optional)"
  )
  input.input(
    v-model="email"
    type="text"
    name="email"
    placeholder="Email..."
  )
  textarea.input.textarea(
    v-model="message"
    :rows="5"
    :cols="30"
    name="message"
    placeholder="Message..."
  )
  input.input.button(
    type="submit"
    value="Send"
    :disabled="disabled"
    :class="{ disabled }"
  )
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'ContactView',

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
      const gradient = 'linear-gradient(to right, #FFFFFF, #FFFFFF)'
      document.body.style.backgroundImage = gradient;
    },

    methods: {
      sendEmail() {
        if (!this.sending) {
          emailjs.sendForm('service_i3kuprh', 'template_jye1rgf', this.$refs.form, 'JxDhn_2D5kkXHlRwM')
            .then((result) => {
              this.sending = false;
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
    margin-left: 32px;
    display: flex;
    flex-direction: column;

    padding: $padding;
    background-color: #450666;
    width: 400px;

    border-radius: $padding / 2;

    .input:not(:last-child) {
      margin-bottom: $padding;
    }
    .input {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: 24px;
    }
    .textarea {
      resize: none;
    }
    .button:not(.disabled) {
      cursor: pointer;
    }
  }
</style>
