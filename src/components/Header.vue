<template>
  <nav class="navbar navbar-dark bg-success shadow">
    <router-link class="navbar-brand home rounded ms-5" to="/">Home</router-link>
    <router-link class="navbar-brand rounded" to="/add">Aggiungi Campo</router-link>
    <router-link class="navbar-brand rounded" to="update">Modifica Campo</router-link>
    <a class="navbar-brand exit rounded me-5" v-on:click="logout" href="#">Esci</a>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>
.navbar-brand {
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.3s,
    padding 0.3s;
  /* Aggiungi una transizione fluida */
}

.navbar-brand:hover {
  background-color: darkslategray;
  /* Cambia il colore di sfondo quando si fa hover */
  padding: 6px 24px;
  /* Aumenta il padding per allargare il riquadro */
}

.home:hover {
  background-color: #fff;
  color: #000 !important;
  padding: 12px 24px;
}

.exit:hover {
  background-color: rgb(199, 0, 0);
  color: #fff;
  padding: 12px 24px;
}
</style>
