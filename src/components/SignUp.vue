<template>
  <div class="register">
    <img class="logo" src="../assets/logoTennis.png" />
    <h1>TENNIS HUB</h1>
    <h2>Sign Up</h2>
    <input type="text" placeholder="enter name" />
    <input type="text" placeholder="enter email" />
    <input type="password" placeholder="enter password" />
    <button>Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style>
.logo {
  width: 100px;
}

.register {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid green;
  background: lightgreen;
  cursor: pointer;
}
</style>
