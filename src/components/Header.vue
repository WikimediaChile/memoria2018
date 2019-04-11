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
        titulo: "",
        subtitulo: "",
        bajada: "",
        headerClass: ""
      }
    };
  },
  watch: {
    $route: "update"
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      switch (this.$route.path) {
        case "/":
          this.elements = {
            headerClass: ["inicio", "gray"],
            titulo: "Wikimedia Chile",
            subtitulo: "Memoria 2018",
            bajada:
              "A continuación presentamos un resumen de las áreas de trabajo desarrolladas en el último año por Wikimedia Chile para difundir y crear nuevos espacios de conocimiento libre en nuestro país."
          };
          break;
        case "/educacion":
          this.elements = {
            headerClass: ["educacion", "gray"],
            titulo: "Educación",
            subtitulo: "Wikimedia Chile 2018",
            bajada:
              "Wikimedia Chile volcó sus esfuerzos en 2018 para lograr que más académicos y docentes utilicen los proyectos Wikimedia en las aulas."
          };
          break;
        case "/difusion":
          this.elements = {
            headerClass: ["difusion", "gray"],
            titulo: "Difusión",
            subtitulo: "Wikimedia Chile 2018",
            bajada: `En 2018, Wikimedia Chile concentró sus esfuerzos en atraer nuevas actividades con instituciones que desearon cooperar con las iniciativas de conocimiento libre.`
          };
          break;
        case "/gestion":
          this.elements = {
            headerClass: ["gestion", "gray"],
            titulo: "Gestión Corporativa",
            subtitulo: "Wikimedia Chile 2018",
            bajada: `En 2018 nos concentramos en la eficiencia de gastos y mejorar las relaciones con la Fundación Wikimedia, y el crecimiento organizacional.`
          };
          break;
      }
    }
  }
};
</script>

<style lang="css">
.overlayed::before {
  background-color: black;
}
.inicio::before {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Foto_grupal_Jornada_Wikimedia_Chile_2018.jpg/1280px-Foto_grupal_Jornada_Wikimedia_Chile_2018.jpg") !important;
}
.educacion::before {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Editat%C3%B3n_de_Escritores_Chilenos_2018_-_04.jpg/1266px-Editat%C3%B3n_de_Escritores_Chilenos_2018_-_04.jpg") !important;
}
.difusion::before {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Wiki_DDHH_Chile_2018_13.jpg/1280px-Wiki_DDHH_Chile_2018_13.jpg") !important;
}
.gestion::before {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Foto_grupal_Asamblea_general_ordinaria_de_socios_de_Wikimedia_Chile_2018.jpg/1024px-Foto_grupal_Asamblea_general_ordinaria_de_socios_de_Wikimedia_Chile_2018.jpg") !important;
}
.overlayed::before {
  content: "";
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
  filter: brightness(0.5) saturate(0.25) blur(2px) grayscale(95%);
}
</style>
