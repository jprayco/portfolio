import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import jquery from "../assets/jquery.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import mysql from "../assets/mysql.png";
import ec2 from "../assets/ec2.png";
import lambda from "../assets/lambda.png";
import s3 from "../assets/s3.png";
import api from "../assets/api.png";
import cognito from "../assets/cognito.png";
import react from "../assets/react.png";

function skills() {
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
    <div className="row p-0 m-0 bg-dark-violet">
      <div>
        <div className="p-2 fs-4 text-center text-mocha text-center">
          Skills
        </div>
        <div className="fs-1 fw-bold text-mocha text-center">
          Technologies in which I am capable
        </div>
        <div className="reveal">
          <div className="d-flex justify-content-center my-5">
            <div className="text-mocha col-lg-7 col-md-9 col-sm-10 col-12">
              <div>
                <h5 className="fw-bold">Front End</h5>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row m-0 col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={html} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">HTML</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={css} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">CSS</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={js} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">JavaScript</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={bootstrap} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">Bootstrap</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={jquery} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">jQuery</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={react} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">React JS</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-5">
            <div className="text-mocha col-lg-7 col-md-9 col-sm-10 col-12">
              <div>
                <h5 className="fw-bold">Backend</h5>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row m-0 col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={php} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">PHP</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={laravel} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">Laravel</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={mysql} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">MySQL</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={lambda} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">AWS Lambda</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-center my-3">
                      <div className="img-skills mx-1">
                        <img src={api} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">AWS API Gateway</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={cognito} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">Cognito</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center my-5">
            <div className="text-mocha col-lg-7 col-md-9 col-sm-10 col-12">
              <div>
                <h5 className="fw-bold">Cloud</h5>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row m-0 col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={ec2} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">AWS EC2</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="d-flex w-100 align-items-end my-3">
                      <div className="img-skills mx-1">
                        <img src={s3} alt="html" className="img-fluid" />
                      </div>
                      <div className="h-10 d-flex justify-content-end">
                        <h6 className=" p-0 m-0">AWS S3</h6>
                      </div>
                    </div>
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

export default skills;
