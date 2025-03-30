import React from "react"; 

function Skill() {
  return (
    <div
      id="section3"
      className="bg-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center flex-wrap px-4"
    >
      <div className="w-full md:w-1/2 lg:w-1/3 min-h-[50vh] flex flex-col items-center">
        <div className="w-full min-h-[20%] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Here Are Some of My Skills
          </h1>
        </div>

        <div className="w-full min-h-[80%] flex flex-col gap-4">
          {/* Skill Sections */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center">
              <h1 className="text-md md:text-lg font-medium">1 - Front End Development</h1>
              <ul className="list-disc text-sm md:text-base font-normal text-gray-600 text-left">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>React.js</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center text-center">
              <h1 className="text-md md:text-lg font-medium">2 - Web Animation</h1>
              <ul className="list-disc text-sm md:text-base font-normal text-gray-600 text-left">
                <li>GSAP</li>
                <li>ScrollTrigger</li>
                <li>Swiper.js</li>
                <li>Locomotive.js</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center">
              <h1 className="text-md md:text-lg font-medium">3 - Back End Development</h1>
              <ul className="list-disc text-sm md:text-base font-normal text-gray-600 text-left">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center text-center">
              <h1 className="text-md md:text-lg font-medium">4 - Editing Software</h1>
              <ul className="list-disc text-sm md:text-base font-normal text-gray-600 text-left">
                <li>VS Code</li>
                <li>Premiere Pro</li>
                <li>Photoshop</li>
                <li>Canva</li>
                <li>Figma (Basics)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-64 md:w-80 lg:w-96">
          <img
            src="https://i.pinimg.com/736x/0b/86/23/0b862310cc66749a77abf9f3b7e65cd4.jpg"
            alt="Skills"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
