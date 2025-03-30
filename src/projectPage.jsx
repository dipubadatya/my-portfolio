import React from "react";
import NavBar from "./navBar";
import ProjectCard from "./projectCard";
import Contact from "./contact";

const projectPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* <NavBar /> */}

      <div className=" min-h-screen flex gap-7.5  items-center justify-center flex-wrap bg-[#ececec] py-7">
        {/* /////section1 */}

        <div className="w-full h-fi">
          <div
            className="flex items-center
   justify-center"
          >
            <h1 className="text-3xl h-[50px] font-semibold">Selected Projects</h1>
          </div>

          <div className="w-full h-fit flex items-center justify-center p-5 flex-wrap gap-5">
            <ProjectCard
              title="CureIt"
              tech="HTML, CSS, JS, Nodejs, Express and gemeniAi"
              image="/public/imgs/cureit.png"
              description="CureIt is a platform that helps users understand their medications easily.
              i specially made for my father"
              githubLink="https://github.com/your-repo"
              liveLink="https://cureit-web-app.onrender.com/"
            />

            <ProjectCard
              title="Diary-Story writer"
              tech="HTML,CSS,EJS,Express,Node.js, mongodb and tailwind laibarys"
              image="/public/imgs/diary.png"
              description="This is a full-stack collaboration project that I developed together with my brother. I worked on the frontend, while my brother handled the backend."
              liveLink="https://diary-web-app-y99b.onrender.com/"
            />

            <ProjectCard
              title="BatMan-FanPage"
              tech="HTML,CSS,Gsap and Scrolltrigger"
              image="/public/imgs/batman-fanpage.png"
              description="An interactive website showcasing Batman frenchize"
              githubLink="https://github.com/pstarz7/moviebuff"
              liveLink="https://the-batman12.netlify.app/"
            />
          </div>
        </div>

        {/* /////section2 */}

        <div className="w-full h-fi">
          <div
            className="flex items-center
   justify-center"
          >
            <h1 className="text-3xl h-[50px] font-semibold">UI Front-end projects</h1>
          </div>
          <div className="w-full h-fit p-10 flex items-center justify-center flex-wrap gap-5">
            <ProjectCard
              title="Aniweve Naruto Fanpage-UI"
              tech="HTML,CSS,js"
              image="/public/imgs/aniwave7.png"
              description="A vibrant and dynamic fanpage UI celebrating Naruto phots and quotes"
              githubLink="https://github.com/pstarz7/ANIWEVE"
              liveLink="https://aniwave7.netlify.app/"
            />
                 <ProjectCard
              title="Property Landing-page"
              tech="HTML,CSS,JS,GSAP And ScrollTrigger"
              image="/public/imgs/atlanaicui.png"
              description="A beautifully designed landing page for showcasing and selling properties, villas, and houses with an elegant, user-friendly UI that enhances the browsing experience."
              githubLink="https://github.com/pstarz7/ATLANTI-UI"
              liveLink="https://chimerical-tanuki-6fc385.netlify.app/"
            />
            <ProjectCard
              title=" laibarey web"
              tech="HTML,CSS and js"
              image="/public/imgs/sanUi.png"
              description="this website is a model agency UI for laptob or destop"
              githubLink="https://github.com/pstarz7/SAN-UI"
              liveLink="https://calm-entremet-634b3c.netlify.app/"
            />

            <ProjectCard
              title="piretcoder Edtech"
              tech="HTML,CSS,locomotivejs"
              image="/public/imgs/piretedcoder.png"
              description="A clean and modern UI design for an educational platform"
              githubLink="https://github.com/pstarz7/piretpiretcoder"
              liveLink="https://tangerine-bavarois-4789c0.netlify.app/"
            />

<ProjectCard
              title="Furniture Landing-page"
              tech="HTML,CSS,GSAP And ScrollTrigger"
              image="/public/imgs/nirakar-and-sons.png"
              description="This landing page website for local Furniture maker or carpenter"
              githubLink="https://github.com/pstarz7/ATLANTI-UI"
              liveLink="https://nirakar-and-sons.netlify.app/"
            />

        
            <ProjectCard
              title="kindergarden web"
              tech="HTML,CSS and js"
              image="/public/imgs//sanEdu.png"
              description="A colorful and playful UI designed for kindergarten websites, "
              githubLink="https://github.com/pstarz7/kindergarden-web-ui"
              liveLink="https://willowy-pegasus-176cb5.netlify.app/"
            />

<ProjectCard
              title="Model agency UI"
              tech="HTML,CSS"
              image="/public/imgs/premier ui.png"
              description="A sleek and professional UI showcasing model portfolios .this one only for desktop"
              githubLink="https://github.com/your-cricket-repo"
              liveLink="https://jazzy-fairy-ef8596.netlify.app/"
            />

        
          </div>
        </div>

        {/* /////section3 */}
        <div className="w-full h-fi">
          <div
            className="flex items-center
   justify-center"
          >
            <h1 className="text-3xl h-[50px] font-semibold">Others projects</h1>
          </div>
          <div className="w-full h-fit p-10 flex-wrap flex items-center justify-center gap-5">
            <ProjectCard
              title="WeatherApp"
              tech="HTML,CSS.JS and weather Api"
              image="/public/imgs/weather-app.png"
              description="this website is for weather condition"
              githubLink="https://github.com/pstarz7/weather-web"
              liveLink="https://weathapp17.netlify.app/"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default projectPage;
