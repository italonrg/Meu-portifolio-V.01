import React from "react";
import imgHire from "../assets/images/hireme.png";


const Hireme = () => {
  return <section id="hireme" className="py-10 px-3 text-white">Hireme

  <div className="text-center">
    <h3 className=" text-4xl font-semibold ">
    </h3>
    Contate<span className="text-cyan-600 ">-me</span>

  <p className=" text-gray-400 mt-3 text-lg">Solicite um contato</p>
  
<div className=" bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 gap-6 lg:flex-row flex-col-reverse items-center">
  <div>
    <h2 className=" text-3xl font-medium">Solicite um contato</h2>
    <p className=" lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-100 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <button className=" btn-primary mt-10">Mande um Oi ! </button>
  </div>
<img src={imgHire} alt="" className=" lg:h-[24rem] h-80 lg:absolute right-3 bottom-1 object-cover" />
{/* a foto não ficou passando depois vc vê isso se for o caso */}

</div>
  </div>



  </section>;
};

export default Hireme;
