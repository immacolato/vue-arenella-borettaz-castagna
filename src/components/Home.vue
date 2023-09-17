<template>
  <SiteHeader />
  <h1 class="text-center mt-5">Ciao {{ name }}, benvenuta/o in Tennis Hub</h1>
  <table class="mt-5 table table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Contatti</th>
        <th scope="col">Indirizzo</th>
      </tr>
    </thead>
    <tbody class="table-group-divider"></tbody>
    <tr v-for="item in tennisField" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
import SiteHeader from './Header.vue'
import axios from 'axios'
export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      tennisField: []
    }
  },
  components: {
    SiteHeader
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    this.name = JSON.parse(user)[0].name
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    let result = await axios.get('http://localhost:3000/tennisField')
    console.warn(result)
    this.tennisField = result.data
  }
}
</script>
