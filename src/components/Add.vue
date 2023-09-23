<template>
  <div>
    <SiteHeader />
    <h1 class="text-center mt-5">Ciao {{ name }}, benvenuta/o nella pagina di aggiunta campi</h1>

    <!-- Alert personalizzato Bootstrap -->
    <div v-if="showAlert" class="text-center alert alert-success alert-dismissible" role="alert">
      <strong>Messaggio:</strong> Campo aggiunto con successo!
      <button type="button" class="close rounded btn btn-sm btn-outline-dark ms-3" @click="showAlert = false"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>


    <div class="mt-5 container" style="max-width: 678px; margin: 0 auto">
      <form class="row g-3">
        <input class="form-control" type="text" name="name" placeholder="Inserisci il nome del campo"
          v-model="campo.name" />
        <input class="form-control" type="text" name="contact" placeholder="Inserisci contatto" v-model="campo.contact" />
        <input class="form-control" type="text" name="address" placeholder="Inserisci l'indirizzo del campo"
          v-model="campo.address" />
        <button class="mt-3 btn btn-success shadow-sm" type="button" @click="addCampo"
          style="max-width: 420px; margin: 0 auto">
          Aggiungi nuovo campo
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import SiteHeader from './Header.vue'
import axios from 'axios'

export default {
  name: 'AddPage',
  components: {
    SiteHeader
  },
  data() {
    return {
      campo: {
        name: '',
        address: '',
        contact: ''
      },
      name: '',
      showAlert: false
    };
  },
  methods: {
    async addCampo() {
      console.warn(this.campo);
      try {
        const result = await axios.post('http://localhost:3000/tennisField', {
          name: this.campo.name,
          address: this.campo.address,
          contact: this.campo.contact
        });
        if (result.status == 201) {
          // Mostra l'alert
          this.showAlert = true;
          // Nascondi l'alert automaticamente dopo 3 secondi
          setTimeout(this.hideAlert, 3000);

          // Svuota il form
          this.campo.name = '';
          this.campo.address = '';
          this.campo.contact = '';

        } else {
          alert('Si è verificato un errore durante l\'aggiunta del campo.');
        }
        console.warn('result', result);
      } catch (error) {
        console.error('Errore durante la richiesta:', error);
        alert('Si è verificato un errore durante l\'aggiunta del campo.');
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user)[0].name //[0] aggiunto perchè nel db gli utenti sono dentro un array e non un oggetto
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  },
  hideAlert() {
    this.showAlert = false;
  }
}
</script>
