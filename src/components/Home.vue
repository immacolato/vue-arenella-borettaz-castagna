<template>
    <SiteHeader />
    <h1 class="text-center mt-5">Ciao {{ name }}, benvenuta/o in Tennis Hub</h1>
</template>
    
<script>
import SiteHeader from "./Header.vue"
export default {
    name: "HomePage",
    data() {
        return {
            name: ''
        }
    },
    components: {
        SiteHeader
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user)[0].name;
        if (!user)
            this.$router.push({ name: 'SignUp' })
    }
}
</script>