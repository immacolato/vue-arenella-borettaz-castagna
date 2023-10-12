<template>
  <SiteHeader />
  <div style="margin-bottom: 400px">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" style="max-height: 300px">
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

    <h1 class="text-center mt-2">Ciao {{ name }}, benvenuta/o in Tennis Hub</h1>
    <h3 v-if="numberOfFields == 0" class="text-center mt-2">
      Hai al momento {{ numberOfFields }} strutture disponibili, aggiungi la tua prima struttura da
      Tennis!
    </h3>
    <h3 v-else-if="numberOfFields == 1" class="text-center mt-2">
      Hai al momento {{ numberOfFields }} struttura disponibile
    </h3>
    <h3 v-else class="text-center mt-2">
      Hai al momento {{ numberOfFields }} strutture disponibili
    </h3>
    <!--<button @click="increment">Increment</button>-->
    <!--<button @click="decrement">Decrement</button>-->
    <div class="container">
      <div class="mb-1 mt-3">
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
      <div class="table-responsive">
        <table class="mt-4 mb-5 table table-bordered table-hover rounded overflow-hidden">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" class="col-2">Nome</th>
              <th scope="col" class="col-1">Contatti</th>
              <th scope="col" class="col-3">Indirizzo</th>
              <th scope="col">Città</th>
              <th scope="col" class="col-2">Disponibilità strutture</th>
              <th scope="col" class="col-2">Azioni</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="item in filteredTennisField" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.city }}</td>
              <td>{{ availableFields }}</td>
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
    </div>
  </div>
  <SiteFooter />
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'

import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HomePage',
  computed: {
    // Mappa lo stato Vuex `count` al tuo componente
    ...mapState(['count']),
    // Mappa lo stato Vuex `availableFields` al tuo componente
    ...mapState(['availableFields'])
  },

  data() {
    return {
      name: '',
      tennisField: [],
      searchTerm: '',
      filteredTennisField: [],
      numberOfFields: 0
    }
  },
  components: {
    SiteHeader,
    SiteFooter
  },

  methods: {
    // Mappa le mutazioni Vuex `increment` e `decrement` al tuo componente
    ...mapMutations(['increment', 'decrement']),
    incrementAvailableFields() {
      this.increment() // Chiama la mutazione increment dal tuo store Vuex
    },
    decrementAvailableFields() {
      this.decrement() // Chiama la mutazione decrement dal tuo store Vuex
    },
    performSearch() {
      // Filtra l'array filteredTennisField in base al valore di searchTerm
      this.filteredTennisField = this.tennisField.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.contact.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.address.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.city.toLowerCase().includes(this.searchTerm.toLowerCase())
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
      this.name = JSON.parse(user).name
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }

      const userInfo = JSON.parse(user)
      this.id = userInfo.id

      try {
        const result = await axios.get('http://localhost:3000/tennisField')
        console.warn(result)
        // Filtra solo i campi che hanno user_id corrispondente all'ID dell'utente nel localStorage
        this.tennisField = result.data.filter((campo) => campo.user_id === userInfo.id)
        this.filteredTennisField = this.tennisField
        this.numberOfFields = this.filteredTennisField.length
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
