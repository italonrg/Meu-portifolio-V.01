import React from "react";
import "Swiper/css";
import "Swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination,Autoplay } from "swiper";


const Project = () => {
  return (
    <section id="projects clas" className="py-10 text-white">

      <div className="text-center">
        <h3 className=" text-6xl font-semibold">
          Meus <span className="text-cyan-600">Projetos</span>
        </h3>
        <p className=" text-cyan-700 mt-3 text-lg">Confira!!!</p>
      </div>
      <br />
      <div className=" flex max-w-6xl px-5 mx-auto items-center relative">
    <div className="lg:w-2/3 w-full">

      <Swiper slidesPerView={1.5} spaceBetween={20} breakpoints={{
        768: {
          slidesPerView: 2
        }
      }}
        loop={true} Autoplay={
          {
            delay: 3000
          }
        }
        pagination={
          {
            clickable: true
          }
        }
        modules={[Pagination, Autoplay]}>
        
        <SwiperSlide>
      <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
      <img src="src\assets\images\pianoSimulator.png" alt="" className="rounded-lg" />
      <h3 className="text-xl my-4">Piano Simulator</h3>
      <div className="flex gap-3">
        <a className="text-cyan-600" href="https://italonrg.github.io/Piano-Virtual-html_css_Js-/">Live Demo
        </a>
        <a className="text-cyan-600" href="https://github.com/italonrg">Projeto no Github
        </a>

      </div>



      </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
      <img src="src\assets\images\pianoSimulator.png" alt="" className="rounded-lg" />
      <h3 className="text-xl my-4">Piano Simulator</h3>
      <div className="flex gap-3">
        <a className="text-cyan-600" href="https://italonrg.github.io/Piano-Virtual-html_css_Js-/">Live Demo
        </a>
        <a className="text-cyan-600" href="https://github.com/italonrg">Projeto no Github
        </a>

      </div>



      </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
      <img src="src\assets\images\pianoSimulator.png" alt="" className="rounded-lg" />
      <h3 className="text-xl my-4">Piano Simulator</h3>
      <div className="flex gap-3">
        <a className="text-cyan-600" href="https://italonrg.github.io/Piano-Virtual-html_css_Js-/">Live Demo
        </a>
        <a className="text-cyan-600" href="https://github.com/italonrg">Projeto no Github
        </a>

      </div>



      </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
      <img src="src\assets\images\pianoSimulator.png" alt="" className="rounded-lg" />
      <h3 className="text-xl my-4">Piano Simulator</h3>
      <div className="flex gap-3">
        <a className="text-cyan-600" href="https://italonrg.github.io/Piano-Virtual-html_css_Js-/">Live Demo
        </a>
        <a className="text-cyan-600" href="https://github.com/italonrg">Projeto no Github
        </a>

      </div>


      </div>
        </SwiperSlide>
      </Swiper>

    </div>
    <div className="lg:block hidden">
      <img src="src\assets\images\imgTest.png" alt="" className="h-96 w-full" />
    </div>
      </div>

    </section>
 
  );
};

export default Project;
