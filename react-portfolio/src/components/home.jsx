import { useEffect } from "react";
import ImgJean from "../assets/jean.png";
import About from "../components/about";
import Project from "./project";
import Skills from "./skills";
import Contact from "./contact";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-container", {
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          color: { value: "#3d3c3d" },
          line_linked: {
            enable: true,
            color: "#3d3c3d",
          },
        },
      });
    } else {
      console.error("particles.js not loaded");
    }

    const handleScroll = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const project = document.getElementById("project");
      const skill = document.getElementById("skill");
      const contact = document.getElementById("contact");
      if (window.scrollY > 100) {
        console.log(home.classList);
        home.classList.add("nav-color-mocha");
        home.classList.remove("nav-color-dark-violet");

        about.classList.add("nav-color-mocha");
        about.classList.remove("nav-color-dark-violet");

        project.classList.add("nav-color-mocha");
        project.classList.remove("nav-color-dark-violet");

        skill.classList.add("nav-color-mocha");
        skill.classList.remove("nav-color-dark-violet");

        contact.classList.add("nav-color-mocha");
        contact.classList.remove("nav-color-dark-violet");
      } else {
        home.classList.add("nav-color-dark-violet");
        home.classList.remove("nav-color-mocha");

        about.classList.add("nav-color-dark-violet");
        about.classList.remove("nav-color-mocha");

        project.classList.add("nav-color-dark-violet");
        project.classList.remove("nav-color-mocha");

        skill.classList.add("nav-color-dark-violet");
        skill.classList.remove("nav-color-mocha");

        contact.classList.add("nav-color-dark-violet");
        contact.classList.remove("nav-color-mocha");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeClick = () => {
    console.log("Home button clicked");
    window.location.href = "#";
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("aboutSection");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleProjectClick = () => {
    const projecttSection = document.getElementById("projectSection");
    projecttSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSkillClick = () => {
    const skillSection = document.getElementById("skillSection");
    skillSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contactSection");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="m-0 p-0">
      <div id="particles-container" className="vh-100 z-1 particles"></div>
      <div className="row p-0 m-0 vh-100 w-100 flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse">
        <div className="col-lg-8 col-12 bg-dark-violet d-flex justify-content-center p-0 m-0 h-lg-50 ">
          <div className="col-xl-8 col-lg-10 col-md-10 col-sm-10 col-12 text-white z-2 container-md">
            <div>
              <h1 className="fs-50 text-container-1">Hi! I'm Jean</h1>
              <h2 className="text-container-2">
                I'm <span className="text-teal">CLOUD ENGINEER</span>{" "}
                <span className="fs-02">at Ogis Ph</span>
              </h2>
              <p className="fs-02 text-container-3">
                Passionate about Web Development, and I want to pursue
              </p>
              <p className="fs-02 text-container-4">
                a career as a WEB DEVELOPER.
              </p>
              <div className="btn-parent-container">
                <div className="w-10">
                  <div className="btn-container">
                    <button className="z-3 btn-cv">Download CV</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="img-container z-2">
              <img src={ImgJean} className="img-jean img-fluid" alt="Jean" />
            </div>
            <div className="img-border"></div>
            <div className="img-border-5"></div>
          </div>
        </div>
        <div className="col-lg-4 col-12 bg-mocha p-0 m-0">
          <div className="">
            <div className="nav-parent-container d-lg-block d-md-flex d-flex z-3">
              <div className="nav-container">
                <div className="">
                  <button
                    onClick={handleHomeClick}
                    className="nav-child nav-color-dark-violet"
                    id="home"
                  >
                    <div className="nav-text-home">
                      <i className="bi bi-house-door-fill px-2"></i>
                    </div>
                  </button>
                </div>
              </div>

              <div className="nav-container">
                <div className="">
                  <button
                    onClick={handleAboutClick}
                    className="nav-child nav-color-dark-violet"
                    id="about"
                  >
                    <div className="nav-text-about">
                      <i className="bi bi-person-bounding-box px-2"></i>
                    </div>
                  </button>
                </div>
              </div>

              <div className="nav-container">
                <div className="">
                  <button
                    onClick={handleProjectClick}
                    className="nav-child nav-color-dark-violet"
                    id="project"
                  >
                    <div className="nav-text-project">
                      <i className="bi bi-code-square px-2"></i>
                    </div>
                  </button>
                </div>
              </div>

              <div className="nav-container">
                <div className="">
                  <button
                    onClick={handleSkillClick}
                    className="nav-child nav-color-dark-violet"
                    id="skill"
                  >
                    <div className="nav-text-skill">
                      <i className="bi bi-person-check-fill px-2"></i>
                    </div>
                  </button>
                </div>
              </div>
              {/* 
              <div className="nav-container">
                <div className="">
                  <button
                    onClick={handleContactClick}
                    className="nav-child nav-color-dark-violet"
                    id="contact"
                  >
                    <div className="nav-text-contact">
                      <i className="bi bi-telephone-fill px-2"></i>
                    </div>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="" id="aboutSection">
        <About />
      </div>

      <div className="" id="projectSection">
        <Project />
      </div>

      <div className="" id="skillSection">
        <Skills />
      </div>

      <div className="" id="contactSection">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
