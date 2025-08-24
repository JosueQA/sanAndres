import Faq from "./Faq";

function Footer() {
  let vendedores = [
    { nombre: "Gleni", telefono: "946 508 111" },
    { nombre: "Josue", telefono: "912 498 385" },
    {
      nombre: "Antonio",
      telefono: "947 899 666 (mayoristas de botellas de 7 y 10 litros)",
    },
  ];

  let vendedor = vendedores.map((x) => (
    <li className="flex items-center gap-1 ">
      <h4>{x.nombre}</h4>
      <span className="relative">
        <p className="font-normal">- {x.telefono}</p>
      </span>
    </li>
  ));

  return (
    <>
      <footer className="max-w-full bg-sanAndresBg flex justify-center items-center py-8">
        <span
          className="flex items-center justify-center text-white w-10/12 
        max-w-7xl max-lg:flex-col max-lg:gap-5 max-lg:text-center"
        >
          <Faq className="w-[33%] p-4 max-lg:w-full" />

          <div className="w-[33%] flex flex-col gap-2 max-lg:w-full">
            <h2>Siguenos</h2>
            <iframe
              className="flex self-center w-[340px]"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063555131987&tabs=timeline&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              height="500"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="flex flex-col gap-2 w-[33%] p-4 max-lg:w-full">
            <h2>Contacto</h2>
            <ul className="flex flex-col gap-2 max-lg:items-center">{vendedor.map((x) => x)}</ul>
            <h2>Direccion</h2>
            <p>
              Av. El sol 632 (alt. de la estacion del tren "San Carlos") - SJL
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d290.0798044262613!2d-77.00282795612492!3d-11.986049124855109!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1736914261989!5m2!1ses-419!2spe"
              width="400"
              height="200"
              style={{ border: 0, width: "auto", height: "275px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </span>
      </footer>
    </>
  );
}

export default Footer;
