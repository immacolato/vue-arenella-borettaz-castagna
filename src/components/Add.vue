<template>
    <SiteHeader />
    <h1 class="text-center mt-5">Ciao Utente, benvenuta/o nella pagina di aggiunta campi</h1>
    <form>
      <input type="text" name="name" placeholder="Inserisci il nome" v-model="campo.name"/>
      <input type="text" name="address" placeholder="Inserisci l'indirizzo" v-model="campo.address"/>
      <input type="text" name="contact" placeholder="Inserisci il contatto" v-model="campo.contact"/>  
      <button type="button" v-on:click="addCampo">Aggiungi un nuovo campo</button>    
    </form>
</template>
    
<script>
import SiteHeader from "./Header.vue"
export default {
    name: "AddPage",
    components: {
        SiteHeader
    },
    data()
    {
        return {
            campo: {
                name:'',
                address:'',
                contact:''
            }
        }
    },
methods:{
        addCampo()
        {
            console.warn(this.campo)
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user)
            this.$router.push({ name: 'SignUp' })
    }
}
</script>