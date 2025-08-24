import girl from "../../assets/girl.png";

function Presentation() {
  return (
    <article
      id="nosotros"
      className="flex "
      style={{
        height: "calc(100vh + 1.75rem)",
      }}
    >
      <section className="flex flex-col gap-5 basis-2/4 justify-center max-lg:basis-auto text-center px-10">
        <span className="flex flex-col gap-2  ">
          <h1>Nosotros</h1>
          <p>
            Somos una empresa dedicada a la distribución de agua de mesa de alta
            calidad, comprometidos con la salud y bienestar de nuestros
            clientes. Ofrecemos presentaciones de 20, 10 y 7 litros,
            garantizando un servicio confiable, accesible y eficiente.
          </p>
        </span>
        <span>
          <h4>Mision</h4>
          <p>
            Brindar agua de mesa pura y segura, con un servicio rápido y
            eficiente, asegurando la satisfacción de nuestros clientes y
            contribuyendo al bienestar de la comunidad.
          </p>
        </span>
        <span>
          <h4>Vision</h4>
          <p>
            Ser la empresa líder en distribución de agua de mesa en nuestra
            región, reconocida por nuestra calidad, servicio excepcional e
            innovación en soluciones de abastecimiento de agua.{" "}
          </p>
        </span>
      </section>
      <picture className="basis-2/4 overflow-hidden relative max-lg:hidden ">
        <img
          src={girl}
          alt=""
          className="absolute top-2/4 -translate-y-[50%] w-full "
        />
      </picture>
    </article>
  );
}

export default Presentation;
