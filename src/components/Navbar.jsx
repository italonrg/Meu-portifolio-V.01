import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [stick,setStick]=useState(false );
  const [open,setOpen]=useState(false );
  const menuLinks =[
  {name: "HOME", link:"#home"},
  {name: "SOBRE", link:"#about"},
  {name: "HABILIDADES", link:"#skills"},
  {name: "PROJETOS", link:"#projectx"},
  {name: "CONTATO", link:"#hireme"},
];

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setStick(true) : setStick(false);
    })
  })


  return <nav className= {`fixed w-full left-0 top-0 z-[999] ${stick ? ':bg-white/60 text-cyan-600' : 'text-white'}`}>


    <div className="flex items-center justify-between">

  
      <div className="mx-10">
        <h4 className=" text-5xl uppercase font-bold">
          Í<span className="text-cyan-600">ta</span>lo <span className="text-cyan-600">Nascimento</span>
        </h4>
      </div>

      <div className={ ` ${stick ? "bg-white/0 bg-white" : "bg-white"}  text-cyan-600 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>

        <ul className="flex items-center gap-1 py-2 text-lg">
          {
            menuLinks?.map((menu,i)=>{
             return(
              <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-cyan-600">
              <a href={menu?.link}>{menu?.name} </a>
            </li>
             )
            })
          }
        </ul>
      </div>

  
      <div

      onClick={() => setOpen(!open) }
       className={`z-[999] ${open ? "text-cyan-600" : "text-gray-100"} text-3xl md:hidden m-5`}>
        <ion-icon name = "menu"></ion-icon>
      </div>
          <div className= {` md:hidden text-white absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'} `}>
            <ul className=" flex flex-col justify-center h-full gap-10 py-2 text-lg">
              {
                menuLinks?.map((menu,i) => {
                 return(
                  <li
                   onClick={() => setOpen(false)}
                    key={i} className="px-6 hover:text-cyan-600">
                  <a href = {menu?.link} >{menu?.name} &gt;</a>
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
