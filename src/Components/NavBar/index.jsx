import logo from "../../assets/logo.jpg";
import FacebookIcon from "../../assets/facebook.svg";
import TelephoneIcon from "../../assets/telephone.svg";
import TiktokIcon from "../../assets/tiktok.png";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

function NavBar() {
  let lastScrollPosition = window.scrollY;

  // MANTENER LA NAV EN TOP AL SCROLEAR
  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    let nav = document.querySelector("#nav");

    if (currentScrollPosition > lastScrollPosition) {
      // El usuario está desplazándose hacia abajo
      nav.style.top = "-5.5rem";
    } else {
      // El usuario está desplazándose hacia arriba
      nav.style.top = "0rem";
    }
    lastScrollPosition = currentScrollPosition;
  });

  // ITEMS DEL NAV ------------------------------------------------------------------------------------------------------------------------
  let nav_items_arr = [
    [
      `
      `,
      [
        { titulo: "Nosotros", dataTarget: "nosotros" },
        { titulo: "¿Porque elegirnos?", dataTarget: "bridge" },
        { titulo: "Proceso", dataTarget: "proceso" },
      ],
    ],
    [
      `
      `,
      [
        { titulo: "Realiza tu pedido", dataTarget: "realizar_pedido" },
        /*{ titulo: "Promociones", dataTarget: "" },
        { titulo: "Preguntas frecuentes", dataTarget: "" },*/
      ],
    ],
  ];
  function nav_items(cardsArray) {
    return (
      <>
        <span
          className={`
        w-full flex justify-between items-center bg-sanAndresBg 
        max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:fixed max-lg:h-screen max-lg:w-screen duration-500
        ${isOpen ? "max-lg:-top-full" : "max-lg:top-0"}
        `}
        >
          {cardsArray.map((x, index) => (
            <ul
              key={index}
              className={`
            ${x[0]} flex gap-8
            max-lg:flex-col max-lg:text-center 
            `}
            >
              {/* Iteracion de los items*/}
              {x[1].map((y, index) => (
                <li key={index} dataTarget={y.dataTarget} className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  {y.titulo}
                </li>
              ))}
            </ul>
          ))}
        </span>
      </>
    );
  }

  // APARECER MENU CUANDO ESTE EN RESPONSIVE --------------------------------------------------------------------
  const [isOpen, setIsOpen] = useState(true);

  // DESLIZAR CUANDO SE HAGA CLICK EN UN ITEM DEL NAV -----------------------------------------------------------
  useEffect(() => { 
    const handleClick = (event) => {
      const sectionId = event.target.getAttribute("dataTarget");
      const section = document.getElementById(sectionId);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });

        setIsOpen(false); // Cierra el menú después de hacer clic
      }
    };

    // Seleccionamos todos los <li> dentro del <nav>
    const items = document.querySelectorAll("nav ul li");
    items.forEach((item) => item.addEventListener("click", handleClick));

    // Cleanup: eliminamos los eventos cuando el componente se desmonta
    return () => {
      items.forEach((item) => item.removeEventListener("click", handleClick));
    };
  }, []); // los corchetes dicen que se ejecuta solo una vez al montar el componente

  return (
    <>
      {/* PESTAÑA SUPERIOR AL NAV ------------------------------------------------------------------------- */}
      <div
        id="sobre_nav"
        className="
        relative flex h-7 justify-end items-center px-9
        max-lg:justify-center max-lg:gap-1 max-lg:px-0"
      >
        <h4 className="text-base w-fit absolute left-1/2 -translate-x-1/2 max-lg:hidden ">
          Siguenos en nuestras redes
        </h4>
        <a href="#" className="h-5">
          <img
            src={FacebookIcon}
            alt="Agua de Mesa San Andrés"
            className="h-5"
          />
        </a>
        <a href="#" className="h-5">
          <img
            src={TiktokIcon}
            alt="Agua de Mesa San Andrés"
            className="h-[18px]"
          />
        </a>
          <img
            src={TelephoneIcon}
            alt="Agua de Mesa San Andrés"
            className="h-5"
          />
        <p className="h-5 italic text-sm">
          <a
            href="https://api.whatsapp.com/send?phone=51946508111&text=%C2%A1Hola!%20Quisiera%20mayor%20informacion%20sobre%20los%20bidones%20%F0%9F%92%A6"
            target="_blank" rel="noopener"
            className="underline text-links"
          >
            946508111
          </a>{" "}
          -{" "}
          <a
            href="https://api.whatsapp.com/send?phone=51912498385&text=%C2%A1Hola!%20Quisiera%20mayor%20informacion%20sobre%20los%20bidones%20%F0%9F%92%A6"
            target="_blank" rel="noopener"
            className="underline text-links"
          >
            912498385
          </a>{" "}
          -{" "}
          <a
            href="https://api.whatsapp.com/send?phone=51977728248&text=%C2%A1Hola!%20Quisiera%20mayor%20informacion%20sobre%20los%20bidones%20%F0%9F%92%A6"
            target="_blank" rel="noopener"
            className="underline text-links"
          >
            977728248
          </a>
        </p>
      </div>

      {/* NAV ------------------------------------------------------------------------- */}
      <nav
        id="nav"
        className="
        flex items-center font-tittle h-[5.5rem] bg-sanAndresBg text-white px-7 text-lg sticky top-0 z-[1] duration-500 
        max-lg:px-0  max-lg:items-start
        "
      >
        {nav_items(nav_items_arr)}
        <Menu
          size={24}
          onClick={() => setIsOpen(!isOpen)}
          className="
        hidden border-2 z-[1] 
        max-lg:block max-lg:absolute max-lg:top-8 max-lg:left-[80%]
        "
        />

        <div className="absolute left-1/2 -translate-x-1/2 h-full flex w-40 ">
          <img
            src={logo}
            alt="Agua De Mesa San Andres"
            className="w-full object-cover"
            style={{
              top: "-3.9rem",
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
