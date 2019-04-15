<template lang="html">
    <div>

        <app-section :elemento="data.u" :metricas="data.u.metricas" :images="data.u.imagenes">
            <p>
                Para 2018, Wikimedia Chile consolidó su modelo de acompañamiento a los profesores universitarios en sus cátedras para los estudiantes pudieran crear y mejorar contenidos en Wikipedia y Wikimedia Commons. El programa <b>Wikipedia en Universidad</b> ha trabajado con profesores de la Universidad Alberto Hurtado, Universidad Tecnológica Metropolitana, Pontificia Universidad Católica de Chile, Universidad del Desarrollo, Universidad de Chile e Inacap.
            </p>
            <p>
                En este modelo de cooperación, los académicos se muestran satisfechos por los logros que consiguen sus estudiantes, debido a que entregan más valor a la producción literaria, permite discriminar activamente las fuentes de datos y abordar, desde una mirada más integral, las fuentes de información que se proponen en el mundo.
            </p>
            <p>
                Con este tipo de ejercicios, los estudiantes pueden cooperar activamente con el conocimiento libre, subiendo información inexistente en Wikipedia, contribuyendo con más imágenes o difundiendo contenido que antes no estaba disponible en Internet en forma gratuita para la comunidad chilena y mundial.
            </p>
        </app-section>

        <app-section :elemento="data.wikipuentes">
            <p>
                En 2018 implementamos dos versiones de Wikipuentes, donde se invitaron a los profesores a participar de un portal a distancia para la capacitación en el uso de herramientas Wikimedia en sus proyectos educativos locales. En ambas versiones contamos con el apoyo de Vania Barrueto, profesora de la Universidad Católica de Chile, quien asistió a los profesores que tomaron el curso. En total, 18 docentes participaron en ambas versiones del campus virtual.
            </p>
            <p>
                Como parte de la evaluación del proyecto, la importación de contenidos que se hizo de la iniciativa argentina es buena, pero no se adaptó a la realidad de los docentes chilenos, por lo cual durante 2019 se trabajará en adaptar los formatos y contenidos para que el material sea más claro y preciso para las personas que participen en los cursos a distancia.
            </p>
        </app-section>

        <app-section :elemento="data.videotutoriales" :metricas="data.videotutoriales.metricas">
            <p>
                Para mejorar la información de capacitación, durante el año 2018, se produjeron una <a href="http://youtube.wikimedia.cl" target="_blank">serie de videos</a> que contribuyen como refuerzo de aprendizaje a estudiantes y personas que deseen contribuir en Wikipedia. Los materiales, subidos a Wikimedia Commons, se han difundido a los diversos países de habla hispana a través de la red Iberocoop, y han formado parte en algunas publicaciones en redes sociales, para concientizar el cuidado que se debe tener con Wikipedia.
            </p>
        </app-section>
    </div>
</template>

<script>
import Section from "./mixin/Section";
import data from "../data/educacion.json";
export default {
  components: {
    AppSection: Section
  },
  data() {
    return {
      data
    };
  }
};
</script>
