<template>
  <div class="container ">
    <div class="text-center jumbotron">
      <img class="logo mt-2" src="../assets/logoTennis.png" alt="Tennis Logo" />
      <h1 class="mt-2 display-4">TENNIS HUB</h1>
      <h6 class="lead">Il gestionale per i tuoi campi da tennis!</h6>

      <router-link to="/ScopriDiPiu"
        class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Scopri di
        più</router-link>

      <div>
        <h2 class="mt-5">Effettua l'iscrizione:</h2>
      </div>
      <form @submit.prevent="signUp" class="register col-md-6 mx-auto bg-success text-white rounded shadow-lg"
        style="max-width: 420px; margin: 0 auto;">
        <div class="d-flex flex-column mb-5" style="max-width: 320px; margin: 0 auto;">
          <div class="mb-3 mt-3">
            <label for="nome">Inserisci il tuo nome</label>
            <input type="text" v-model="name" class="form-control" id="nome" placeholder="Nome">
          </div>
          <div class="mb-3">
            <label for="mail">Inserisci la tua mail</label>
            <input type="email" v-model="email" class="form-control" id="mail" placeholder="e-mail">
          </div>
          <div class="mb-3">
            <label for="password">Inserisci la tua password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button @click.prevent="signUp" @keyup.enter="signUp" type="submit"
            class="mt-3 btn btn-dark shadow-sm">Iscriviti!</button>
          <h6 class="text-center mt-2">— oppure —</h6>
          <p class="text-center mt-1">
            <router-link to="/login"
              class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Accedi</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
  <SiteFooter />
</template>

<style>
.logo {
  width: 80px;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },


  methods: {
    async signUp() {
      // Verifica se tutti i campi sono stati compilati
      if (!this.name || !this.email || !this.password) {
        // Mostra un messaggio di errore o gestisci l'errore come preferisci
        alert("Per favore, compila tutti i campi.");
        return;
      }

      // Verifica il formato dell'indirizzo email usando una regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert("Inserisci un indirizzo email valido.");
        return;
      }

      try {
        // Effettua una richiesta HTTP per ottenere i dati utente dal server
        const response = await axios.get("http://localhost:3000/users");

        // Verifica se l'account con l'email specificato è già presente nella lista degli utenti
        if (response.data.some(user => user.email === this.email)) {
          alert("Questo account è già registrato. Si prega di effettuare il login.");
          return;
        }

        // Continua con la registrazione se tutti i campi sono compilati, l'indirizzo email è valido e l'account non esiste ancora
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password
        });

        if (result.status == 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: 'HomePage' });
        }
      } catch (error) {
        console.error("Si è verificato un errore durante la registrazione:", error);
        alert("Si è verificato un errore durante la registrazione.");
      }
    }
  },

  mounted() {
    let user = localStorage.getItem('user-info');
    if (user)
      this.$router.push({ name: 'HomePage' })
  }
}
</script>