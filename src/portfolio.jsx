import React from "react";
import NavBar from "./navBar";
import Skill from "./skill";
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom"; 
import "./index.css";
import Contact from "./contact";

function Portfolio() {
  return (
    <main className="w-full">
      {/* Section 1 - Hero */}
      <div id="section1" className="w-full">
        {/* <NavBar /> */}
        <div id="hero-section" className="min-h-screen text-white flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">My Name Is</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold">Papu Badatya</h1>
          <h3 className="text-2xl md:text-3xl lg:text-4xl bg-amber-300 font-medium text-white px-4 py-2 rounded-md">I AM FRONT-END DEVELOPER</h3>
        </div>
      </div>

      {/* Section 2 - About */}
      <div id="section2" className="w-full bg-[#ececec] flex flex-col md:flex-row items-center justify-center p-6 gap-10">
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/c8/9f/3f/c89f3fd65214efcb22687824ad7df2dc.jpg"
            alt="Profile"
            className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-xl md:text-2xl bg-amber-300 px-2 py-1 rounded-md">Who I Am</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Hello</h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            As a passionate and detail-oriented Front-End Developer, I specialize in creating responsive, user-friendly websites with a focus on aesthetics and functionality. My expertise lies in HTML, CSS, JavaScript, React.js, Tailwind CSS, and animation libraries like GSAP and ScrollTrigger.
          </p>
        </div>
      </div>

      {/* Section 3 - Skills */}
      <Skill />

      {/* Section 4 - Projects */}
      <div id="section4" className="w-full bg-[#ececec] p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Works</h1>
          <p className="bg-yellow-300 inline-block px-2 py-1 rounded-md">Selected Projects</p>
        </div>

        <div className=" flex items-center gap-6 flex-wrap justify-center">
          <ProjectCard 
            title="CureIt"
            tech="HTML, CSS, JS, Node.js, Express, GeminiAI"
            image="/imgs/cureit.png"
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

        <div className="flex justify-center mt-6">
          <Link to="./projects" className="px-6 py-2 bg-black text-white rounded-3xl font-normal hover:bg-gray-800 transition">More Intresting UI Projects</Link>
        </div>
      </div>

      {/* Section 5 - Education */}
      <div id="section5" className="w-full bg-white p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Education</h1>
        <ul className="text-lg font-normal mt-4 space-y-2">
          <li>Vignan Institute of Technology and Management - Berhampur - EEE - B.Tech</li>
          <li>Kalam Institute of Technology - Berhampur - EE - Diploma</li>
          <li>AceIt - Web Development - Berhampur</li>
        </ul>
      </div>
      
      {/* Section 6 - Contact */}
      <Contact />
    </main>
  );
}

export default Portfolio;