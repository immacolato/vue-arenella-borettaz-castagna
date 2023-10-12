<!-- Footer.vue -->

<template>
  <div class="fixed-bottom">
    <footer class="text-center text-lg-start bg-success">
      <div class="container py-3">
        <div class="row justify-content-center align-items-center mail-support">
          <div class="col-lg-12">
            <a href="mailto:assistenza@tennishub.com" class="text-white d-flex flex-column align-items-center">
              <font-awesome-icon :icon="['far', 'envelope']" size="2xl" />
              Contatta la nostra assistenza
            </a>
          </div>
        </div>
      </div>
      <div class="text-center text-white p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        <h5>© 2023 Copyright: Arenella - Borettaz - Castagna</h5>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style>
.mail-support a {
  transition:
    transform 0.3s,
    padding 0.3s;
}

.mail-support a:hover {
  transform: scale(1.2);
}

.mail-support a:not(:hover) {
  transition:
    transform 0.3s,
    padding 0.3s;
}

.mail-support a:not(:hover):hover {
  transform: scale(1);
}
</style>
