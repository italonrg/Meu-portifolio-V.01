import React from "react";
import project01 from "../assets/images/project-1.png";
import "Swiper/css";
import "Swiper/css/pagination";

const Project = () => {
  return (

    <section id="projectx" className="py-10 text-white"> 
      <div className="text-center">
        <h3 className="text-4xl font-semibold">Meus<span className="text-cyan-600">-Projetos</span></h3> 
        <p className="text-gray-400 mt-3 text-lg">Dê uma olhada!!!</p> 
      </div>
      <br />
      <div className="flex max-w-4xl mx-auto items-center relative px-5">
        <div className="lg:w-2/3 w-full"> {/* Ajuste da classe para definir a largura do swiper */}
         

              <div className="h-full w-full p-4 bg-slate-700 rounded-xl">
                <img src={project01} alt="" className="w-full object-cover rounded-xl" /> 
                <h3 className=" flex gap-3 py-2">Piano Game Simulator</h3>
                <a href="https://github.com/italonascimento" className="text-cyan-600">
                  Visite o Repositorio no Git</a>
                  
                  <a href="https://italonascimento.github.io/PianoGame/" className="text-cyan-600 block mt-2">
                    Visite o Projeto
                  </a>
            
              </div>

         


         

        </div>
        <div >
          <img src="../assets/images/project_person.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;