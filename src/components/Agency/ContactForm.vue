<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container my-5 py-5">
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/address-icon.png" alt="Address" />
          <h3 class="pb-2">Address</h3>
          <p>123 Fifth Avenue, NY 10160</p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/mail-icon.png" alt="E-mail" />
          <h3 class="pb-2">E-mail</h3>
          <p>contact@webstudio.com</p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/phone-icon.png" alt="Phone" />
          <h3 class="pb-2">Phone</h3>
          <p>123 455 755</p>
        </div>
      </SequentialEntrance>

      <hr class="divider" />

      <div class="container d-flex flex-column mt-5 pt-5 text-center">
        <h2 class="font-weight-bold mb-4">GRAVIDA NIBH VEL 5</h2>
        <h1 class="font-weight-bold mb-4">Send Us a Message</h1>
        <hr class="my-4" />
      </div>

      <b-form
        action="/agency/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        name="agency-contact"
        method="post"
        @submit.prevent="onSubmit"
      >
        <input type="hidden" name="form-name" value="agency-contact" />
        <input type="hidden" name="bot-field" />

        <b-form-group :state="validateName">
          <label for="contact-name">Name</label>
          <b-input
            @blur="enteredField.name = true"
            required
            :state="validateName"
            v-model="formData.name"
            id="contact-name"
          />
          <b-form-invalid-feedback :state="validateName">
            This field is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group :state="validateEmail">
          <label for="contact-email">Email</label>
          <b-input
            @blur="enteredField.email = true"
            required
            :state="validateEmail"
            type="email"
            v-model="formData.email"
            id="contact-email"
          />
          <b-form-invalid-feedback :state="validateEmail">
            This field is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group :state="validateSubject">
          <label for="contact-subject">Subject</label>
          <b-input
            @blur="enteredField.subject = true"
            required
            :state="validateSubject"
            v-model="formData.subject"
            id="contact-subject"
          />
          <b-form-invalid-feedback :state="validateSubject">
            This field is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group :state="validateMessage">
          <label for="contact-message">Message</label>
          <b-form-textarea
            id="contact-message"
            @blur="enteredField.message = true"
            required
            :state="validateMessage"
            v-model="formData.message"
            rows="3"
            max-rows="6"
          />
          <b-form-invalid-feedback :state="validateMessage">
            This field is required.
          </b-form-invalid-feedback>
        </b-form-group>

        <div data-netlify-recaptcha="true" />
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      enteredField: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
    };
  },
  computed: {
    validateName() {
      return this.enteredField.name ? this.formData.name.length > 0 : null;
    },
    validateEmail() {
      return this.enteredField.email ? this.formData.email.length > 0 : null;
    },
    validateSubject() {
      return this.enteredField.subject ? this.formData.subject.length > 0 : null;
    },
    validateMessage() {
      return this.enteredField.message ? this.formData.message.length > 0 : null;
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    onSubmit(event) {
      const action = event.target.getAttribute('action');

      fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': event.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push(action))
        .catch(error => alert(error));
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  flex: 1 0 auto;
  min-height: 100%;
  width: 100%;
}
h1 {
  color: var(--primaryBlue);
  font-family: 'Nunito', sans-serif;
  font-size: 2.3125rem;
}
h2 {
  color: var(--primaryGreen);
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
}
h3 {
  color: var(--primaryBlue);
  font-family: 'Nunito', sans-serif;
  font-size: 1.75rem;
}
hr {
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: var(--primaryGreen);
  width: 40px;
}
p {
  color: #8192aa;
  font-family: 'Nunito', sans-serif;
  font-size: 100%;
}
label {
  color: #8192aa;
  font-size: 100%;
  font-weight: 700;
}
.divider {
  border-top-width: 1px;
  border-top-color: #8192aa;
  opacity: 0.5;
  width: 100%;
}
</style>
