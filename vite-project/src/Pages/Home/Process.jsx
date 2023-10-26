import rectangulo from "../../assets/rectangle.png";
import imagen from "../../assets/fontPage.png";

function Process() {
  let processCol1 = [
    {
      titulo: "Filtro Multimedia",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Filtro Carbon Activado",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Osmosis Inversa",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
  ];
  let processCol2 = [
    {
      titulo: "Filtro Ablandador",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Ultravioleta",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Ozonizacion",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
  ];

  function processItem(cardsArray) {
    return cardsArray.map((x, index) => (
      <>
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-1 w-80"
        >
          <h2>{x.titulo}</h2>
          <p className="font-montserrat text-center">{x.descripcion}</p>
        </div>
      </>
    ));
  }

  return (
    <section>
      <article className="flex flex-col items-center gap-9 ">
        <h1 className="">Nuestro Proceso</h1>
        <span className="flex h-[50rem] gap-16">
          <div className="flex flex-col gap-32 pb-32 pt-12">
            {processItem(processCol1)}
          </div>
          <div
            id="verticalSeparator"
            className="w-screen bg-[#D9D9D9] rounded-full overflow-hidden"
            style={{
              height: "calc(100% - 8rem)",
              backgroundImage: `url(${rectangulo})`,
              backgroundPosition: 'center 350%',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          >
            {/*
            <div
            id="verticalSeparator"
            className="w-2 bg-[#D9D9D9] rounded-full overflow-hidden"
            style={{
              height: "calc(100% - 8rem)",
            }}
          >
              <div className="h-[555px] w-full border border-black top-0">
              <div className="h-[50vh] w-2 bg-black fixed top-0 z-[50]"></div>
          </div>*/}
          </div>
          <div className="flex flex-col gap-32 pt-44">
            {processItem(processCol2)}
          </div>
        </span>
      </article>
    </section>
  );
}

export default Process;
