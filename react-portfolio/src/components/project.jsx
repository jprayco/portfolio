import React, { useEffect } from "react";
import quizzle from "../assets/quizzle.png";
import goods from "../assets/goods.png";
import tour from "../assets/3d tour.png";

function project() {
    useEffect(() => {
        function reveal() {
          const reveals = document.querySelectorAll(".reveal");
    
          reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
    
            if (elementTop < windowHeight - elementVisible) {
              element.classList.add("active");
            } else {
              element.classList.remove("active");
            }
          });
        }
    
        window.addEventListener("scroll", reveal);
        reveal(); // Run once on mount
    
        return () => {
          window.removeEventListener("scroll", reveal);
        };
      }, []);
      
  return (
    <div className="p-0 m-0 bg-dark-red">
      <div className="p-2 fs-4 text-center text-mocha text-center">
        Projects
      </div>
      <div className="fs-1 fw-bold text-mocha text-center">My Works</div>
      <div className="row m-0 p-5 m-0 d-flex justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 m-0 p-1">
          <div className="project-container">
            <div className="project-img-container reveal ">
              <div className="p-1">
                <div className=" d-flex justify-content-end mb-3">
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    Unity
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    C#
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    Photoshop
                  </div>
                </div>
                <img src={quizzle} alt="quizzle" className="img-fluid img-animate" />
                <div className=" d-flex justify-content-between">
                  <div className="text-mocha">
                    <h5>Quizzle</h5>
                    <small>
                      I created this game during our Game Development subject. 
                    </small>
                    <small>This is combination of quiz and puzzle game.</small>
                  </div>
                  <div className="go-to">
                    <a href="https://drive.google.com/file/d/1Vs1x4Iaz5j4Qv17CYhjuCq-j1avdwn6s/view" target="_blank">
                      <i class="bi bi-arrow-up-right-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 m-0 p-1">
          <div className="project-container">
            <div className="project-img-container reveal">
              <div className="p-1">
                <div className=" d-flex justify-content-end mb-3">
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    HTML
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    CSS
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    jQuery
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    Bootstrap
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    PHP
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    MySQL
                  </div>
                </div>
                <img src={goods} alt="goods" className="img-fluid" />
                <div className=" d-flex justify-content-between">
                  <div className="text-mocha">
                    <h5>E-barter</h5>
                    <small>
                    This is my capstone project. 
                    </small>
                    <small>This system is an E-barter app where your can trade you item to other people.</small>
                  </div>
                  <div className="go-to">
                    <a href="https://www.youtube.com/watch?v=saj6CVmePV4" target="_blank">
                      <i class="bi bi-arrow-up-right-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 m-0 p-1">
          <div className="project-container">
            <div className="project-img-container reveal">
              <div className="p-1">
                <div className=" d-flex justify-content-end mb-3">
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    HTML
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    CSS
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                    JavaScript
                  </div>
                  <div className="bg-mocha rounded text-center opacity-75 p-1 mx-1">
                   Panolens.js
                  </div>
                </div>
                <img src={tour} alt="quizzle" className="img-fluid" />
                <div className=" d-flex justify-content-between">
                  <div className="text-mocha">
                    <h5>Virtual House</h5>
                    <small>
                    I created this project during my intership. 
                    </small>
                    <small>In this system you can virtually explore inside the house.</small>
                  </div>
                  <div className="go-to">
                    <a href="https://technomancer.biz/poc/house" target="_blank">
                      <i class="bi bi-arrow-up-right-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default project;
