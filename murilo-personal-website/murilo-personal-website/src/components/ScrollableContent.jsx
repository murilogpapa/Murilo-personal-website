import React from "react";

const ScrollableContent = () => {
  return (
    <div className=" rounded-xl flex-1 overflow-y-auto p-6 min-2xl:pr-[25rem] min-lg:pr-[10rem] min-md:px-[2rem] max-lg:pr-[2rem] ">
      <div className="min-sm:hidden place-content-center text-center mb-10 font-bold p-2.5 rounded-xl bg-blue-500">
        <h1>A experincia do site pode ser melhor em um computador</h1>
      </div>
      <section>
        <h2 className="text-2xl text-center font-bold mb-4">Minha jornada</h2>
        <p className="text-gray-300 mb-6">
          Comecei no mundo da tecnologia muito cedo, desde pequeno sempre gostei muito da area e ia tentando me aprofundar, com 15-16 anos comecei a me interessar um pouco mais pela area de programação por conta do GTA (servidores de FiveM), com o tempo tive meus propios servidores, mas na epoca eu focava mais no FrontEnd, com isso comecei a sentir falta de criar mais funcionalidades, e então hoje busco mais conhecimento e experiencia com BackEnd.
        </p>
        <h2 className="text-2xl text-center font-bold mb-4">Escola e tecnologia</h2>
        <p className="text-gray-300 mb-6">
          Durante meu ensino médio tecnico formativo, fiz diversos projetos desde desenvolvimento de carrinhos para corrida, até jogos e apps para competiçoes, cheguei na semi-final do Senac Empreenda com um APP de alimentação e sustentabilidade 100% desenvolvido por mim e pelos membros do meu grupo, la tambem aprendi a mexer com servidores (windows e linux), aumentei meu conhecimento sobre desenvolvimento WEB e tambem melhorei minha lógica, alem de ter adquirido bastante experiencia em como funciona uma grande instituição.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl text-center font-bold mb-4">Habilidades</h2>
        <div className="mb-6 block">
          <div>
        <h3 className="text-lg text-center font-semibold">Desenvolvedor experiente</h3>
          <p className="text-gray-400 text-center">conhecimento médio-avançado em:</p>
          </div>
          <div className="mb-8 flex place-content-center flex-wrap gap-2 mt-2">
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">TailwindCSS</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">HTML</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">CSS</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">Javascript</span>
          </div>


          
          <div>
          <h3 className="text-lg text-center font-semibold">Desenvolvedor Iniciante</h3>
          <p className="text-gray-400 text-center">conhecimento basico-médio em:</p>
          </div>
          <div className="flex place-content-center flex-wrap gap-2 mt-2">
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">C#</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">JAVA</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">Python</span>
            <span className="bg-blue-500 text-black px-2 py-1 rounded-xl text-sm">React</span>
          </div>
        </div>
        
      </section>

      <section>
      <h2 className="text-2xl text-center font-bold mb-4">Projetos</h2>
        <p className="text-gray-300 mb-6">
          Durante meus ultimos ano de escola desenvolvi diversos projetos desde carrinhos automatizados, casa inteligente até servidores de GTA (FiveM), com isso adquiri bastante experiencia em desenvolvimento, organização de grupos, contato com clientes, investidores e mutio mais. Vejo esses ultimos anos da minha escola como um grande periodo de cressimento pessoal e profissional, alem de aprender muito sobre a area que tanto amo, tambem aumentei bastante meu conhecimento e capacidade de debater, desenvolver soluçoes e lidar com pessoas. e aqui estarão alguns dos prjetos que mais gostei.
        </p>
      </section>
      
    </div>
  );
};

export default ScrollableContent;