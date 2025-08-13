export const GoogleMap = () => {
  return (
    <div className="w-full h-48 rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.9867740329078!2d-45.89120968815099!3d-23.243568349908312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4ab6dd303899%3A0x5721f7efa433dcc9!2sAv.%20Ouro%20Fino%2C%20896%20-%20Bosque%20dos%20Eucaliptos%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012233-400!5e0!3m2!1spt-BR!2sbr!4v1755113275145!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Rei do Blend"
      ></iframe>
    </div>
  );
};