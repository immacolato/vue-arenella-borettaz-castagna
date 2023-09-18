<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow">
    <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMobileMenu">
      <span class="navbar-toggler-icon m"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            :class="['nav-link', 'home', 'navbar-brand', 'rounded', { 'mt-3': isMobileMenuOpen, 'mt-0': !isMobileMenuOpen }]"
            to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link rounded" to="/add">Aggiungi Campo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link rounded" to="/update">Modifica Campo</router-link>
        </li>
      </ul>
    </div>
    <li class="nav-link exit navbar-brand rounded me-3 ml-auto" v-on:click="logout" href="#">Esci</li>
  </nav>
</template>


<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      isMobileMenuOpen: false // Inizializza la variabile per il menu mobile
    };
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen; // Inverti lo stato del menu mobile quando si clicca sul bottone del toggler
    },
    handleResize() {
      this.isMobileMenuOpen = window.innerWidth <= 992; // Imposta isMobileMenuOpen in base alla larghezza della finestra
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize); // Aggiungi il listener per il resize della finestra
    this.handleResize(); // Chiama la funzione per inizializzare lo stato in base alla larghezza attuale
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize); // Rimuovi il listener quando il componente viene distrutto
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

.home:hover {
  background-color: #fff;
  color: #000 !important;
}

.nav-link:hover {
  background-color: #fff;
  color: #000 !important;
}

.exit:hover {
  background-color: #ff4935;
  color: #ffffff !important;
  padding: 4px;
  cursor: pointer;
}
</style>
