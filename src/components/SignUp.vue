<template>
  <div class="container">
    <div class="text-center">
      <img class="logo" src="../assets/logoTennis.png" alt="Tennis Logo" />
      <h1 class="mt-4">TENNIS HUB</h1>
      <h2 class="mt-4">Iscriviti</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form class="d-flex flex-column align-items-center">
          <div class="mb-3 mt-1 form-group">
            <input type="text" class="form-control custom-rounded" id="nome" placeholder="Nome">
          </div>
          <div class="mb-3 form-group">
            <input type="email" class="form-control custom-rounded" id="mail" placeholder="Email">
          </div>
          <div class="mb-3 form-group">
            <input type="password" class="form-control custom-rounded" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-custom">Iscriviti!</button>
        </form>
      </div>
    </div>
  </div>
</template>


<style>
.logo {
  width: 100px;
}

.form-group {
  margin-bottom: 20px;
}

.custom-rounded {
  border-radius: 8px;
}

.btn-custom {
  background-color: #006907;
  border-color: #006907;
  color: #fff;
  width: 160px;
  height: 32px;
  border-radius: 16px;
}

.btn-custom:hover {
  background-color: #FF6600;
  border-color: #FF6600;
}
</style>
