<template>
  <SiteHeader />
  <h1 class="text-center mt-5">Ciao {{ name }}, modifica la tua struttura</h1>

  <div v-if="showAlert" class="text-center alert alert-success alert-dismissible" role="alert">
    <strong>Messaggio:</strong> Struttura modificato con successo!
    <button type="button" class="close rounded btn btn-sm btn-outline-dark ms-3" @click="showAlert = false"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <div class="mt-5 container" style="max-width: 678px; margin: 0 auto; margin-bottom: 120px">
    <form class="row g-2">
      <h5 class="mt-2">Nome Struttura:</h5>
      <input class="form-control" type="text" name="name" placeholder="Inserisci il nome del campo..."
        v-model="campo.name" />
      <h5 class="mt-3">Contatto:</h5>
      <input class="form-control" type="text" name="contact" placeholder="Inserisci contatto..."
        v-model="campo.contact" />
      <h5 class="mt-3">Indirizzo:</h5>
      <input class="form-control" type="text" name="address" placeholder="Inserisci l'indirizzo del campo..."
        v-model="campo.address" />
      <h5 class="mt-3">Città:</h5>
      <input class="form-control" type="text" name="city" placeholder="Inserisci la città..." v-model="campo.city" />
      <div class="row">
        <div class="col-6">
          <h5 class="mt-3">Disponibilità:</h5>
          <div>
            <button class="btn btn-dark rounded" type="button" @click="incrementAvailableFields">+1</button>
            <button class="btn btn-dark mx-3 rounded" type="button" @click="decrementAvailableFields">-1</button>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-center">
          <div class="">
            <h5>Attualmente disponibili: {{ availableFields }}</h5>
          </div>
        </div>
      </div>

      <button class="mt-3 btn btn-success shadow-sm" type="button" v-on:click="aggiornaCampo"
        style="max-width: 420px; margin: 0 auto">
        Modifica struttura
      </button>
      <button class="btn custom-mb mt-3 btn-danger btn-sm rounded" @click="deleteField(this.$route.params.id)"
        style="max-width: 420px; margin: 0 auto">
        <font-awesome-icon :icon="['fas', 'trash']" />
        <span class="d-none d-xl-inline-flex"> Elimina</span>
      </button>
    </form>
  </div>
  <SiteFooter />
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'UpdatePage',
  components: {
    SiteHeader,
    SiteFooter
  },
  computed: {
    // Mappa lo stato Vuex `count` al tuo componente
    ...mapState(['count']),
    // Mappa lo stato Vuex `availableFields` al tuo componente
    ...mapState(['availableFields']),
  },
  data() {
    return {
      campo: {
        name: '',
        address: '',
        contact: '',
        city: ''
      },
      name: '',
      showAlert: false,
      campiIniziali: {},
    }
  },
  methods: {
    // Mappa le mutazioni Vuex `increment` e `decrement` al tuo componente
    ...mapMutations(['increment', 'decrement']),
    incrementAvailableFields() {
      this.increment(); // Chiama la mutazione increment dal tuo store Vuex
    },
    decrementAvailableFields() {
      this.decrement(); // Chiama la mutazione decrement dal tuo store Vuex
    },
    async aggiornaCampo() {
      console.warn(this.campo)

      // Verifica se i campi sono stati modificati rispetto ai valori iniziali
      const campiModificati =
        this.campo.name !== this.campiIniziali.name ||
        this.campo.address !== this.campiIniziali.address ||
        this.campo.contact !== this.campiIniziali.contact ||
        this.campo.city !== this.campiIniziali.city

      if (!campiModificati) {
        // Nessuna modifica ai campi
        return
      }

      try {
        let user = localStorage.getItem('user-info')
        let userID = JSON.parse(user).id
        const result = await axios.put(
          'http://localhost:3000/tennisField/' + this.$route.params.id,
          {
            name: this.campo.name,
            address: this.campo.address,
            contact: this.campo.contact,
            city: this.campo.city,
            user_id: userID
          }
        )
        if (result.status == 200) {
          // Mostra l'alert solo se ci sono state modifiche
          this.showAlert = true
          // Aggiorna i valori iniziali con i nuovi valori
          this.campiIniziali = { ...this.campo }
        } else {
          alert('Si è verificato un errore durante la modifica del campo.')
        }
        console.warn('result', result)
      } catch (error) {
        console.error('Errore durante la richiesta:', error)
        alert('Si è verificato un errore durante la modifica del campo.')
      }
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
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    const result = await axios.get('http://localhost:3000/tennisField/' + this.$route.params.id)
    console.warn(result.data)
    this.campo = result.data
    // Salva i valori iniziali dei campi
    this.campiIniziali = { ...this.campo }
  },
  hideAlert() {
    this.showAlert = false
  }
}
</script>
<style>
.custom-mb {
  margin-bottom: 160px !important;
}
</style>