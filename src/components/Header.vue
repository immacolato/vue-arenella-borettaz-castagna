<template>
    <nav class="navbar navbar-dark bg-success shadow">
        <a class="navbar-brand home rounded ms-5" href="#">Home</a>
        <a class="navbar-brand rounded" href="#">Aggiungi Campo</a>
        <a class="navbar-brand rounded" href="#">Modifica Campo</a>
        <a class="navbar-brand exit rounded me-5" href="#">Esci</a>
    </nav>
</template>

<script>
export default {
    name: "SiteHeader"
}
</script>

<style>
.navbar-brand {
    transition: background-color 0.3s, color 0.3s, transform 0.3s, padding 0.3s;
    /* Aggiungi una transizione fluida */
}

.navbar-brand:hover {
    background-color: darkslategray;
    /* Cambia il colore di sfondo quando si fa hover */
    color: #fff;
    /* Cambia il colore del testo quando si fa hover */
    transform: scale(1.1);
    /* Aumenta la dimensione del riquadro */
    padding: 16px 24px;
    /* Aumenta il padding per allargare il riquadro */
}

.home:hover {
    background-color: #fff;
    color: #008919;
    transform: scale(1.1);
    padding: 16px 24px;
}

.exit:hover {
    background-color: rgb(199, 0, 0);
    color: #fff;
    transform: scale(1.1);
    padding: 16px 24px;
}
</style>