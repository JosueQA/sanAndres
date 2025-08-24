import Button from "../../Components/Button";
import fontPage from "../../assets/fontPage.png";
import truckSVG from "../../assets/truckSVG.svg";

function Landing() {
  return (
    <section
      className="relative flex justify-center overflow-hidden"
      style={{
        width: "100%",
        height: "calc(100vh - 113px)",
      }}
    >
      <div className="w-full h-full object- bg-no-repeat bg-cover bg-center max-lg:bg-[82%]" 
        style={{
          backgroundImage: `url(${fontPage})`,
        }}>
      </div>
      <div className="absolute text-white left-[5%] top-[7.5%] max-lg:top-1/2 max-lg:-translate-y-1/2">
        <span>
          <h1 className="text-8xl text-white max-md:text-7xl max-sm:text-5xl">
            Agua de mesa
          </h1>
          <h1 className="text-9xl text-white max-md:text-8xl max-sm:text-7xl">
            San Andres
          </h1>
        </span>
        <p className="text-4xl font-tittle pb-4 max-md:text-3xl max-sm:text-2xl max-lg:px-2">
          La mejor calidad al mejor precio para ti y los tuyos.
        </p>
        <Button text="Comprar" width="120px" />
      </div>
      <div className="absolute bottom-[0vh] left-[25%] flex items-center gap-3 text-3xl max-lg:hidden">
        <img src={truckSVG} alt="Delivery" />
        <p className="font-tittle text-4xl text-white">Delivery GRATIS</p>
      </div>
    </section>
  );
}

export default Landing;
