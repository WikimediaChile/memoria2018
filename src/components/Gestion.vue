<template lang="html">
    <div>
        <app-section :elemento="data.cambios">
            El año 2017 estuvo marcado por el cambio en la composición del Directorio de nuestra Corporación, según decisión de la Asamblea General de Socios celebrada en abril. Este nuevo cuerpo directivo quedó conformado por Marco Correa Pérez, Rocío Consales, Osmar Valdebenito, Carlos Figueroa, Claudio Loader y Dennis Tobar, quienes asumieron sus cargos hasta abril de 2019.
        </app-section>

        <app-section :elemento="data.reportes">
            <p>Las tareas desarrolladas durante el primer semestre de 2017 corresponden a la finalizaci&oacute;n de los reportes de actividades de los a&ntilde;os anteriores, con el fin de dar cumplimiento a las obligaciones pendientes de la Corporaci&oacute;n, tanto con la institucionalidad nacional, como con la Fundaci&oacute;n Wikimedia. Para lograr esto, se trabaj&oacute; en el <a href="https://meta.wikimedia.org/wiki/Grants:PEG/WM_CL/2015_Projects_and_Activities/Report" target="cierre">cierre del proyecto de subvenci&oacute;n 2015</a>, que fue aprobado por la Fundaci&oacute;n Wikimedia el 27 de julio.</p>
            <p>Ello nos permiti&oacute; comenzar a desarrollar un trabajo institucional con el fin de desarrollar de nuevas actividades por parte de la Corporaci&oacute;n. Para lograr aquello, se <a href="https://meta.wikimedia.org/wiki/Wikimedia_Chile/Plan_de_trabajo_2017-2018" target="plan">dise&ntilde;&oacute; un plan de trabajo de nuestra Corporaci&oacute;n para el bienio 2017-2018</a>, consistente en una reorganizaci&oacute;n y revitalizaci&oacute;n del cap&iacute;tulo, la consolidaci&oacute;n del trabajo y el inicio del dise&ntilde;o de una estrategia para 2022. Los objetivos del plan 2017-2018 se desarrollar&aacute;n mediante cuatro pilares: fortalecimiento institucional, programas de Educaci&oacute;n, alianzas con instituciones culturales y participaci&oacute;n global, siguiendo dos principios como son la descentralizaci&oacute;n y diversidad e inclusi&oacute;n.</p>
            <p>En base a dicho plan se realiz&oacute; un cronograma de actividades para el segundo semestre de 2017, para las cuales se hizo una <a href="https://meta.wikimedia.org/wiki/Grants:Simple/Applications/Wikimedia_Chile/2017" target="2017">nueva solicitud de fondos a la Fundaci&oacute;n Wikimedia</a>, lo cual no ocurr&iacute;a desde 2015. Los proyectos para dicho periodo se centraron en la realizaci&oacute;n de concursos, mejoras en los programas de difusi&oacute;n (mediante la creaci&oacute;n de materiales de difusi&oacute;n y marketing) y la preparaci&oacute;n del proyecto educativo Wikipuentes para su ejecuci&oacute;n durante 2018.</p>
            <p>La solicitud de fondos fue aprobada por la Fundaci&oacute;n Wikimedia el 1 de septiembre, cuya ejecuci&oacute;n finalizar&aacute; el 28 de febrero de 2018. Dicha solicitud incluy&oacute; partidas presupuestarias para el funcionamiento de la Corporaci&oacute;n, producci&oacute;n de materiales propios de difusi&oacute;n y piezas audiovisuales para redes sociales, premios para los concursos y mejoras en el equipamiento fotogr&aacute;fico de nuestra organizaci&oacute;n. Se present&oacute; el <a href="https://meta.wikimedia.org/wiki/Grants:Simple/Applications/Wikimedia_Chile/2017#Midpoint_report" target="midreport">informe de avance</a> el pasado 21 de diciembre, donde la mayor&iacute;a de los proyectos presentaban avances dentro de lo esperado, recibiendo positivos comentarios por parte del equipo de la Fundaci&oacute;n Wikimedia. </p>
        </app-section>
        <app-section :elemento="data.wikimedia">
            <p>Wikimedia Chile particip&oacute; en encuentros e instancias de cooperaci&oacute;n con diversos actores del movimiento Wikimedia a nivel mundial. </p>
            <p>En la <a href="https://meta.wikimedia.org/wiki/Wikimedia_Conference_2017" target="_blank">Wikimedia Conference 2017</a>, desarrollada en Berl&iacute;n, Alemania, participaron Marco Correa, Eduardo Testart y Osmar Valdebenito. En el encuentro se realiz&oacute; una ronda del proceso de Estrategia 2030 del movimiento Wikimedia, se establecieron los contactos con cap&iacute;tulos del mundo &aacute;rabe para realizar un concurso de edici&oacute;n (m&aacute;s tarde llamado Puentes entre Culturas) y se afinaron los detalles finales de Iberoconf 2017.</p>
            <p><a href="https://meta.wikimedia.org/wiki/Iberocoop:Iberoconf_2017" target="_blank">Iberoconf 2017</a> fue una reuni&oacute;n desarrollada en Buenos Aires, Argentina, que cont&oacute; con la participaci&oacute;n de Marco Correa, Dennis Tobar y Osmar Valdebenito. En la reuni&oacute;n se desarroll&oacute; una jornada de revisi&oacute;n del proceso de Estrategia 2030, se discutieron temas propios de la organizaci&oacute;n iberoamericana y se entreg&oacute; apoyo a los cap&iacute;tulos y grupos de usuarios en formaci&oacute;n para continuar el proceso de difusi&oacute;n en sus pa&iacute;ses.</p>
            <p><a href="https://wikimania2017.wikimedia.org" target="_blank">Wikiman&iacute;a 2017</a>, celebrada en Montreal, Canad&aacute;, tuvo como nuestro representante a Marco Correa, quien asisti&oacute; gracias a una beca de la Fundaci&oacute;n Wikimedia. Marco integr&oacute; un panel sobre el proceso de Estrategia 2030, donde dio cuenta de la actividad realizada por nuestra Corporaci&oacute;n con socios y aliados del movimiento Wikimedia en Santiago. Adem&aacute;s, estableci&oacute; contacto con diversas personas del mundo &aacute;rabe y Wiki Loves Monuments para evaluar los proyectos futuros que se pueden desarrollar en conjunto para el pr&oacute;ximo a&ntilde;o. </p>
        </app-section>
    </div>
</template>

<script>
import Section from './mixin/Section'
import data from '../data/gestion.json'
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

<style lang="css">

</style>
