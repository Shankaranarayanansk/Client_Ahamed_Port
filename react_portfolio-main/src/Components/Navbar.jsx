import React, { useEffect, useState } from "react";

function Navbar() {

  const [sticky, setSticky] = useState(false);
  const [open, setopen] = useState(false);

  const menulink = [
    {name:"HOME", link:"#home"},
    {name:"ABOUT", link:"#about"},
    {name:"SKILLS", link:"#skills"},
    {name:"Works", link:"#projects"},
    {name:"CONTACT", link:"#contact"}
  ]

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky? "bg-gray-300 text-black-900 duration-1000" : "text-black duration-1000"}`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl font-bold">
          Thameem<span className="text-gray-600"> Ah</span>amed
          </h4>
        </div>
        <div className={`${sticky? "md:bg-white/0 bg-white duration-1000" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className="flex items-center gap-1 py-2 tex-lg">
            {menulink?.map((menu,i) => (
              <li key={i} className="px-6 hover:text-black-600">
                <a href={menu?.link} >{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`z-[999] text-3xl ${open ? "text-gray-900" : "text-gray-500"} md:hidden m-5`} onClick={()=>setopen(!open)}>
            <ion-icon name="menu"></ion-icon>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open?"right-0":"right-[-100%]"}`}>
        <ul className="flex flex-col justify-center h-full gap-10 py-10 text-lg">
            {menulink?.map((menu,i) => (
              <li key={i} className="">
                <a href={menu?.link} >{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
