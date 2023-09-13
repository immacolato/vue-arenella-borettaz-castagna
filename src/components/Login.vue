<template>
    <div class="container">
        <div class="text-center">
            <img class="logo mt-2" src="../assets/logoTennis.png" alt="Tennis Logo" />
            <h1 class="mt-2">TENNIS HUB</h1>
            <h6 class="text-body-secondary">Il gestionale per i tuoi campi da tennis!</h6>
            <h2 class="mt-5">Effettua l'accesso:</h2>
        </div>
        <div>
            <div class="register col-md-6 mx-auto bg-success text-white rounded shadow-lg"
                style="max-width: 420px; margin: 0 auto;">
                <div class="d-flex flex-column" style="max-width: 320px; margin: 0 auto;">
                    <div class="mb-3 mt-3">
                        <label for="mail">Inserisci la tua mail</label>
                        <input type="email" v-model="email" class="form-control" id="mail" placeholder="e-mail">
                    </div>
                    <div class="mb-3">
                        <label for="password">Inserisci la tua password</label>
                        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button v-on:click="login" class="mt-3 btn btn-dark shadow-sm">Accedi</button>
                    <p class="text-center mt-4">
                        <router-link to="/sign-up" class="text-light">Sei nuovo? Iscriviti!</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'HomePage' })
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user)
            this.$router.push({ name: 'HomePage' })
    }
}
</script>