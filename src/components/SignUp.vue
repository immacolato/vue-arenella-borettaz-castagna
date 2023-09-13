<template>
  <div class="container ">
    <div class="text-center ">
      <img class="logo mt-2" src="../assets/logoTennis.png" alt="Tennis Logo" />
      <h1 class="mt-2">TENNIS HUB</h1>
      <h6 class="text-body-secondary">Il gestionale per i tuoi campi da tennis!</h6>
      <h2 class="mt-3">Iscriviti:</h2>
    </div>
    <div>
      <div class="register col-md-6 mx-auto bg-success text-white rounded shadow-lg"
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
          <button v-on:click="signUp" type="submit" class="btn btn-dark shadow-sm">Iscriviti!</button>
          <h6 class="text-center mt-2">— oppure —</h6>
          <p class="text-center mt-1">
            <router-link to="/login" class="text-light">Accedi</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
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