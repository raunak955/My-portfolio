function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080811] text-white">
      {/* Navbar */}
     <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080811]/90 px-6 py-4 shadow-lg shadow-purple-950/20 backdrop-blur-2xl md:px-16">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
    <a href="#home" className="text-2xl font-bold tracking-wide">
      Welcome To My Journey💖<span className="text-purple-500">.</span>
    </a>

    <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
      <a href="#home" className="transition hover:text-purple-400">Home</a>
      <a href="#about" className="transition hover:text-purple-400">About</a>
      <a href="#skills" className="transition hover:text-purple-400">Skills</a>
      <a href="#projects" className="transition hover:text-purple-400">Projects</a>
    </div>
    <a
      href="#contact"
      className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold transition hover:bg-purple-500"
    >
      Let's Talk ↗
    </a>
  </div>
</nav>

      {/* Hero Section */}
      <main className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-16">
        {/* Left Content */}
        <section>
          <p className="mb-5 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ✨ Welcome to my portfolio💖
          </p>

          
     
     <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl animate-slide-left">
     Hi, I'm
     <span className="mt-2 block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Raunak Aryan
    </span>
    </h2>



          <h3 className="mt-5 text-xl font-semibold text-gray-300 sm:text-2xl">
            Frontend Developer
          </h3>

          <p className="mt-5 max-w-lg leading-7 text-gray-400">
            I build modern, responsive and user-friendly web
            experiences using React, JavaScript and Tailwind CSS.
            I'm passionate about learning and creating beautiful
            websites.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-purple-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-400">
            <span className="hover:text-purple-400">React.js</span>
            <span className="hover:text-purple-400">JavaScript</span>
            <span className="hover:text-purple-400">Tailwind CSS</span>
          </div>
        </section>

        {/* Right: Profile Photo */}
        <section className="flex justify-center">
         <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-400 p-1 shadow-2xl shadow-purple-500/40 transition duration-500 hover:scale-105 hover:shadow-blue-500/40 sm:h-80 sm:w-80">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#11111f]">
              <img
                src="my_image.png"
                alt="My profile"
                className="h-full w-full object-cover mt-3"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

            </div>
          </div>
        </section>
      </main>
      
      {/* About Section */}
    <section id="about" className="px-6 py-16 md:px-16">
    <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-3xl font-bold">
      About <span className="text-purple-400">Me</span>
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
      I'm an aspiring Frontend Developer passionate about building
      modern and responsive websites using React and Tailwind CSS.
    </p>
    </div>
   </section>
     
     {/* skill section */}
     <section id="skills" className="px-6 py-10 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold">My <span className="text-purple-400">skills</span></h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            "HTML5",
            "CSS3",
            "Javascript",
            "React.js",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill) =>(
            <span
            key={skill}
            className="rounded-full border border-purple-500/3 bg-white/5 px-5 py-2 text-sm text-gray-300 transition 
            hover:border-purple-400 hover:text-purple-400"
            >{skill}</span>
          ))
          }
        </div>
      </div>
     </section>
   

   {/* project section */}
   <section id="projects" className="px-6 py-12 md:px-16">
    <div className="mx-auto mx-w-5xl">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-purple-400">My Work</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Featured <span className="text-purple-400">Projects</span></h2>

        <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">Some projects I've built while learning web development </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {/* Notes App */}
        <div className="group rounded-xl border border-white/10 bg-linear-to-br from-white/10 to-purple-500/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10">
          <h3 className="mt-4 text-lg font-semibold">Notes App</h3>
          <p className="mt-2 text-sm leading-6 text-gray-400">A React notes application with 
          add, edit, delete, pin 
              and search feature</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React","Javascript","Tailwind CSS"].map((tech) =>(
                  <span 
                  key={tech}
                  className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >{tech}</span>
                ))}
              </div>
        </div>

        {/* expence tracker */}
        <div className="group rounded-xl border border-white/10 bg-linear-to-br from-white/10 to-blue-500/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue -500/10">
          <h3 className="mt-4 text-lg font-semibold">Expense Tracker</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">A simple expense management app to add, delete, search and track expenses.</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React","Javascript","Tailwind CSS"].map((tech) =>(
                  <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                  >
                    {tech}</span>
                ))}
          </div>
        </div>
      </div>
    </div>
   </section>

   {/* contact section */}
   <section id="contact" className="px-6 py-12 md:px-16">
    <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-6 text-center sm:p-8">
      <p className="text-sm uppercase tracking-widest text-purple-400">Get In Touch</p>

      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Let's Work <span className="text-purple-400">Together</span></h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">I'm looking forward to learning building projects and exploring new opportunities in web development</p>

      <a 
      className="mt-5 inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold transition hover:bg-purple-500"
       href="mailto:raunakaryan810@gmail.com">Email Me.. </a>
    </div>
   </section>

   {/* footer */}
   <footer className="border-t border-white/10 px-6 py-5 text-center text-sm text-gray-500">
    <p>&copy; 2026 Raunak Aryan. Build with React & Tailwind CSS.</p>
   </footer>
    </div>
  );
}

export default App;