import rectangulo from "../../assets/rectangle.png";
import glassOfWater from "../../assets/glassOfWater.png";
import './assets/process.css';

function Process() {
  let processCol1 = [
    {
      titulo: "Filtro Multimedia",
      descripcion:
        "Este proceso elimina partículas suspendidas como arena, sedimentos y óxidos mediante capas de grava, arena y antracita. Mejora la claridad del agua y protege los sistemas posteriores.",
    },
    {
      titulo: "Filtro Carbon Activado",
      descripcion:
        "Utiliza carbón activado para absorber cloro, compuestos orgánicos y contaminantes que afectan el sabor, color y olor del agua, garantizando un líquido más puro y de mejor calidad.",
    },
    {
      titulo: "Osmosis Inversa",
      descripcion:
        "Un proceso de filtración avanzado que usa membranas semipermeables para eliminar sales, metales pesados, virus y bacterias, asegurando agua potable de alta pureza y libre de contaminantes.",
    },
  ];
  let processCol2 = [
    {
      titulo: "Filtro Ablandador",
      descripcion:
        "Reduce la dureza del agua eliminando minerales como calcio y magnesio mediante resinas de intercambio iónico, evitando incrustaciones en tuberías y mejorando la eficiencia del sistema.",
    },
    {
      titulo: "Ultravioleta",
      descripcion:
        "Emplea luz UV para desinfectar el agua al destruir el ADN de microorganismos como bacterias y virus, asegurando un suministro libre de patógenos sin el uso de químicos.",
    },
    {
      titulo: "Ozonizacion",
      descripcion:
        "Inyecta ozono en el agua para eliminar bacterias, virus y contaminantes orgánicos. Es un desinfectante poderoso que oxida impurezas y mejora la calidad del agua potable.",
    },
  ];

  function processItem(cardsArray, directionRem, direction) {
    return cardsArray.map((x, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center gap-1 w-80 relative text-center"
      >
        {/* Proceso */}
        <span id="process" className={`p-4 ${direction}`}>
          <h2>{x.titulo}</h2>
          <p className="font-montserrat text-center">{x.descripcion}</p>
        </span>
        {/* Imagen de vaso de agua */}
        <img
          src={glassOfWater}
          id="processImage"
          className={`absolute top-[1.12rem] ${directionRem}`}
        />
      </div>
    ));
  }

  window.addEventListener("scroll", () => {
    let processContainer = document.querySelectorAll("#process");
    let processImage = document.querySelectorAll("#processImage");

    processContainer.forEach((x) => {
      let y = x.getBoundingClientRect();
      if (y.top < window.innerHeight * 0.5) {
        x.classList.add("processActivado");
        x.classList.contains("left") ? x.classList.add("processActivadoIzquierda") : x.classList.add("processActivadoDerecha")
      } else {
        x.classList.remove("processActivado");

      }
    });
    processImage.forEach((x) => {
      let y = x.getBoundingClientRect();
      if (y.top > window.innerHeight * 0.52) {
        x.classList.add("processImageActivado");
      } else {
        x.classList.remove("processImageActivado");
      }
    });

  });

  return (
    <section id="proceso">
      <article className="flex flex-col items-center gap-9">
        <h1 className="text-center">
          Nuestro Proceso
          </h1>
        <span className="flex h-[70rem] gap-16 max-lg:gap-5 max-lg:min-h-fit">
          <div className="flex flex-col gap-[12rem] pb-32 pt-16 max-lg:hidden ">
            {processItem(processCol1, "right-[-5.5rem]")}
          </div>

          {/* LINEA VERTICAL DE AVANCE */}
          <div
            id="verticalSeparator"
            className="w-[5px] bg-[#D9D9D9] rounded-full max-lg:w-[6px] max-lg:mr-3"
            style={{
              height: "calc(100% - 8rem)",
              backgroundImage: `url(${rectangulo})`,
              backgroundPosition: "left -25rem",
              backgroundRepeat: "repeat-x",
              backgroundAttachment: "fixed",
            }}
          ></div>
          
          <div className="flex flex-col pt-60 max-lg:pt-0 max-lg:gap-[12rem]">
            <span className="hidden gap-[12rem]  max-lg:flex max-lg:flex-col">
              {processItem(processCol1, "left-[-3.3rem]", 'left')}
            </span>
            <span className="flex flex-col gap-[12rem] ">
              {processItem(processCol2, "left-[-5.5rem] max-lg:left-[-3.3rem]", 'left')}
            </span>
          </div>
        </span>
      </article>
    </section>
  );
}

export default Process;
