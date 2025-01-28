import React from "react";
import murilo3 from '/src/assets/murilo3.png';

const LeftSidebar = () => {
  return (
    <div className="min-2xl:ml-[25rem] min-xl:ml-[10rem] min-lg:ml-[5rem] min-sm:ml-0 pt-[5rem] mr-3 max-md:w-1/4 min-md:w-1/5 p-6 flex flex-col justify-between border-r border-[#1a1a1a]">
      <div>
        <a href="https://www.instagram.com/murilo_papa/"> <img src={murilo3} alt="Profile" className="rounded-full w-36 mx-auto mb-4 hover:brightness-125 duration-300"/></a>
        <h1 className="text-2xl font-bold text-blue-500 text-center">Murilo Giampiccolo Papa</h1>
        <p className="text-center text-gray-400 hover:text-blue-300 duration-500">Estudande de ciência da computação</p>
      </div>

      <nav className="mt-8">
        <ul className="space-y-4">
          <li className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl hover:text-2xl duration-200">Sobre mim</li>
          <li className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl hover:text-2xl duration-200">Educação</li>
          <li className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl hover:text-2xl duration-200">Experiencia</li>
          <li className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl hover:text-2xl duration-200">Projetos</li>
        </ul>
      </nav>

      <footer className="text-center text-gray-500 mt-6">
        <p className=" hover:text-blue-300 duration-200">By Murilo G.P</p>
        <div className="flex justify-center space-x-4 mt-2">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
          <i className="fas fa-globe"></i>
        </div>
      </footer>
    </div>
  );
};

export default LeftSidebar;