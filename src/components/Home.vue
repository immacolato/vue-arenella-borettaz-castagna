<template>
    <h1 class="text-center mt-5">Ciao Utente, benvenuta/o in Tennis Hub</h1>
</template>
    
<script>
export default {
    name: "HomePage",
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user)
            this.$router.push({ name: 'SignUp' })
    }
}
</script>