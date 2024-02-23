import React from "react";
import imgHire from "../assets/images/imgAcenar.png";


const Hireme = () => {
  return <section id="hireme" className="py-10 px-3 text-white">

  <div className="text-center">
    <h3 className=" text-6xl font-semibold ">

    Contate<span className="text-cyan-600 ">-me</span>
    </h3>
  <p className=" text-gray-400 mt-3 text-lg">Solicite um contato</p>
  
<div className=" bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 gap-6 lg:flex-row flex-col-reverse items-center">
  <div>
    <h2 className=" lg:text-left text-3xl font-medium">Faça contato comigo por estes links</h2>
    {/* <p className=" lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-100 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
 
    <div className="mt-6">
      <div className=" flex gap-4 w-fit items-center">

        <div className=" border-2 border-cyan-600 min-w-[3rem] min-h-[3rem] bg-gray-800 flex items-center justify-center rounded-full ">
          <ion-icon name="mail"></ion-icon>
        </div>
        <a className="text-blue-500" href="mailto:italonrg500@gmail.com">italonrg500@gmail.com</a>
      
      </div>
      <div className=" flex gap-4 w-fit items-center mt-6">

        <div className=" border-2 border-cyan-600 min-w-[3rem] min-h-[3rem] bg-gray-800 flex items-center justify-center rounded-full">
          <ion-icon  name="logo-Linkedin"></ion-icon>
        </div>
        <a className="text-blue-500" href="https://www.linkedin.com/in/%C3%ADtalo-nascimento-51a155215/">Ítalo Nascimento</a>
      
      </div>
      <div className=" flex gap-4 w-fit items-center mt-6">

<div className=" border-2 border-cyan-600 min-w-[3rem] min-h-[3rem] bg-gray-800 flex items-center justify-center rounded-full">
<ion-icon name="logo-github"></ion-icon>
</div>
<a className="text-gray-900" href="https://github.com/italonrg">Italonrg</a>

</div>
      <div className=" flex gap-4 w-fit items-center mt-6">

<div className=" border-2 border-green-300 min-w-[3rem] min-h-[3rem] bg-gray-800 flex items-center justify-center rounded-full">
<ion-icon name="logo-whatsapp"></ion-icon>
</div>
<p className="text-green-300">(61) 99880-9648</p>

</div>

      

    </div>
  </div>
  <div className="bg-gray-700 rounded-2xl">

  </div>
<img src={imgHire} alt="" className=" lg:h-[24rem] h-80 lg:absolute right-3 bottom-1 object-cover" />
{/* a foto não ficou passando depois vc vê isso se for o caso */}

</div>
  </div>



  </section>;
};

export default Hireme;
