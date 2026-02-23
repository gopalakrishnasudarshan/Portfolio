"use client";
import { FaJava, FaPython, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiAngular, SiNextdotjs, SiJavascript, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";



export default function Home() {
  // Load saved theme on first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);


  // PROJECT FILTERING LOGIC

  const [filter, setFilter] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const projects = [
    {
      title: "Student Performance Analytics ETL Platform",
      description:
        "An end‑to‑end ETL and analytics pipeline that processes student performance data, exports analytical views to Elasticsearch, and visualizes insights in a Kibana dashboard.",
      tech: "Java, Spring Boot, PostgreSQL, Elasticsearch, Kibana, Docker",
      tags: ["JavaSpring"],
      github: "https://github.com/gopalakrishnasudarshan/Student-Performance-Analytics-ETL-Platform",
    }
    ,
    {
      title: "LOGARG – Logical Argumentation Platform",
      description:
        "A full‑stack system for structured debates, featuring turn‑based argumentation, recursive argument‑tree visualization, and support for both real and mock API modes.",
      tech: "Angular, TypeScript, Spring Boot, MySQL, Bootstrap, RESTful API",
      tags: ["JavaSpring", "Angular"],
      github: "https://github.com/gopalakrishnasudarshan/Logical-Argumentation-UI",
    }
    ,
    {
      title: "Kafka‑Inspired Event‑Driven Bank Ledger",
      description:
        "A low‑level, event‑driven banking ledger built in pure Core Java, featuring TCP networking, append‑only logs, sharded ledgers, offset‑based consumption, and leader‑replica replication with ACK=ALL guarantees.",
      tech: "Core Java, TCP Networking, Concurrency, Multithreading ",
      tags: ["JavaSpring"],
      github: "https://github.com/gopalakrishnasudarshan/Kafka-Inspired-Event-Driven-Bank-Ledger-Core-Java",
    }
    ,
    {
      title: "Differentiable Inverse Rendering for Material Estimation",
      description:
        "A differentiable inverse rendering pipeline that optimizes material parameters of a 3D bunny model including base color, roughness, metallic, and texture maps, using custom optimization scripts and Mitsuba‑based rendering.",
      tech: "Python, Mitsuba Renderer, Blender",
      tags: ["Python"],
      github: "https://github.com/gopalakrishnasudarshan/Differentiable-inverse-rendering-Material-estimation",
    }
    ,
    {
      title: "Merkle Quad‑Tree Based Image Change Detection",
      description:
        "An image change‑detection system that partitions aligned RGB images into quadtree patches, computes perceptual hashes, builds a Merkle Tree, and localizes changes through leaf‑level hash comparisons with visualized outputs.",
      tech: "Python, NumPy, Pillow, ImageHash, Merkle Trees",
      tags: ["Python"],
      github: "https://github.com/gopalakrishnasudarshan/Change-Detection-Using-Merkle-Trees",
    }
    ,
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : filter === "Java & Spring Boot"
        ? projects.filter((p) => p.tags.includes("JavaSpring"))
        : projects.filter((p) => p.tags.includes(filter));


  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">



        {/* Navbar */}
        <nav className="flex items-center py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50">


          <div className="hidden sm:flex gap-6 text-sm ml-auto">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              const root = document.documentElement;
              const current = root.getAttribute("data-theme");
              const next = current === "dark" ? "light" : "dark";
              root.setAttribute("data-theme", next);
              localStorage.setItem("theme", next);
            }}
            className="ml-4 p-2 border border-foreground/30 rounded-md hover:opacity-70 transition"
          >

            {document.documentElement.getAttribute("data-theme") === "dark" ? (
              <FaSun size={16} />
            ) : (
              <FaMoon size={16} />
            )}
          </button>

        </nav>


        {/* Hero */}
        <section
          id="hero"
          className="py-20 flex flex-col-reverse lg:flex-row items-center gap-12 fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I’m Sudarshan
            </h2>

            <p className="text-lg sm:text-xl max-w-xl mb-6 opacity-90">
              A full‑stack developer specializing in Java, Spring Boot, Angular, and modern web technologies.
            </p>

          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/sudarshan.png"
              alt="Sudarshan"
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border border-foreground/20 shadow-xl shadow-foreground/10"
            />
          </div>
        </section>

        <section
          id="about"
          className="py-20 fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto text-center space-y-4 text-lg opacity-90">
            <p>
              I’m a software developer with experience in Java, Spring Boot, SQL, and Angular.
              While I focus mainly on backend engineering, I also build full‑stack applications when needed.
            </p>

            <p>
              I previously worked as a Software Engineer at Mphasis for 3 years and am currently
              pursuing a Master’s in Computer Science for Digital Media at Bauhaus‑Universität Weimar.
            </p>

            <p>
              I have a growing interest in
              <span className="font-semibold"> Computer Vision and Image Analysis</span>,
              especially in understanding and processing visual data.
            </p>

            <p>
              I’m actively looking for working student, internship, or thesis opportunities in backend,
              full‑stack development, or computer vision, and I’m available to join immediately.
            </p>
          </div>
        </section>



        {/* Projects */}
        <section
          id="projects"
          className="py-20 fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Projects
          </h2>

          <div className="flex gap-10">

            {/* Sidebar Filter (Desktop) */}
            <aside className="hidden sm:block w-40">
              <h3 className="font-semibold mb-4">Filter by Tech</h3>
              <ul className="space-y-2 text-sm">
                {["All", "Java & Spring Boot", "Angular", "Python"].map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`cursor-pointer hover:opacity-70 ${filter === cat ? "font-bold underline" : ""
                      }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Mobile Filter */}
            <div className="sm:hidden mb-6 w-full">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="w-full px-4 py-2 border border-foreground/30 rounded-md text-sm"
              >
                Filter: {filter}
              </button>

              {mobileFilterOpen && (
                <ul className="mt-3 space-y-2 text-sm border p-4 rounded-md">
                  {["All", "Java & Spring Boot", "Angular", "Python"].map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setFilter(cat);
                        setMobileFilterOpen(false);
                      }}
                      className={`cursor-pointer hover:opacity-70 ${filter === cat ? "font-bold underline" : ""
                        }`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Project Cards */}
            <div className="grid gap-8 sm:grid-cols-2 flex-1">
              {filteredProjects.map((p, i) => (
                <div
                  key={i}
                  className="border border-foreground/20 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{p.description}</p>
                  <p className="text-sm font-medium mb-4">Tech: {p.tech}</p>

                  <div className="flex gap-4">
                    <a href={p.github} className="text-sm underline hover:opacity-70" target="_blank">
                      GitHub
                    </a>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="py-20 fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-lg opacity-90">

            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-col gap-2 items-center">
                <span className="flex items-center gap-2"><FaJava /> Java</span>
                <span className="flex items-center gap-2"><SiJavascript /> JavaScript</span>
                <span className="flex items-center gap-2"><SiTypescript /> TypeScript</span>
                <span className="flex items-center gap-2"><FaPython /> Python</span>
                <span className="flex items-center gap-2">SQL</span>
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="font-semibold mb-3">Frameworks</h3>
              <div className="flex flex-col gap-2 items-center">
                <span className="flex items-center gap-2"><SiSpringboot /> Spring Boot</span>
                <span className="flex items-center gap-2"><SiAngular /> Angular</span>
                <span className="flex items-center gap-2"><SiNextdotjs /> Next.js</span>
              </div>
            </div>

            {/* Cloud & Tools */}
            <div>
              <h3 className="font-semibold mb-3">Cloud & Tools</h3>
              <div className="flex flex-col gap-2 items-center">
                <span className="flex items-center gap-2"><FaAws /> AWS</span>
                <span className="flex items-center gap-2"><FaDocker /> Docker</span>
                <span className="flex items-center gap-2"><FaGitAlt /> Git</span>
                <span className="flex items-center gap-2">REST APIs</span>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="font-semibold mb-3">Databases</h3>
              <div className="flex flex-col gap-2 items-center">
                <span className="flex items-center gap-2"><SiMysql /> MySQL</span>
                <span className="flex items-center gap-2"><SiPostgresql /> PostgreSQL</span>
              </div>
            </div>

            {/* Testing */}
            <div>
              <h3 className="font-semibold mb-3">Testing</h3>
              <div className="flex flex-col gap-2 items-center">
                <span className="flex items-center gap-2">JUnit</span>
                <span className="flex items-center gap-2">Postman</span>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="font-semibold mb-3">Soft Skills</h3>
              <p className="opacity-80">Problem-solving, Communication, Teamwork</p>
            </div>

          </div>
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="py-20 fade-in"
          style={{ animationDelay: "0.35s" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Resume
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <a
              href="/resume-en.pdf"
              download
              className="px-6 py-3 border border-foreground/30 rounded-md hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2"
            >
              <FaFilePdf /> English
            </a>


            <a
              href="/resume-en.pdf"
              download
              className="px-6 py-3 border border-foreground/30 rounded-md hover:bg-foreground hover:text-background transition-all flex items-center justify-center gap-2"
            >
              <FaFilePdf /> Deutsch
            </a>

          </div>
        </section>


        {/* Contact */}
        <section
          id="contact"
          className="py-20 fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Contact
          </h2>

          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-lg opacity-90">
              Feel free to reach out if you’d like to collaborate, discuss an opportunity,
              or just say hello.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sudarshangopalakrishna@gmail.com"
                className="block text-lg underline hover:opacity-70"
              >
                sudarshangopalakrishna@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/sudarshan-gopalakrishna/"
                target="_blank"
                className="block text-lg underline hover:opacity-70"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/gopalakrishnasudarshan/"
                target="_blank"
                className="block text-lg underline hover:opacity-70"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-sm opacity-60 border-t border-foreground/10 mt-20">
          © {new Date().getFullYear()} Sudarshan — Built with Next.js & Tailwind CSS
        </footer>

      </div>
    </main>
  );
}
