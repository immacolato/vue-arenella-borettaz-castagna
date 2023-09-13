<template>
    <SiteHeader />
    <h1 class="text-center mt-5">Ciao Utente, benvenuta/o in Tennis Hub</h1>
</template>
    
<script>
import SiteHeader from "./Header.vue"
export default {
    name: "HomePage",
    components: {
        SiteHeader
    },
mounted() {
        let user = localStorage.getItem('user-info');
        if (!user)
            this.$router.push({ name: 'SignUp' })
    }
}
</script>