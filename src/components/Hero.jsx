import React from "react";


const Hero = () => {
  const social_media = ['logo-instagram', 'logo-whatsapp', 'logo-linkedin', 'logo-github'];

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center">
        {/* Div que envolve a imagem com estilo de círculo e fundo */}
        <div className="relative rounded-full overflow-hidden w-96 h-96 bg-cyan-700  border-2 border-cyan-700">
          <img src="src\assets\images\minhaFoto.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600 md:text-6xl text-5xl">Oi!<br /></span>
          Meu nome é <span>Ítalo Nascimento</span>
        </h1>
        <h4 className="text-xl mt-4 font-bold text-white">Desenvolvedor Back-end</h4>
        <button className="btn-primary mt-8">Contato</button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center "></div>
        <div>
          {social_media?.map((icon) => (
            <div key={icon} className="text-white hover:text-cyan-600 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 mt-2">
              <ion-icon name={icon}></ion-icon>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
