<template>
  <SiteHeader />
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" style="max-height: 340px">
      <div class="carousel-item active">
        <img src="..//assets/carosello1.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="..//assets/carosello2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="..//assets/carosello3.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next </span>
    </button>
  </div>

  <h1 class="text-center mt-2">Ciao {{ name }}, benvenuta/o in Tennis Hub count: {{ count }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <div class="container">
    <div class="mb-3 mt-3">
      <label for="searchTerm" class="form-label">Cerca:</label>
      <input
        style="max-width: 320px"
        type="text"
        class="form-control"
        id="searchTerm"
        v-model="searchTerm"
        @input="performSearch"
      />
    </div>

    <table class="mt-5 mb-5 table table-bordered table-hover rounded overflow-hidden">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Contatti</th>
          <th scope="col">Indirizzo</th>
          <th scope="col" class="col-2">Azioni</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="item in filteredTennisField" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <router-link :to="'/update/' + item.id">
                <font-awesome-icon :icon="['far', 'pen-to-square']" class="fa-lg" />
                <span class="d-none d-xl-inline-flex">Modifica</span>
              </router-link>
              <button class="btn btn-danger btn-sm rounded" @click="deleteField(item.id)">
                <font-awesome-icon :icon="['fas', 'trash']" />
                <span class="d-none d-xl-inline-flex">Elimina</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <SiteFooter />
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'

import axios from 'axios'
export default {
  name: 'HomePage',
  computed: {
    count() {
      return this.$store.state.count
    }
  },

  data() {
    return {
      name: '',
      tennisField: [],
      searchTerm: '',
      filteredTennisField: []
    }
  },
  components: {
    SiteHeader,
    SiteFooter
  },

  methods: {
    increment() {
      console.log('ofnweoifnewo')
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
    performSearch() {
      // Filtra l'array filteredTennisField in base al valore di searchTerm
      this.filteredTennisField = this.tennisField.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.contact.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.address.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      })
    },
    async deleteField(id) {
      let result = await axios.delete('http://localhost:3000/tennisField/' + id)
      console.warn(result)
      if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info')
      this.name = JSON.parse(user)[0].name //[0] aggiunto perchè nel db gli utenti sono dentro un array e non un oggetto
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }

      const userInfo = JSON.parse(user)
      this.id = userInfo[0].id

      try {
        const result = await axios.get('http://localhost:3000/tennisField')
        console.warn(result)
        // Filtra solo i campi che hanno user_id corrispondente all'ID dell'utente nel localStorage
        this.tennisField = result.data.filter((campo) => campo.user_id === userInfo[0].id)
        this.filteredTennisField = this.tennisField
      } catch (error) {
        // Gestisci eventuali errori di caricamento dei dati
        console.error('Errore nel caricamento dei dati dei campi:', error)
      }
    }
  },

  async mounted() {
    this.loadData()
  }
}
</script>

<Footer />
