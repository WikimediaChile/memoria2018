<template lang="html">
    <div>
        <app-section :elemento="data.reportes">
        <p>
          Durante 2018 se <a href="https://meta.wikimedia.org/wiki/Grants:Simple/Applications/Wikimedia_Chile/2017-2018#Final_report" target="_blank">realizó al rendición de fondos del segundo semestre de 2017</a>, siendo aprobado por la Fundación Wikimedia el 28 de marzo de 2018. El reporte incluyó las tareas de normalización del capítulos, producción de materiales y otros elementos que permitieron el funcionamiento del capítulo hasta el 28 de febrero de 2018.
        </p>

        <p>
          Para la <a href="https://meta.wikimedia.org/wiki/Grants:Simple/Applications/Wikimedia_Chile/2018" target="_blank"> solicitud de fondos de 2018</a>, se presentó como programa de trabajo un <a href="https://meta.wikimedia.org/wiki/Wikimedia_Chile/Plan_2018" target="_blank">plan de trabajo anual</a> que permitió expandir la cantidad y calidad de las actividades de difusión, apoyo en generación de contenidos locales y organización interna. Así mismo, se apuntó la necesidad de externalizar servicios administrativos y actividades que no pueden ser desempañadas por voluntarios, con el fin de contar con horas pagadas para dichas tareas.
        </p>

        <p>
          El plan anual 2018 fue aceptado por la Fundación Wikimedia y financiado hasta el 31 de diciembre de 2018, y se encuentra en ejecución hasta dicha fecha.
        </p>
        </app-section>

        <app-section :elemento="data.wikimedia">
          <p>
            Wikimedia Chile participó en diversos encuentros e instancias de cooperación con otros grupos afiliados del movimiento Wikimedia a nivel latinoamericano y mundial.
          </p>

          <p>
            En <a href="https://meta.wikimedia.org/wiki/Wikimedia_Conference_2018" target="_blank">Wikimedia Conference 2018</a>, desarrollada en Berlín, Alemania, participaron Marco Correa y Osmar Valdebenito, quienes aportaron en las discusiones finales de la Estrategia 2030, donde se hizo un repaso de las conclusiones que tuvieron la fase I de la consulta al movimiento.
          </p>

          <p>
            En mayo, participamos en la <a href="https://www.mediawiki.org/wiki/Wikimedia_Hackathon_2018" target="_blank">Wikimedia Hackathon</a>, desarrollada en Barcelona, España. En la instancia, Dennis Tobar compartió experiencias, herramientas y nuevos desarrollos con la comunidad en español, estrechando lazos con voluntarios de Wikimedia Argentina, Wikimedia España y Amical.
          </p>

          <p>
            En julio, se desarrolló la <a href="https://wikimania2018.wikimedia.org/wiki/Wikimania" target="_blank">versión 2018 de Wikimania</a> en la Ciudad del Cabo, Sudáfrica. En la instancia participaron Osmar Valdebenito, Marco Correa y Carlos Figueroa. El encuentro, desarrollado por segunda vez en un país africano, se centró en la generación del conocimiento a partir del Sur Global y la visión africana acerca del movimiento Wikimedia. En la reunión de Iberocoop de esta conferencia, se elige a Wikimedia Chile como próximo organizador de la conferencia regional de Iberocoop, Iberoconf.
          </p>
          <p>
            En noviembre, Carlos Figueroa participó en el <a href="https://meta.wikimedia.org/wiki/GLAMTLV2018/Welcome" target="_blank">encuentro GLAM Wiki</a> en Tel Aviv, Israel. El encuentro, que congregó a especialistas del área de conservación, digitalización y difusión de contenidos en bibliotecas, galerías, museos y archivos, se vio marcado por la urgencia en la preservación de objetos de valor patrimonial tras el incendio en el Museo Nacional de Brasil en Río de Janeiro.
          </p>
        </app-section>
        <app-section :elemento="data.convenios">
          <p>
            Durante 2018, Wikimedia Chile estrechó lazos de cooperación con instituciones del ámbito académico y patrimonial.
          </p>

          <p>
            Durante la visita al Museo Regional del Aysén, se firmó un convenio de cooperación con dicha institución, con el fin de desarrollar nuevas actividades en conjunto con el museo, apoyar la creación y difusión de materiales locales en los proyectos Wikimedia.
          </p>

          <p>
            En julio, durante la visita de Katherine Maher, Directora Ejecutiva de la Fundación Wikimedia, se firmó un convenio de cooperación para actividades con el Museo de la Memoria y los Derechos Humanos, donde se incluyen capacitaciones al personal, editatones a futuro y otras actividades de interés común.
          </p>
        </app-section>
        <app-section :elemento="data.staff" :images="data.staff.imagenes">
          <p>
            Para colaborar con el desarrollo de Wikipuentes, se realizó un llamado a cubrir el rol de difusión de la iniciativa, resultando en la incorporación como contratista de Vania Barrueto, quien colaboró en ambas ediciones semestrales de Wikipuentes en 2018.
          </p>

          <p>
            A inicios de septiembre se desarrolló la convocatoria y contratación del rol de Coordinación de Actividades, cargo que fue completado con la incorporación de Patricia Díaz-Rubio, quien se encuentra trabajando medio tiempo hasta el 31 de diciembre de 2018.
          </p>

          <p>
            Ambos roles fueron financiados íntegramente con dineros de la solicitud de fondos de 2018, y con ellos se expandieron las capacidades de asistencia a reuniones, realización de trámites pendientes y coordinación para el desarrollo de eventos, además otras cuestiones propias de Wikimedia Chile.
          </p>
        </app-section>
    </div>
</template>

<script>
import Section from "./mixin/Section";
import data from "../data/gestion.json";
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
