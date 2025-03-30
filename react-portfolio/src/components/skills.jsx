import React from "react";
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

function skills() {
  return (
    <div className="row p-0 m-0 vh-100 bg-dark-violet">
      <div>
        <div className="p-2 fs-4 text-center text-mocha text-center">
          Skills
        </div>
        <div className="fs-1 fw-bold text-mocha text-center">
          Technologies in which I am capable
        </div>
        <div className="d-flex justify-content-center align-items-center vh-70">
          <div className="row text-mocha col-11">
            <div className="col-6  d-flex justify-content-center ">
              <div className="w-100">

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">HTML</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={html} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">99%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child html-bar"></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">CSS</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={css} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">97%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child css-bar" style={{width: "97%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">JavaScript</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={js} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">95%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child js-bar" style={{width: "95%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">Bootstrap</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={bootstrap} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">99%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child bootstrap-bar" style={{width: "99%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">jQuery</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={jquery} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">98%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child jquery-bar" style={{width: "98%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">PHP</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={php} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">90%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child php-bar" style={{width: "90%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">Laravel</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={laravel} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">80%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child laravel-bar" style={{width: "80%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6  d-flex justify-content-center ">
              <div className="w-100">

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">MySQL</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={mysql} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">90%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child mysql-bar" style={{width: "90%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">AWS EC2</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={ec2} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">90%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child ec2-bar" style={{width: "90%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h4 className=" p-0 m-0">AWS Lambda</h4>
                  </div>
                  <div className="img-skills col-1">
                    <img src={lambda} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">80%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child lambda-bar" style={{width: "80%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h5 className=" p-0 m-0">AWS S3</h5>
                  </div>
                  <div className="img-skills col-1">
                    <img src={s3} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">90%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child s3-bar" style={{width: "90%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h5 className=" p-0 m-0">AWS API Gateway</h5>
                  </div>
                  <div className="img-skills col-1">
                    <img src={api} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">80%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child api-bar" style={{width: "80%"}}></div>
                    </div>
                  </div>
                </div>

                <div className="d-flex w-100 justify-content-center align-items-end my-3 row">
                  <div className="h-10 col-4 d-flex justify-content-end">
                    <h5 className=" p-0 m-0">AWS Cognito</h5>
                  </div>
                  <div className="img-skills col-1">
                    <img src={cognito} alt="html" className="img-fluid" />
                  </div>
                  <div className="col-7 ">
                    <div className="w-100 d-flex">
                      <small className="">80%</small>
                    </div>

                    <div className="bar">
                      <div className="bar-child cognito-bar" style={{width: "80%"}}></div>
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
