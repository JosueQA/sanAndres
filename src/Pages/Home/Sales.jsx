import Button from "../../Components/Button";
import uno from "../../assets/1.svg";
import dos from "../../assets/2.svg";
import tres from "../../assets/3.svg";
import cuatro from "../../assets/4.svg";
import sirviendo from "../../assets/sirviendo.jpeg";
import map from "../../assets/map.jpg";
import enviando from "../../assets/enviando.jpeg";
import delivery from "../../assets/delivery.jpg";

function Sales() {
  let steps = [
    {
      step: uno,
      tittle: "Elige el producto que deseas comprar",
      description: "Agrega la cantidad. Si eres empresa, ingresa tu RUC.",
      background: sirviendo,
    },
    {
      step: dos,
      tittle: "Ingresa la información de envío (ubicación y contacto)",
      description: "Ingresa la direccion del lugar de entrega. y un numero de contacto adicional",
      background: map,
    },
    {
      step: tres,
      tittle: "Envíanos la información",
      description: `¡Envíanos la información y te respondermos a la brevedad!`,
      background: enviando,
    },
    {
      step: cuatro,
      tittle: "Recibe tu pedido",
      description:
        "Espera en tu ubicacion y hora acordadas. Recuerda que el delivery es GRATIS.",
      background: delivery,
      button: <Button text="Empezar" width="105px" link="https://api.whatsapp.com/send?phone=51946508111&text=%C2%A1Hola!%20Quisiera%20mayor%20informacion%20sobre%20los%20bidones%20%F0%9F%92%A6"/>,
    },
  ];
  let stepArr = steps.map((x, index) => {
    return (
      <div
        key={x.step}
        className="basis-1/4"
        style={{
          backgroundImage: `url(${x.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <span className="flex flex-col justify-center items-center text-center w-full h-full px-10 gap-2 text-white bg-black/50 hover:bg-black/30 max-lg:py-12">
          <img src={x.step} className="w-16" />
          <h3 className="text-2xl">{x.tittle}</h3>
          <p>{x.description}</p>
          {x.button}
        </span>
      </div>
    );
  });

  return (
    <section
      id="realizar_pedido"
      className="flex flex-col items-center content-center max-w-full gap-16 h-[95vh] max-lg:h-fit"
    >
      <h1 className="text-center">Realiza Tu Pedido</h1>
      <article id="buySteps" className="flex h-full max-lg:flex-col">
        {stepArr.map((x) => x)}
      </article>
    </section>
  );
}
export default Sales;
