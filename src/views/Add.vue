<template>
  <div style="margin-bottom: 240px">
    <SiteHeader />
    <h1 class="text-center mt-5">
      Ciao {{ name }}, benvenuta/o nella pagina di aggiunta strutture
    </h1>

    <!-- Alert personalizzato Bootstrap -->
    <div v-if="showAlert" class="text-center alert alert-success alert-dismissible" role="alert">
      <strong>Messaggio:</strong> Struttura aggiunto con successo!
      <button
        type="button"
        class="close rounded btn btn-sm btn-outline-dark ms-3"
        @click="showAlert = false"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div
      v-if="showEmptyFieldsAlert"
      class="text-center alert alert-danger alert-dismissible"
      role="alert"
    >
      <strong>Errore:</strong> Assicurati di compilare tutti i campi prima di aggiungere la tua
      struttura!
      <button
        type="button"
        class="close rounded btn btn-sm btn-outline-dark ms-3"
        @click="showEmptyFieldsAlert = false"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="mt-5 container row align-items-center" style="max-width: 678px; margin: 0 auto">
      <form class="row g-2">
        <h5 class="mt-2">Nome struttura:</h5>
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Inserisci il nome della struttura..."
          v-model="campo.name"
        />
        <h5 class="mt-3">Contatto:</h5>
        <input
          class="form-control"
          type="tel"
          name="contact"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Inserisci contatto..."
          v-model="campo.contact"
        />
        <h5 class="mt-3">Indirizzo:</h5>
        <input
          class="form-control"
          type="text"
          name="address"
          placeholder="Inserisci l'indirizzo della struttura..."
          v-model="campo.address"
        />
        <h5 class="mt-3">Città:</h5>
        <input
          class="form-control"
          type="text"
          name="city"
          placeholder="Inserisci la città..."
          v-model="campo.city"
        />
        <div class="row">
          <div class="col-6">
            <h5 class="mt-3">Disponibilità:</h5>
            <div>
              <button class="btn btn-dark rounded" type="button" @click="incrementAvailableFields">
                +1
              </button>
              <button
                class="btn btn-dark mx-3 rounded"
                type="button"
                @click="decrementAvailableFields"
              >
                -1
              </button>
            </div>
          </div>
          <div class="col-6 d-flex justify-content-end align-items-center">
            <div class="">
              <h5>Attualmente disponibili: {{ availableFields }}</h5>
            </div>
          </div>
        </div>
        <button
          class="mt-4 btn btn-success shadow-sm"
          type="button"
          @click="addCampo"
          style="max-width: 420px; margin: 0 auto"
        >
          Aggiungi nuova struttura
        </button>
      </form>
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
  name: 'AddPage',
  components: {
    SiteHeader,
    SiteFooter
  },
  computed: {
    // Mappa lo stato Vuex `count` al tuo componente
    ...mapState(['count']),
    // Mappa lo stato Vuex `availableFields` al tuo componente
    ...mapState(['availableFields'])
  },
  data() {
    return {
      campo: {
        name: '',
        address: '',
        contact: '',
        city: '',
        availableFields: '',
        user_id: ''
      },
      name: '',
      showAlert: false,
      showEmptyFieldsAlert: false
    }
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
    validatePhoneNumber(phoneNumber) {
      var RE = /^[\d.-]+$/
      return RE.test(phoneNumber)
    },

    async addCampo() {
      console.warn(this.campo)
      // Controlla se uno dei campi è vuoto
      if (!this.campo.name || !this.campo.address || !this.campo.contact || !this.campo.city) {
        // Mostra l'alert per campi vuoti
        this.showEmptyFieldsAlert = true
        return // Esci dalla funzione senza inviare la richiesta
      }

      try {
        let user = localStorage.getItem('user-info')
        this.id = JSON.parse(user).id

        // validate phoneNumber
        if (!this.validatePhoneNumber(this.campo.contact)) {
          alert('Inserisci un numero di telefono valido')
          return
        }

        const result = await axios.post('http://localhost:3000/tennisField', {
          name: this.campo.name,
          address: this.campo.address,
          contact: this.campo.contact,
          city: this.campo.city,
          user_id: this.id
        })
        if (result.status == 201) {
          // Mostra l'alert
          this.showAlert = true
          // Nascondi l'alert automaticamente dopo 3 secondi
          setTimeout(this.hideAlert, 3000)

          // Svuota il form
          this.campo.name = ''
          this.campo.address = ''
          this.campo.contact = ''
          this.campo.city = ''
        } else {
          alert("Si è verificato un errore durante l'aggiunta del campo.")
        }
        console.warn('result', result)
      } catch (error) {
        console.error('Errore durante la richiesta:', error)
        alert("Si è verificato un errore durante l'aggiunta del campo.")
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name //[0] aggiunto perchè nel db gli utenti sono dentro un array e non un oggetto
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
  hideAlert() {
    this.showAlert = false
  }
}
</script>
