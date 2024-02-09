import React from "react";///eu tenh que gerar uma foto minha
import hero from '../assets/images/hero.png'

const Hero = () => {

  const social_media =[
    'logo-instagram',
    'logo-facebook',
    'logo-linkedin',
    'logo-twitter',
  ]
  return (
    <section 
  id="home"
  className=" min-h-screen flex py-10 md:flex-row flex-col items-center"
  >
    <div className="flex-1 flex items-center justify-center">
      <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
    </div>

    <div className="flex-1 ">

    </div>
    <div>
      <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
        <span className="text-cyan-600 md: text-6xl-text-5xl">
          Oi!
          <br />
        </span>
        Meu nome e <span>Ítalo Nascimento</span>
      </h1>
      <h4 className="md: text-2xl-text-lg md: leading-normal-leading-5 mt-4 font-bold text-gray-600">Desenvolvedor Fullstack</h4>
      <button className="btn-primary mt-8">Contato</button>
      <div className="mt-8 text-3xl flex items-center md:justify-start justify-center "></div>
      <div>

        {
          social_media?.map(icon=>(
            <div key={icon} className="text-gray-600 hover:text-white cursor-pointer">
              <ion-icon name={icon}></ion-icon>  
            </div>
          ))
        }
      </div>
    </div>
  </section>
  );
};

export default Hero;
