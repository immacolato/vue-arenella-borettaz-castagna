<template>
    <SiteHeader />
    <h1 class="text-center mt-5">Ciao {{ name }}, benvenuta/o nella pagina di modifica dei campi</h1>
    <div class="mt-5 container" style="max-width: 678px; margin: 0 auto">
    <form class="row g-3">
      <input class="form-control" type="text" name="name" placeholder="Inserisci il nome del campo"
        v-model="campo.name" />
      <input class="form-control" type="text" name="contact" placeholder="Inserisci contatto" v-model="campo.contact" />
      <input class="form-control" type="text" name="address" placeholder="Inserisci l'indirizzo del campo"
        v-model="campo.address" />
      <button class="mt-3 btn btn-success shadow-sm" type="button" v-on:click="addCampo"
        style="max-width: 420px; margin: 0 auto">
        Modifica campo
      </button>
    </form>
  </div>
</template>
    
<script>
import SiteHeader from "./Header.vue"
export default {
    name: "UpdatePage",
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
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user)
            this.$router.push({ name: 'SignUp' })
    }
}
</script>