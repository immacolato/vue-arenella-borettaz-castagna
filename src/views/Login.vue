<template>
    <div class="container">
        <div class="text-center jumbotron">
            <img class="logo mt-2" src="../assets/logoTennis.png" alt="Tennis Logo" />
            <h1 class="mt-2 display-4">TENNIS HUB</h1>
            <h6 class="lead">Il gestionale per i tuoi campi da tennis!</h6>
            
            <router-link to="/ScopriDiPiu"
                            class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Scopri di più</router-link>

            <div>
                <h2 class="mt-5">Effettua l'accesso:</h2>
            </div>
            <div class="register col-md-6 mx-auto bg-success text-white rounded shadow-lg"
                style="max-width: 420px; margin: 0 auto;">
                <div class="d-flex flex-column" style="max-width: 320px; margin: 0 auto;">
                    <div class="mb-3 mt-3">
                        <label for="mail">Inserisci la tua mail</label>
                        <input type="email" v-model="email" @keyup.enter="login" class="form-control" id="mail"
                            placeholder="e-mail">
                    </div>
                    <div class="mb-3">
                        <label for="password">Inserisci la tua password</label>
                        <input type="password" v-model="password" @keyup.enter="login" class="form-control" id="password"
                            placeholder="Password">
                    </div>
                    <button @click.prevent="login" class="mt-3 btn btn-dark shadow-sm">Accedi</button>
                    <p class="text-center mt-4">

                        <router-link to="/sign-up"
                            class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sei
                            nuovo? Iscriviti!</router-link>
                    </p>
                </div>
            </div>
        </div>
      </div>
  <SiteFooter />
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        // Mostra un messaggio di errore o gestisci l'errore come preferisci
        alert('Per favore, compila tutti i campi.')
        return
      }
      // Verifica il formato dell'indirizzo email usando una regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.email)) {
        alert('Inserisci un indirizzo email valido.')
        return
      }

      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )

      if (result.status == 200 && result.data.length > 0) {
        let user = result.data[0]
        localStorage.setItem('user-info', JSON.stringify(user))
        this.$router.push({ name: 'HomePage' })
      } else {
        alert('Questo account non è registrato. Si prega di effettuare la registrazione')
      }
      console.warn(result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) this.$router.push({ name: 'HomePage' })
  }
}
</script>
