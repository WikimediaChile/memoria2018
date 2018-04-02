<template lang="html">
    <div>

        <app-section :elemento="data.u" :metricas="data.u.metricas" :images="data.u.imagenes">
            <p>
            Desarrollamos por quinto año consecutivo el proyecto <a href="https://es.wikipedia.org/wiki/Wikipedia:Wikimedia_Chile/Wikipedia_en_la_Universidad" target="_blank">Wikipedia en la Universidad</a>,
            donde se generan instancias de colaboración
            con profesores de cátedras universitarias para fomentar la edición y utilización de contenidos en Wikipedia y Wikimedia Commons por los alumnos y alumnas.
            </p>
            <p>
            El trabajo desarrollado con los estudiantes de las cátedras universitarias consiste fundamentalmente en
            impartir un taller de edición inicial, donde se explican los pilares y metodología de edición en Wikipedia,
            para luego realizar un acompañamiento a los estudiantes y profesores en la creación y mejoramiento de los
            artículos propuestos para la clase.
            </p>
            <p>
                En 2017 se desarrollaron actividades en la <b>Universidad Alberto Hurtado</b> (UAH),
                con el profesor Enzo Abbagliati (cuyo curso participó por tercer año consecutivo en el proyecto);
                en la <b>Universidad Tecnológica Metropolitana</b> (UTEM), con los profesores Guillermo Toro y Héctor Gómez;
                y en la <b>Universidad de Playa Ancha</b> (UPLA) e <b>Inacap</b>, nacidas a partir de la iniciativa de los profesores
                Edgardo Figueroa y Sergio Pérez.
            </p>
            <p>
                En total, Wikimedia Chile pudo desarrollar 4 talleres con más de 100 estudiantes capacitados, quienes crearon y mejoraron 63 artículos en total. La evaluación de este programa por parte de los docentes en general es positiva y también sobre el acompañamiento realizado a los estudiantes y a los mismos profesores.
            </p>
            <h3>Nuevo formato de colaboración</h3>
            <p>
                Las actividades en la UPLA e Inacap fueron inéditas, no solo porque se hizo uso del formato de editatón, que no suele ser utilizado dentro del programa de Educación, sino que también porque, al ser realizadas en carreras de traducción, se generaron artículos sobre Valparaíso para la Wikipedia en inglés, siendo la primera vez que nuestras actividades presenciales involucran idiomas que no sean el español. Así mismo, la actividad realizada en la UPLA contó con una charla sobre Wikimedia dictada íntegramente en inglés, ante alumnos y profesores en el aula magna de dicha casa de estudios.
            </p>
            <h3>#1lib1ref</h3>
            <p>Así mismo, una de las actividades realizadas en la UTEM consistió en un taller incluido dentro de la <a href="https://meta.wikimedia.org/wiki/The_Wikipedia_Library/1Lib1Ref/es" target="_blank">iniciativa global “1 Lib 1 Ref”</a> (1 Bibliotecario, 1 Referencia), que, como su nombre lo indica, tiene como objetivo añadir referencias a los artículos que carecen de las mismas en Wikipedia en español. Dicha actividad contó con la participación de 25 estudiantes y se mejoraron igual cantidad de artículos. Este ejercicio permitió que los alumnos pudieran ejercitar la metodología de referencias, en especial mediante el uso de catálogos y revistas indexadas, cuya aplicación en Wikipedia  se ve facilitada por el uso del Editor Visual.
            </p>
        </app-section>

        <app-section :elemento="data.wikipuentes">
            <p>
                A fines de 2017 se adoptó la decisión de implementar una versión local del <a href="http://wikimedia.org.ar/wikipuentes/" target="_blank">proyecto educativo Wikipuentes</a>, desarrollado e implementado por <a href="http://wikimedia.org.ar/" target="_blank">Wikimedia Argentina</a>, que consiste en un curso masivo en línea destinado a docentes de educación básica y media. El capítulo argentino nos ha facilitado el material de formación docente de Wikipuentes, que se enfoca en el uso de contenidos de Wikipedia en las salas de clases.
            </p>
            <p>
                Dentro de las actividades de preparación del proyecto ejecutadas durante 2017 están la adaptación de algunos contenidos al contexto chileno, cambios de estilo y el desarrollo de pruebas piloto con profesores invitados, quienes han brindado la necesaria retroalimentación acerca del portal. Se espera que el curso esté disponible para su primera edición nacional durante el primer semestre de 2018.
            </p>
        </app-section>
    </div>
</template>

<script>
import Section from './mixin/Section'
import data from '../data/educacion.json'
export default {
  components: {
    AppSection: Section
  },
  data() {
    return {
      data
    }
  }

}
</script>
