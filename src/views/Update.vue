<template>
  <SiteHeader />
  <h1 class="text-center mt-5">Ciao {{ name }}, modifica il campo</h1>

  <div v-if="showAlert" class="text-center alert alert-success alert-dismissible" role="alert">
    <strong>Messaggio:</strong> Campo modificato con successo!
    <button type="button" class="close rounded btn btn-sm btn-outline-dark ms-3" @click="showAlert = false"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <div class="mt-5 container" style="max-width: 678px; margin: 0 auto; margin-bottom: 120px">
    <form class="row g-3">
      <input class="form-control" type="text" name="name" placeholder="Inserisci il nome del campo"
        v-model="campo.name" />
      <input class="form-control" type="text" name="contact" placeholder="Inserisci contatto" v-model="campo.contact" />
      <input class="form-control" type="text" name="address" placeholder="Inserisci l'indirizzo del campo"
        v-model="campo.address" />
      <button class="mt-3 custom-mb btn btn-success shadow-sm" type="button" v-on:click="aggiornaCampo"
        style="max-width: 420px; margin: 0 auto">
        Modifica campo
      </button>
    </form>
  </div>
  <SiteFooter />
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'UpdatePage',
  components: {
    SiteHeader,
    SiteFooter
  },
  data() {
    return {
      campo: {
        name: '',
        address: '',
        contact: ''
      },
      name: '',
      showAlert: false,
      campiIniziali: {} // Aggiungi un oggetto per i valori iniziali dei campi
    }
  },
  methods: {
    async aggiornaCampo() {
      console.warn(this.campo)

      // Verifica se i campi sono stati modificati rispetto ai valori iniziali
      const campiModificati =
        this.campo.name !== this.campiIniziali.name ||
        this.campo.address !== this.campiIniziali.address ||
        this.campo.contact !== this.campiIniziali.contact

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
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user).name //[0] aggiunto perchè nel db gli utenti sono dentro un array e non un oggetto
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
