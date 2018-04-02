<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
      <div class="container">
          <router-link :to="{path: '/', hash: '#top'}" id="top" class="navbar-brand">Memoria 2017</router-link>
        <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="isOpen = !isOpen">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="navbar-collapse" id="navbarResponsive" :class="{collapse: isOpen}">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link :to="{path: '/', hash: 'presidente'}" class="nav-link" activeClass="active">Bienvenida</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/difusion" class="nav-link" activeClass="active">Difusión</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/educacion" class="nav-link" activeClass="active">Educación</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gestion" class="nav-link" activeClass="active">Gestión Corporativa</router-link>
            </li>
            <li class="nav-item">
              <a href="/static/memoria.pdf" class="nav-link btn btn-outline-light text-left" target="pdf">Descargar PDF</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  watch: {
      '$route': 'change'
  },
  methods: {
    change() {
      this.isOpen = !this.isOpen;
      return this.isOpen;
    }
  }
}
</script>

<style lang="css">
</style>
