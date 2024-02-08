import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [stick,setStick]=useState(false );
  const menuLinks =[
  {name: "HOME", link:"#home"},
  {name: "SOBRE", link:"#sobre"},
  {name: "HABILIDADES", link:"#habilidades"},
  {name: "PROJETOS", link:"#projetos"},
  {name: "CONTATO", link:"#contato"},
];

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setStick(true) : setStick(false);
    })
  })


  return <nav className= {`fixed w-full left-0 top-0 z-[999] ${stick ? 'md:bg-white/60 text-gray-900' : 'text-white'}`}>
    <div className="flex items-center justify-between">
      <div className="mx-7">
        <h4 className=" text-4xl uppercase font-bold">
          Í<span className="text-cyan-600">ta</span>lo <span className="text-cyan-600">Nascimento</span>
        </h4>
      </div>
      <div className=" text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
        <ul className="flex items-center gap-1 py-2 text-lg">
          {
            menuLinks?.map((menu,i)=>{
             return(
              <li key={i} className="px-6 hover:text-cyan-600">
              <a href={menu?.link}>{menu?.name} </a>
            </li>
             )
            })
          }
        </ul>
      </div>
    </div>
  </nav>;
};

export default Navbar;
