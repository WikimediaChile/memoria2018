<template lang="html">
    <div>
        <app-section :elemento="data.charlas" :metricas="data.charlas.metricas" :images="data.charlas.imagenes">
            Wikimedia Chile estuvo presente en diversas actividades propiciando charlas a personas e instituciones que se interesaron por acercarse a los proyectos Wikimedia. Los voluntarios de Wikimedia Chile desarrollaron charlas en la Biblioteca Nacional, el Instituto de la Comunicación e Imagen de la Universidad de Chile, la conferencia TecnoX 2018 en Valparaíso. En todas estas instancias, las personas que participaron en los eventos presentaron inquietudes de cómo integrar y los mecanismos para contribuir en los proyectos Wikimedia.
        </app-section>

        <app-section :elemento="data.editatones" :metricas="data.editatones.metricas" :images="data.editatones.imagenes">
            <p>
              En 2018, desarrollamos diversas editatones con varias instituciones que por primera vez colaboraron con nuestra organización.
            </p>
            <p>
              En abril, junto a la Embajada de Suecia en Chile y colaboración con el Centro Cultural Palacio de La Moneda desarrollamos <b>Wiki Gap</b>, evento que persiguió la creación de artículos de mujeres en el cine.
            </p>
            <p>
              En mayo, nos desplazamos hasta la región de Aysén, para profundizar una alianza regional que realizamos en 2017. En el evento denominado <b>Editatón sobre el patrimonio de Aysén</b> los voluntarios de Wikimedia Chile ayudaron a la comunidad local a integrar contenidos relevantes de Aysén en Wikipedia, para profundizar la cobertura de contenidos locales en los proyectos Wikimedia. A raíz de este evento, firmamos un convenido de colaboración entre el Museo Regional de Aysén y Wikimedia Chile, para explorar nuevas formas de colaboración a distancia y posiblemente presencial durante 2019.
            </p>

            <p>
              En junio, desarrollamos una versión local de #1bib1ref (<i>en inglés #1lib1ref</i>), evento donde se invitan a los bibliotecarios y biliotecarias a mejorar Wikipedia con referencias en sus áreas de estudio. La jornada se desarrolló en al Biblioteca de Santiago y contó con la colaboración de la Escuela de Bibliotecología de la Universidad Tecnológica Metropolitana.
            </p>

            <p>
              En junio también se desarrolló la versión chilena de WikiDDHH, instancia de cooperación generada por Wikimedia Argentina que busca documentar las violaciones a los derechos humanos en los países del Cono Sur. En la jornada, desarrollada en el Museo de la Memoria y los Derechos Humanos, se mejoraron artículos de la causa mapuche, escasez del agua en Petorca y otros colectivos relacionados con los derechos humanos en nuestro país. Esta jornada contó con la organización de Wikimedia Argentina, Amnistía Internacional Chile y Open Society.
            </p>

            <p>
              A inicios del mes de septiembre, en conjunto de la Biblioteca Regional de Coquimbo desarrollamos una editatón para mejorar contenidos locales de la región y de Gabriela Mistral. En esta ocasión se presentó el concurso del Mes de Mistral, evento que buscó mejorar los contenidos de Mistral en Wikipedia en español.
            </p>

            <p>
              Por último, a mediados de diciembre surgieron dos editatones que buscaron documentar a los escritores chilenos y las mujeres en la arquitectura nacional. En la primera editatón, desarrollada el 15 de diciembre, contó con la participación de la Sociedad de Escritores de Chile, Vicerrectoría de Transferencia Tecnológica y Extensión de la Universidad Tecnológica Metropolitana y la Facultad de Administración y Economía de la UTEM. En la editatón de mujeres arquitectas, la jornada se desarrolló en la Facultad de Arquitectura y Urbanismo de la Universidad de Chile.
            </p>
        </app-section>
        <app-section :elemento="data.concursos" :metricas="data.concursos.metricas" :images="data.concursos.imagenes">
            <p>
              En el 2018, Wikimedia Chile desarrolló tres concursos para mejorar los contenidos de Wikimedia Commons y Wikipedia.
            </p>

            <p>
              <b>Wiki Loves Earth Chile</b> fue un concurso fotográfico para capturar los parques nacionales, santuarios de la naturaleza y zonas protegidas de nuestro país. El concurso contó con el apoyo del Servicio Nacional de Turismo y la Corporación Nacional Forestal. Wiki Loves Earth Chile logró recolectar más de 1000 fotografías de nuestros espacios naturales.
            </p>

            <p>
              El <b>Mes de Mistral</b> fue un concurso orientado a mejorar los contenidos de Gabriela Mistral en Wikipedia en español, debido a la baja cobertura y extensión de contenidos entre Mistral y Neruda, siendo que ambos ganaron el premio Nobel de Literatura.
            </p>

            <p>
              El concurso <b>Puente entre Culturas</b> vivió su segunda edición. Este concurso tiene por objetivo mejorar los contenidos del mundo asiático en Wikipedia en español, así como se mejoran los contenidos de Latinoamérica en las versiones de Asia.
            </p>

            <p>
              Así mismo, por la cooperación con Iberocoop, Wikimedia Chile se sumó al concurso internacional del mes de la mujer llamado <b>La Mujer Que Nunca Conociste</b>, evento donde se busca crear y mejorar las biografías de mujeres destacadas en los países integrantes de la iniciativa regional. También nos integramos a la versión de #1bib1ref (1 bibiotecari@, 1 referencia)
            </p>
        </app-section>
        <app-section :elemento="data.fotos" :metricas="data.fotos.metricas" :images="data.fotos.imagenes">
            <p>
              Desde 2016, Wikimedia Chile ha contado con el equipamiento para realizar registros fotográficos de eventos deportivos, premiaciones y galas de música y farándula. Durante 2018 Wikimedia Chile fue acreditado por primera vez por la Asociación Nacional de Fútbol Profesional para asistir a todos los partidos organizados por esta institución, como partidos de Primera A, Primera B y Selección Femenina de fútbol.
            </p>

            <p>
              Durante 2018, se subieron 727 fotografías a Wikimedia Commons, siendo usadas en más de 1000 artículos en todas las ediciones lingüísticas de Wikipedia y otros proyectos Wikimedia. En este período, las personas voluntarias de Wikimedia Commons seleccionaron 70 imágenes de calidad.
            </p>
        </app-section>
    </div>
</template>

<script>
import Section from "./mixin/Section";
import data from "../data/difusion.json";
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

<style lang="css">
</style>
