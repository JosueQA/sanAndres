import { useEffect, useState } from "react";
import "./faq.css";

function Faq({ className }) {
  // CONTENIDO
  let preguntas = [
    {
      titulo: "¿A que distritos llegan y donde se ubican?",
      respuesta: (
        <>
          Contamos con cobertura en distintos distritos como Cercado de Lima,
          Los Olivos y Callao. Por otro lado, nuestro centro de operaciones esta
          en SJL.{" "}
        </>
      ),
    },
    {
      titulo: "¿Entregan factura?",
      respuesta: "¡Si! Entregamos factura.",
    },
    {
      titulo: "¿Tienen planes para empresas?",
      respuesta:
        "¡Si! Contamos con planes totalmente personalizados. Asi mismo, por cierta cantidad acordada, llegamos a cualquier distrito.",
    },
    { titulo: "¿Tienen promociones?", respuesta: "¡Siempre! Agreganos y entérate de nuestras promociones en nuestros estados de Whatsapp." },
  ];

  // Creamos el estado para abrir/cerrar la pregunta
  let [active, setActive] = useState(null);

  // AGREGAMOS EL CONTENIDO EN UNA LISTA
  let pregunta = preguntas.map((x, index) => (
    <li key={index} className="question rounded-lg border-2">
      {/* A continuación asignamos al estado el valor del index cuando se hace click para controlar la pregunta clickeada, pero si el estado ya tiene el mismo valor ingresado, dara null al estado, desactivando la centralizacion */}
      <span
        onClick={() => (active == index ? setActive(null) : setActive(index))}
        className="flex items-center faq_question_span "
      >
        <h4 className="faq_question relative basis-5/6 ">{x.titulo}</h4>

        {/* A continuación si fue clickeado la flecha mirara abajo */}
        <svg
          className={`${
            active === index ? "-rotate-180" : "-rotate-0"
          } basis-1/6  `}
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={10}
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876"
          ></path>
        </svg>
      </span>
      {/* A continuación si fue clickeado me dara relative, sino lo escondera */}
      <p
        className={`${`faq_description_${index}`} m-2 ${
          active === index ? "relative" : "hidden"
        } `}
      >
        {x.respuesta}
      </p>
    </li>
  ));

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h2>Preguntas frecuentes</h2>
      <ul className="flex flex-col gap-3">{pregunta.map((x, index) => x)}</ul>
    </div>
  );
}

export default Faq;
