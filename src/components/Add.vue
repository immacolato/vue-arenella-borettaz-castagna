<template>
  <SiteHeader />
  <h1 class="text-center mt-5">Ciao {{ name }}, benvenuta/o nella pagina di aggiunta campi</h1>
  <div class="mt-5 container" style="max-width: 678px; margin: 0 auto">
    <form class="row g-3">
      <input class="form-control" type="text" name="name" placeholder="Inserisci il nome del campo"
        v-model="campo.name" />
      <input class="form-control" type="text" name="contact" placeholder="Inserisci contatto" v-model="campo.contact" />
      <input class="form-control" type="text" name="address" placeholder="Inserisci l'indirizzo del campo"
        v-model="campo.address" />
      <button class="mt-3 btn btn-success shadow-sm" type="button" v-on:click="addCampo"
        style="max-width: 420px; margin: 0 auto">
        Aggiungi nuovo campo
      </button>
    </form>
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
      name: ''
    }
  },
  methods: {
    async addCampo() {
      console.warn(this.campo)
      const result = await axios.post('http://localhost:3000/tennisField', {
        name: this.campo.name,
        address: this.campo.address,
        contact: this.campo.contact
      })
      if (result.status == 201) {
        this.$router.push({ name: 'Home' })
      }
      console.warn('result', result)
    }
  },

  async mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user)[0].name //[0] aggiunto perchè nel db gli utenti sono dentro un array e non un oggetto
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>
