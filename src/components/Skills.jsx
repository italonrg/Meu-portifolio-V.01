import React from "react";

const Skills = () => {
  return <section id="skills" className="py-10 bg-gray-800 relative">
  
  <div className=" mt-8 text-gray-100 text-center">
    <h3 className=" text-6xl font-semibold"> Minhas <span className="text-cyan-600">Habiliades</span></h3>
    <p className=" text-gray-400 mt-3">Tecnologias as quais tenho conhecimento</p>
    <div className=" flex items-center justify-center mt-12	 gap-10 flex-wrap">{/* div pai dos quadardos*/ }

      
  <div className=" border-2 border-cyan-600 relative min-w-[10rem] max-w-[10rem]-max-w-[16rem] bg-gray-900 p-10 rounded-xl " >{/* div dos quadrados de habilidade*/}
    <div
    style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    }}
    
    className=" w-32 h-32 rounded-full flex items-center justify-center">{/*/*div do html*/}
      <div className=" text-6xl">
      <ion-icon name="logo-html5"></ion-icon> 
      </div>
    </div>
    <p className=" text-xl font-semibold mt-3">avançado</p>


  </div>


  <div className=" border-2 border-cyan-600 relative min-w-[10rem] max-w-[10rem]-max-w-[16rem] bg-gray-900 p-10 rounded-xl " >{/* div dos quadrados de habilidade*/}
    <div
    style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    }}
    
    className=" w-32 h-32 rounded-full flex items-center justify-center">{/*/*div do css3*/}
      <div className=" text-6xl">
      <ion-icon name="logo-css3"></ion-icon> 
      </div>
    </div>
    <p className=" text-xl font-semibold mt-3">avançado</p>


  </div>

  <div className=" border-2 border-cyan-600 relative min-w-[10rem] max-w-[10rem]-max-w-[16rem] bg-gray-900 p-10 rounded-xl " >{/* div dos quadrados de habilidade*/}
    <div
    style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    }}
    
    className=" w-32 h-32 rounded-full flex items-center justify-center">{/*/*div do Javascript*/}
      <div className=" text-6xl">
      <ion-icon name="logo-Javascript"></ion-icon> 
      </div>
    </div>
    <p className=" text-xl font-semibold mt-3">intermediario</p>


  </div>


  <div className=" border-2 border-cyan-600 relative min-w-[10rem] max-w-[10rem]-max-w-[16rem] bg-gray-900 p-10 rounded-xl " >{/* div dos quadrados de habilidade*/}
    <div
    style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    }}
    
    className=" w-32 h-32 rounded-full flex items-center justify-center">{/*/*div react*/}
      <div className=" text-6xl">
      <ion-icon name="logo-react"></ion-icon> 
      </div>
    </div>
    <p className=" text-xl font-semibold mt-3">iniciante</p>
  </div>

  <div className=" border-2 border-cyan-600 relative min-w-[10rem] max-w-[10rem]-max-w-[16rem] bg-gray-900 p-10 rounded-xl " >{/* div dos quadrados de habilidade*/}
    <div
    style={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
    }}
    
    className=" w-32 h-32 rounded-full flex items-center justify-center">{/*/*div do node.js*/}
      <div className=" text-6xl">
      <ion-icon name="logo-nodejs"></ion-icon> 
      </div>
    </div>
    <p className=" text-xl font-semibold mt-3">iniciante</p>


  </div>

    </div>
  </div>
  
  
  
  </section>;
};

export default Skills;
