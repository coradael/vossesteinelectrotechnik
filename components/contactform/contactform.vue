<template>
  <v-alert v-if="showAlert" :type="alertIsError ? 'error' : 'success'" class="fixed-alert" border="start" prominent
    closable 
    v-model="showAlert">
    {{ alertMessage }}
  </v-alert>
  <v-form v-model="valid" @submit.prevent>
    <v-text-field v-model="name" :rules="nameRules" label="Je naam (verplicht)" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="Je e-mailadres (verplicht)" required></v-text-field>
    <v-text-field v-model="subject" label="Onderwerp"></v-text-field>
    <v-textarea v-model="message" label="Je bericht"></v-textarea>
    <button v-ripple type="submit" @click="sendEmail" :disabled="!valid">Verstuur</button>
  </v-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { ContactFormInputType } from '../../server/api/contactform.post';

const nameRules = [
  (v: string) => !!v || 'Naam is verplicht',
];

const emailRules = [
  (v: string) => !!v || 'E-mail is verplicht',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail moet een geldig adres zijn',
];

const name = ref('');
const email = ref('');
const subject = ref('');
const valid = ref(false);
const message = ref('');
const showAlert = ref(false);
const alertMessage = ref('');
const alertIsError = ref(false);

const sendEmail = async () => {
  const response = await fetch('/api/contactform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    } as ContactFormInputType),
  });

  const clearForm = () => {
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
  };

  if (response.ok) {
    showAlert.value = true;
    alertMessage.value = 'Je bericht is verstuurd!';
    alertIsError.value = false;
    clearForm();
  } else {
    showAlert.value = true;
    alertMessage.value = 'Er is iets misgegaan, probeer het later opnieuw';
    alertIsError.value = true;
  }

  setTimeout(() => {
    showAlert.value = false;
  }, 5000);

};
</script>

<style scoped>
button {
  text-transform: uppercase;
  background-color: var(--main-blue);
  color: white;
  border-radius: 8px;
  width: 262px;
  height: 48px;
}

.v-form{
  width: 952px;
  max-width: 100%;
}

button:disabled {
  background-color: lightgrey;
}

@media (max-width: 1280px) {
  button {
    font-size: 16px;
    height: 40px;
  }
}

v-text-field {
  size: 20px;
}

.fixed-alert {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  z-index: 999;
}
</style>
