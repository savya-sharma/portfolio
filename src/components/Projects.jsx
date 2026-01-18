const Projects = () => {
  return (
    <div className="page3 relative w-full min-h-screen pt-32 px-4 md:px-24">
      <div className="py-18 relative">
        <div
          className="w-[20vw] sm:w-[8vw] absolute top-7 sm:top-12 left-1/2 sm:left-[24%] -translate-x-1/2 sm:translate-x-0">
          <img className="w-full" src="../images/arrow3.png" alt="" />
        </div>
        <div className="absolute -top-7 sm:top-4 left-1/2 sm:left-[10%] -translate-x-1/2 sm:translate-x-0">
          <h1 className="bg-[#262626] px-17 py-2 sm:p-8 text-white text-[1.4em] sm:text-[2em] text-center">
            Recent <span className="text-[#F45E2B]">
              Projects
            </span>
          </h1>
        </div>
        <h1 className="font-[italic] text-center text-[6em] sm:text-[14em]">Projects</h1>
      </div>
      <div className="projects font-[light] flex flex-col gap-32">

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
          <div className="project w-full sm:w-[35vw] h-[40vh] sm:h-[45vh] bg-black flex-shrink-0">
            <img className="object-cover w-full h-full" src="../images/projectImg1.jpg" alt="" />
          </div>
          <div className="project_content w-full sm:w-[40vw] flex flex-col gap-2 mt-6 sm:mt-0">
            <h3 className="text-[1.1em] sm:text-[1.2em] opacity-[.8]">2024</h3>
            <h2 className="text-[1.3em] sm:text-[2em]">Sajno.co</h2>
            <div className="text-[1em] sm:text-[1.2em] opacity-[.8] flex flex-col gap-4 sm:gap-5 pt-5 sm:pt-7">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eos voluptatum praesentium beatae
                aperiam
                hic, nulla similique ipsa nostrum voluptatibus totam repellendus ut magnam tenetur incidunt, dolore,
                eveniet facere aspernatur.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet accusamus error.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
          <div className="project w-full sm:w-[35vw] h-[40vh] sm:h-[45vh] bg-black flex-shrink-0">
            <img className="object-cover w-full h-full" src="../images/projectImg2.jpg" alt="" />
          </div>
          <div className="project_content w-full sm:w-[40vw] flex flex-col gap-2 mt-6 sm:mt-0">
            <h3 className="text-[1.1em] sm:text-[1.2em] opacity-[.8]">2024</h3>
            <h2 className="text-[1.3em] sm:text-[2em]">Sajno.co</h2>
            <div className="text-[1em] sm:text-[1.2em] opacity-[.8] flex flex-col gap-4 sm:gap-5 pt-5 sm:pt-7">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eos voluptatum praesentium beatae
                aperiam
                hic, nulla similique ipsa nostrum voluptatibus totam repellendus ut magnam tenetur incidunt, dolore,
                eveniet facere aspernatur.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet accusamus error.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
          <div className="project w-full sm:w-[35vw] h-[40vh] sm:h-[45vh] bg-black flex-shrink-0">
            <img className="object-cover w-full h-full" src="../images/projectImg3.jpg" alt="" />
          </div>
          <div className="project_content w-full sm:w-[40vw] flex flex-col gap-2 mt-6 sm:mt-0">
            <h3 className="text-[1.1em] sm:text-[1.2em] opacity-[.8]">2024</h3>
            <h2 className="text-[1.3em] sm:text-[2em]">Sajno.co</h2>
            <div className="text-[1em] sm:text-[1.2em] opacity-[.8] flex flex-col gap-4 sm:gap-5 pt-5 sm:pt-7">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eos voluptatum praesentium beatae
                aperiam
                hic, nulla similique ipsa nostrum voluptatibus totam repellendus ut magnam tenetur incidunt, dolore,
                eveniet facere aspernatur.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet accusamus error.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
          <div className="project w-full sm:w-[35vw] h-[40vh] sm:h-[45vh] bg-black flex-shrink-0">
            <img className="object-cover w-full h-full" src="../images/projectImg4.jpg" alt="" />
          </div>
          <div className="project_content w-full sm:w-[40vw] flex flex-col gap-2 mt-6 sm:mt-0">
            <h3 className="text-[1.1em] sm:text-[1.2em] opacity-[.8]">2024</h3>
            <h2 className="text-[1.3em] sm:text-[2em]">Sajno.co</h2>
            <div className="text-[1em] sm:text-[1.2em] opacity-[.8] flex flex-col gap-4 sm:gap-5 pt-5 sm:pt-7">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eos voluptatum praesentium beatae
                aperiam
                hic, nulla similique ipsa nostrum voluptatibus totam repellendus ut magnam tenetur incidunt, dolore,
                eveniet facere aspernatur.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet accusamus error.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;

