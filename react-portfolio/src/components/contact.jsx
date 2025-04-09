import React, { useEffect } from "react";

function contact() {
  
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
    <div className="row p-0 m-0 bg-dark-green">
      {/* <div>
        <div className="fs-4 text-center text-mocha text-center"></div>
        <div className="fs-1 fw-bold text-mocha text-center">Get in Touch</div>
      </div> */}

      <div className=" p-0 m-0 text-mocha">
       {/*  <div className=" d-flex justify-content-center">
          <form>
            <div className="form-group">
              <div>
                <label for="exampleInputEmail1" className="py-2">
                  Full Name
                </label>
              </div>

              <div>
                <input
                  type="text"
                  className=" contact"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label for="exampleInputEmail1" className="py-2">
                  Email
                </label>
              </div>

              <div>
                <input
                  type="email"
                  className=" contact"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label for="exampleInputEmail1" className="py-2">
                  Message
                </label>
              </div>

              <div>
                <textarea className=" text-area "></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div> */}

        <div className="d-flex align-items-center justify-content-center mt-3 p-4 row">
          <div className="d-flex p-2 col-lg-3 col-md-3 col-sm-6 col-6 justify-content-center">
            <div className=" ">
              <i class="bi bi-telephone-fill px-2"></i>
            </div>
            <div className="px-2">+639051028936</div>
          </div>
          <div className="d-flex p-2 col-lg-3 col-md-3 col-sm-6 col-6 justify-content-center">
            <div className="">
              <i class="bi bi-envelope-at-fill px-2"></i>
            </div>
            <div className="px-2">praycojean25@gmail.com</div>
          </div>
          <div className="d-flex p-2 col-lg-3 col-md-3 col-sm-6 col-6 justify-content-center">
            <div className="">
              <i class="bi bi-linkedin px-2"></i>
            </div>
            <a className="px-2 a-tag" href="https://www.linkedin.com/in/jean-rose-prayco-53b0ab193/" target="_blank">Jean Rose Prayco</a>
          </div>
          <div className="d-flex p-2 col-lg-3 col-md-3 col-sm-6 col-6 justify-content-center">
            <div className="">
              <i class="bi bi-facebook px-2"></i>
            </div>
            <a className="px-2 a-tag" href="https://www.facebook.com/praycojeanrose" target="_blank">Jeanrose Prayco</a>
          </div>
        </div>

        <div className="bg-mocha d-flex justify-content-center text-black p-3">
          <div>Created By <span className="fw-bold">JeanRosePrayco</span>  | <i class="bi bi-c-circle"></i> 2025 All right reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default contact;
