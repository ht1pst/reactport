import React from "react";


function About() {
  return (
    <div id="home" className="bg-black text-[#f5f5f5] font-[Outfit] h-auto pb-10 w-full">
      <header className="bg-black  backdrop-blur-md border-b border-white/10 text-center py-10 px-4 rounded-b-2xl">
        <h1 className="text-3xl md:text-4xl font-bold">Obadua Oluwafunmito</h1>
        <nav className="mt-4 space-x-6">
          <a href="#home" className="hover:text-[#2cb67d] font-semibold">About</a>
          <a href="#projects" className="hover:text-[#2cb67d] font-semibold">Projects</a>
          <a href="#contact" className="hover:text-[#2cb67d] font-semibold">Contact</a>
        </nav>
      </header>
<div className="bg-black">
      <main className="max-w-4xl mx-auto py-5 bg-  ">
        <div className=" border border-white/10 p-[20px] rounded-xl shadow-xl">
          <h2 className="text-3xl md:text-4xl flex justify-center text-center lg:text-start text-green-400 mb-4 font-bold ">Hi, I'm Obadua Oluwafunmito</h2>
          <h3 className="text-xl md:text-2xl text-center flex justify-center mb-6">Front-End Web Developer</h3>
          <p className="text-base md:text-lg text-center leading-relaxed mb-4">
           Welcome to my professional portfolio. I’m a front-end developer with strong expertise in React and Tailwind CSS. I also have solid knowledge of HTML, modern CSS, and JavaScript, which I use to build responsive, user-friendly, and visually engaging web interfaces. I’m passionate about writing clean code and creating smooth user experiences that scale well across devices.
          </p>
          <p className="text-base md:text-lg text-center leading-relaxed mb-4">
            I believe in thoughtful design, maintainable code, and delivering user interfaces that are not only functional but delightful to use. Please take a moment to explore my work and feel free to reach out for potential collaborations or project inquiries.
          </p>
          <p className="text-base md:text-lg text-center leading-relaxed mb-8">
            I'm excited to collaborate with like-minded individuals and companies. I'm open to remote work opportunities and am flexible with compensation structures, including contract work. Let's discuss how we can work together to bring your project to life!
          </p>
        </div>
      </main>

     
    </div>
    </div>
  );
}

export default About;
