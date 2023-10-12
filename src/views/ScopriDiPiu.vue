<template>
  <header class="text-center mb-5">
    <h1 class="mt-4">Scopri di più su TENNIS HUB</h1>

    <router-link to="/login"
      class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Torna
      indietro</router-link>


  </header>
  <div class="container">
    <div class="row">
      <div class="mx-auto col-md-6 col-sm-12">

        <p>
          Benvenuto su <b>Tennis Hub</b>, il miglior gestionale per i campi da tennis. Siamo qui per semplificare
          la gestione del tuo centro sportivo, offrendoti una soluzione completa e intuitiva.
        </p>
        <p>
          Con Tennis Hub, potrai gestire prenotazioni, orari, membri del club e molto altro, tutto in modo
          completamente gratuito. Offriamo un sistema flessibile che si adatta alle tue esigenze specifiche,
          indipendentemente dalle dimensioni della struttura che gestisci. Tennis Hub è la soluzione perfetta per te.
        </p>
        <p>
          La nostra piattaforma è stata progettata con l'obiettivo di semplificare al massimo la tua esperienza. Con
          un'interfaccia intuitiva e facile da usare, non
          dovrai preoccuparti di complicati tutorial o formazione. Sarai in grado di iniziare a sfruttare tutte le
          potenzialità di Tennis Hub sin dal primo giorno.
        </p>
        <p>
          Ecco alcune delle caratteristiche salienti di Tennis Hub:
        </p>
        <ul>
          <li>Aggiungere campi</li>
          <li>Modificare i campi (nome, indirizzo e contatto)</li>
          <li>Eliminare campi</li>
        </ul>
        <p>
          Inoltre, il nostro team di supporto è sempre a disposizione per rispondere alle tue domande e offrirti
          assistenza personalizzata.
          La tua attività per il tennis merita il miglior supporto possibile, ed è esattamente ciò che offriamo con Tennis
          Hub.
        </p>
        <p style="font-weight: bolder;">
          Unisciti a noi oggi stesso e scopri come Tennis Hub può trasformare la gestione del tuo centro sportivo,
          liberandoti dallo stress e
          permettendoti di concentrarti su ciò che ami di più: il tennis.
        </p>
        <router-link to="/sign-up"
          class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Entra a far parte
          di TennisHub!</router-link>
      </div>
      <div class="col-md-5 mt-3 d-md-block">
        <div class="card mx-auto mb-3" style="width: 20rem">
          <img src="..//assets/mockup smartphone.png" alt="Interfaccia mobile di TennisHub"
            title="Interfaccia mobile di TennisHub" class="rounded card-img-top" />
        </div>
        <div class="card mx-auto mb-5" style="width: 20rem">
          <img src="..//assets/mockup pc.png" alt="Interfaccia di TennisHub" title="Interfaccia desktop di TennisHub"
            class="rounded card-img-top" />
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
export default {
  name: "ScopriDiPiu",
};
</script>
