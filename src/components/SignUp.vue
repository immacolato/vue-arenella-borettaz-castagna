<template>
  <div class="container">
    <div class="text-center">
      <img class="logo mt-5" src="../assets/logoTennis.png" alt="Tennis Logo" />
      <h1 class="mt-2">TENNIS HUB</h1>
      <h6 class="text-body-secondary">Il gestionale per i tuoi campi da tennis!</h6>
      <h2 class="mt-5">Iscriviti:</h2>
    </div>
    <div>
      <div class="col-md-6 mx-auto">
        <form class="d-flex flex-column" style="max-width: 400px; margin: 0 auto;">
          <div class="mb-3">
            <label for="nome">Inserisci il tuo nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Nome">
          </div>
          <div class="mb-3">
            <label for="mail">Inserisci la tua mail</label>
            <input type="email" class="form-control" id="mail" placeholder="e-mail">
          </div>
          <div class="mb-3">
            <label for="password">Inserisci la tua password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-success">Iscriviti!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  width: 100px;
}
</style>