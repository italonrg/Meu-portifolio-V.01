import React from "react";
import aboutImg from '../assets/images/about.png'
const About = () => {

  const info = [
    {text:'Tempo de experiência' , count: '??'},
    {text:'Projetos concluídos' , count: '??'},
    {text:'Horas estudadas' , count: '??'},
  ]
  return <section id="about" className="py-10 text-white">


    <div className="text-center mt-8">
    <h3 className=" text-4xl  font-semibold ">
      Sobre <span className="text-cyan-600 ">Min</span>
    </h3>

    <p className=" text-gray-600 my-3 text-lg">Minha historia</p>
    <div className=" flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
      
  <div className=" p-2">
    <div className=" text-gray-400 my-3">
      <p className=" text-justify leading-7 w-11/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum ipsa cupiditate necessitatibus inventore ea sit eum perspiciatis nam iste quo labore perferendis dolorum officiis eos, quas asperiores totam aliquid!

      </p>
      <div>
          <div className=" flex mt-10 items-center gap-7">
            {
              info.map(content => (
                <div key={content.text}>
                      <h3 className=" md: text-4xl font-semibold text-white">
                        {content.count}
                       <span className=" text-cyan-600 ">+</span> 
                       </h3>
                      <span className=" md:text-base text-xs ">{content.text}</span>
                    </div>
              ))}
        </div>
        <br />
        <br />
              <a href="./src/assets/italonascimento.PDF" download>
              <button className=" btn-primary">Baixar Currículo</button>
              </a>
      </div>
    </div>
  </div>
  <div className=" flex-1 flex justify-center items-center">

    <div className=" lg: w-96 h-full relative sm:w-10/12-w-10/12 max-w-sm bg-cyan-600 rounded-xl aboutImg">
      <img
       src={aboutImg}
        alt=""
         classname=" w-full object-cover rounded-xl"/>
    </div>

  </div>

    </div>
    </div>
  </section>;
};

export default About;
