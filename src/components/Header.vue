<template lang="html">
<div>
  <header class="masthead text-center text-white d-flex overlayed" :class="elements.headerClass" id="head">
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-uppercase">
              <strong>{{ elements.titulo }}</strong>
            </h1>
          <h3>
                {{ elements.subtitulo }}
            </h3>
          <hr>
        </div>
        <div class="col-lg-8 mx-auto">
          <p class="mb-5">{{ elements.bajada }}</p>
        </div>
      </div>
    </div>
  </header>
</div>
</template>

<script>
export default {
  data() {
    return {
      elements: {
        titulo: '',
        subtitulo: '',
        bajada: '',
        headerClass: ''
      }
    }
  },
  watch: {
    '$route': 'update'
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      switch (this.$route.path) {
        case '/':
          this.elements = {
            headerClass: ['inicio', 'sepia'],
            titulo: 'Wikimedia Chile',
            subtitulo: 'Memoria 2017',
            bajada: 'A continuación presentamos un resumen de las áreas de trabajo desarrolladas en el último año por Wikimedia Chile para difundir y crear nuevos espacios de conocimiento libre en nuestro país.',
          }
          break;
        case '/educacion':
          this.elements = {
            headerClass: ['educacion', 'gray'],
            titulo: 'Educación',
            subtitulo: 'Wikimedia Chile 2017',
            bajada: 'Wikimedia Chile cooperó con universidades para llegar a los docentes y estudiantes que colaboraron activamente en los proyectos de la Fundación Wikimedia.'
          }
          break;
        case '/difusion':
          this.elements = {
            headerClass: ['difusion', 'gray'],
            titulo: 'Difusión',
            subtitulo: 'Wikimedia Chile 2017',
            bajada: `En el área de difusión, realizamos diversas actividades para dar a conocer los proyectos y la corporación en instancias de participación con profesores, activistas y público en general.`

          }
          break;
        case '/gestion':
          this.elements = {
            headerClass: ['gestion', 'gray'],
            titulo: 'Gestión Corporativa',
            subtitulo: 'Wikimedia Chile 2017',
            bajada: `El año 2017 marcó un cambio de directivos en la Asamblea General de Socios celebrada en abril y el avance en las materias de reportes y solicitudes de fondos`
          }
          break;
      }
    }
  }

}
</script>

<style lang="css">
.overlayed::before {
    background-color: black;
}
.inicio::before {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Santiago_landscape.jpg/1024px-Santiago_landscape.jpg')!important;
}
.educacion::before{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Taller_de_edici%C3%B3n_en_UTEM_-_07.jpg/1280px-Taller_de_edici%C3%B3n_en_UTEM_-_07.jpg')!important;
}
.difusion::before{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Editat%C3%B3n_de_Mujeres_Artistas_-_Taller_de_edici%C3%B3n_1_-_08.jpg/1024px-Editat%C3%B3n_de_Mujeres_Artistas_-_Taller_de_edici%C3%B3n_1_-_08.jpg')!important;
}
.gestion::before{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Asamblea_constitutiva_de_Wikimedia_Chile_2.jpg/1024px-Asamblea_constitutiva_de_Wikimedia_Chile_2.jpg')!important;
}
.overlayed::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(1px);
  z-index: -1;
  background-size: cover;
  width: inherit;
}

.sepia::before {
    filter: sepia(33%) blur(2px);
}

.gray::before {
    filter: brightness(0.5) saturate(.25) blur(2px) grayscale(95%);
}

</style>
