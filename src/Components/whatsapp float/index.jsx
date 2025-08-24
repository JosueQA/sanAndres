import WhatsappIcon from "../../assets/whatsapp.svg";

function WhatsappFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51946508111&text=%C2%A1Hola!%20Quisiera%20mayor%20informacion%20sobre%20los%20bidones%20%F0%9F%92%A6"
      target="_blank"
      rel="noopener" 
    >
      <img
        className="fixed z-[2] w-12 right-5 bottom-6"
        src={WhatsappIcon}
        alt=""
      />
    </a>
  );
}

export default WhatsappFloat;
