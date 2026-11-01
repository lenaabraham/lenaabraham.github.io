<template>
  <div class="container">
    <a href="/#/" class="back">{{ '<' }}</a>
    <div class="body">
      <div ref="title" class="title">Contact</div>
      <div class="photo-and-form">
        <form class="form" ref="form" @submit.prevent="sendEmail">
          <text class="header">Get in touch!</text>
          <input class="input" v-model="name" type="text" name="name" placeholder="name">
          <input class="input" v-model="email" type="text" name="email" placeholder="email">
          <textarea
            class="input textarea"
            v-model="message"
            :rows="5"
            :cols="30"
            name="message"
            placeholder="mesage"
          ></textarea>
          <input
            class="input button"
            type="submit"
            value="Send"
            :disabled="disabled"
            :class="{ disabled }"
          >
        </form>
        <img class="photo" src="about.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
  import emailjs from '@emailjs/browser';

  export default {
    name: "AboutContact",

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
  .body {
    margin-top: 72px;
    padding: 16px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .photo-and-form {
      display: flex;
      gap: 16px;

      .photo {
        height: 400px;
      }
  
      .form {
        display: flex;
        flex-direction: column;
        width: 320px;
        gap: 16px;

        input, textarea {
          font-family: "Kavivanar", Arial, sans-serif;
        }
      }
    }
  }
</style>