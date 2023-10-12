<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
    <button
      class="navbar-toggler mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon m"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            :class="[
              'nav-link',
              'home',
              'navbar-brand',
              'rounded',
              { activeLink: $route.path === '/' },
              { 'mt-3': isMobileMenuOpen, 'mt-0': !isMobileMenuOpen }
            ]"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :class="['nav-link', 'rounded', { activeLink: $route.path === '/add' }]"
            to="/add"
            >Aggiungi struttura</router-link
          >
        </li>
      </ul>
    </div>
    <li class="nav-link exit navbar-brand rounded me-3 ml-auto" v-on:click="logout" href="#">
      Esci
    </li>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isMobileMenuOpen: false // Inizializza la variabile per il menu mobile
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    },
    handleResize() {
      this.isMobileMenuOpen = window.innerWidth <= 992 // Imposta isMobileMenuOpen in base alla larghezza della finestra
      console.log(this.isMobileMenuOpen)
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize) // Aggiungi il listener per il resize della finestra
    this.handleResize() // Chiama la funzione per inizializzare lo stato in base alla larghezza attuale
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize) // Rimuovi il listener quando il componente viene distrutto
  }
}
</script>

<style scoped>
/* Stili globali per il link attivo */
.activeLink {
  color: #fff;
  border-bottom: 4px solid;
}

/* Stili specifici per l'header */
.navbar-brand {
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.3s,
    padding 0.3s;
  /* Aggiungi una transizione fluida */
}

/* Stili per il link Home */
.nav-link.home:hover {
  background-color: #fff;
  color: #000 !important;
}

/* Stili per gli altri link */
.nav-link:not(.home):not(.exit):hover {
  background-color: #fff;
  color: #000 !important;
}

/* Stili per il link Esci */
.exit:hover {
  background-color: #ff4935;
  color: #ffffff !important;
  padding: 6px;
  cursor: pointer;
}
</style>
