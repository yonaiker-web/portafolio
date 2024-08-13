import React from "react";
import avatar from "../assets/author-image.jpg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";

export const About = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col lg:flex-row pt-24 px-8">
        <div className="card bg-[#3198da] rounded-box py-6 grid  w-1/4 flex-grow place-items-center">
          <div className="avatar size-64">
            <div className="mask mask-squircle w-80">
              <img src={avatar} />
            </div>
          </div>
          <div className="flex flex-col text-center text-lg">
            <code className="">Yonaiker S. Ocando A.</code>
            <code className="">Developer Web</code>
          </div>
          <div className="text-center">
            <button
              className="btn btn-neutral "
              onClick={() => window.open(url, "_blank")}
            >
              Descargar Curriculum
            </button>
          </div>
        </div>
        <div className="p-4"></div>
        <div className=" grid py-6 h-full text-gray-600  w-1/2 flex-grow place-items-start">
          <code className="text-5xl font-bold pb-6 text-gray-900">
            Sobre Mi
          </code>
          <code className="py-3 ">
            Hola mucho gusto, soy Yonaiker Ocando, nací en Caracas - Venezuela.
          </code>

          <code className="py-3">
            Mis inicios en el mundo tecnológico surgió por la necesidad de saber
            cómo funcionaban los artefactos electrónicos y los programas
            informáticos, como un botón sabía justamente lo que debía hacer,
            como visualmente se imprimía algo en la pantalla y verse de una
            manera elegante mostrando datos que sabrá de donde vienen. Realice
            mi primer curso de informática básica y basto para darme cuenta de
            que el área de la informática me gusta, pero fue cuando empecé a
            investigar sobre la programación y todas las maravillas que podemos
            realizar con ellas que decidí estudiarlo por mi cuenta. Tiempo
            después descubrí la seguridad informática que aunque es un área que
            no he tenido la oportunidad de desarrollar en el área laboral, no me
            detuvo para realizar algunas pruebas en entornos locales.
          </code>

          <code className="py-3">
            Cada que tengo tiempo libre, además de aprovechar mis espacios de
            ocio para distraerme libremente con mis actividades al aire libre,
            aparto tiempo para investigar y hacer cursos en diferentes áreas
            como lo son la seguridad informática, ciberseguridad, leer sobre
            contenido informativo e informático para estar al día con nuevas
            tecnologías y reforzar conocimientos aprendidos
          </code>

          <code className="py-3">
            Soy autodidacta y empírico, creo que el conocimiento es libre y
            también poder, todo lo que pueda aprender dentro y fuera de lo
            laboral me ayuda a crecer como profesional y como ser humano.
          </code>
        </div>
      </div>
    </Layout>
  );
};
