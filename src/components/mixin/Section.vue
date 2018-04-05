<template lang="html">
    <div>
    <section>
      <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">{{ elemento.titulo }}</h2>
              <hr class="my-4">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-lg-4 d-none d-lg-block" :class="{'order-12' : !!elemento.pull}">
                <app-stats v-for="metrica in metricas" :numero="metrica.numero" :metrica="metrica.metrica"></app-stats>
            </div>
          <div class="col-lg-8 col-md12 text-justify" :class="{'col-lg-12' : !!metricas == false}">
              <slot></slot>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0" v-if="!!images">
          <div class="container-fluid p-0">
            <div class="row no-gutters">
                <gallery :images="images" :index="index" @close="index = null" :id="'gallery_'+rand" :options="{container: '#gallery_'+rand}"></gallery>
                <div class="col-lg-4 col-sm-6"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                >
                <div class="portfolio-box">
                    <img :src="image.thumbnail" :alt="image.title">
                  <div class="portfolio-box-caption">
                    <div class="portfolio-box-caption-content">
                      <div class="project-category text-faded">

                      </div>
                      <div class="project-name">
                        {{ image.title }}
                      </div>
                    </div>
                  </div>
              </div>
                </div>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
import Stats from './Stats.vue';
import VueGallery from 'vue-gallery';
export default {
  props: ['elemento', 'metricas', 'images'],
  components: {
    AppStats: Stats,
    'gallery': VueGallery
  },
  data() {
    return {
      index: null,
      rand: Math.round(Math.random() * 1e6)
    }
  }

}
</script>

<style lang="css">
section {
    padding-bottom: 2rem!important;
}
.portfolio-box {
    height: 300px;overflow: hidden;align-items: center;display: flex
}
</style>
