<!-- Ricordati di far partire json server aprendo un terminale 
con i permessi di admin nella cartella db usando il comando
 >json-server --watch db.json  -->

<template>
  <div class="container">
    <div class="text-center">
      <img class="logo mt-5" src="../assets/logoTennis.png" alt="Tennis Logo" />
      <h1 class="mt-2">TENNIS HUB</h1>
      <h6 class="text-body-secondary">Il gestionale per i tuoi campi da tennis!</h6>
      <h2 class="mt-5">Iscriviti:</h2>
    </div>
    <div>
      <div class="register col-md-6 mx-auto">
        <div class="d-flex flex-column" style="max-width: 400px; margin: 0 auto;">
          <div class="mb-3">
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
          <button v-on:click="signUp" type="submit" class="btn btn-success">Iscriviti!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  width: 100px;
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
      password: ''
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data))
        this.$router.push({ name: 'HomePage' })
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