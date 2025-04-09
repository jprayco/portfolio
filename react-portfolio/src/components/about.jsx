import { useEffect } from "react";

function about() {
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
    <div>
      <div className="p-0 m-0 bg-code">
        <div className="text-mocha">
          <div className="d-flex justify-content-center">
            <div>
              <div className="p-2 fs-4 text-center">About Me</div>
              <div className="fs-1 fw-bold">My Career Journey</div>
            </div>
          </div>

          <div className="reveal">
            <div className="sm-none p-5">
              <div className="d-flex justify-content-center">
                <div className="row m-0 p-0 w-15 col-10">
                  <div className="col-3 p-0 m-0 ">
                    <div className="h-40 about-border-bottom d-flex align-items-end">
                      <div className="grad-date-container">
                        <div className="grad-date">
                          <p className="grad-year p-0 m-0">
                            Intern at Technomancer Inc
                          </p>
                          <small className="m-0 p-0">
                            February 2023 - May 2023
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="h-40">
                      <div className="p-3">
                        <p className="text-teal grad-year p-0 m-0">
                          Intern at Technomancer Inc
                        </p>
                        <div className="fs-10">
                          During my internship, I was trained in Laravel and
                          developed web application features that could be
                          applied to our clients' needs.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 p-0 m-0">
                    <div className="">
                      <div className="h-40 d-flex align-items-end about-border-bottom">
                        <div className="p-3">
                          <p className="text-teal grad-year p-0 m-0">
                            Graduated with a BSIT degree
                          </p>
                          <div className="fs-10">
                            I graduated from Bulacan State University - Meneses
                            Campus with Latin honors as a Cum Laude.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-40">
                      <div className="ojt-date-container">
                        <div className="ojt-date">
                          <div>
                            <p className="grad-year p-0 m-0">
                              Graduated with a BSIT degree
                            </p>
                            <small className="m-0 p-0">June 2023</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 p-0 m-0 ">
                    <div className="h-40 about-border-bottom  d-flex align-items-end">
                      <div className="grad-date-container">
                        <div className="grad-date">
                          <p className="grad-year p-0 m-0">
                            Software QA at Technomancer
                          </p>
                          <small className="m-0 p-0">
                            June 2023 - March 2024
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="h-40">
                      <div className="p-3">
                        <p className="text-teal grad-year p-0 m-0">
                          Software QA at Technomancer
                        </p>
                        <div className="fs-10">
                          As a Quality Assurance Analyst, I gained expertise in
                          software testing, defect tracking, and ensuring
                          product quality, strengthening my understanding of the
                          software development life cycle.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 p-0 m-0">
                    <div className="">
                      <div className="h-40 d-flex align-items-end about-border-bottom">
                        <div className="p-3">
                          <p className="text-teal grad-year p-0 m-0">
                            Jr. Cloud Engineer at Ogis PH
                          </p>
                          <div className="fs-10">
                            {" "}
                            As a Jr. Cloud Engineer, I managed clients' cloud
                            servers on AWS and Huawei, performed backup and
                            restore, set up cloud servers for SAP B1 migration,
                            and implemented automation.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-40">
                      <div className="ojt-date-container">
                        <div className="ojt-date">
                          <div>
                            <p className="grad-year p-0 m-0">
                              Jr. Cloud Engineer at Ogis PH
                            </p>
                            <small className="m-0 p-0">
                              March 2024 - At Present
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sm-show reveal">
              <div className="padding-5">
                <div className="d-flex justify-content-center ">
                  <div className="row m-0 p-0 w-15 ">
                    <div className="col-6 p-3 m-0 border-right">
                      <div className="ojt-date">
                        <div>
                          <p className="grad-year p-0 m-0">
                            Jr. Cloud Engineer at Ogis PH
                          </p>
                          <small className="m-0 p-0">
                            March 2024 - At Present
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 p-3 m-0 border-bottom-right">
                      <div className="p-3">
                        <p className="text-teal grad-year p-0 m-0">
                          Jr. Cloud Engineer at Ogis PH
                        </p>
                        <div className="fs-10">
                          As a Jr. Cloud Engineer, I managed clients' cloud
                          servers on AWS and Huawei, performed backup and
                          restore, set up cloud servers for SAP B1 migration,
                          and implemented automation.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center ">
                  <div className="row m-0 p-0 w-15 ">
                    <div className="col-6 p-3 m-0 border-right border-bottom-left">
                      <div className="p-3">
                        <p className="text-teal grad-year p-0 m-0">
                          Software QA at Technomancer
                        </p>
                        <div className="fs-10">
                          As a Quality Assurance Analyst, I gained expertise in
                          software testing, defect tracking, and ensuring
                          product quality, strengthening my understanding of the
                          software development life cycle.
                        </div>
                      </div>
                    </div>

                    <div className="col-6 p-3 m-0">
                      <div className="grad-date">
                      <div>
                      <p className="grad-year p-0 m-0">
                          Software QA at Technomancer
                        </p>
                        <small className="m-0 p-0">
                          June 2023 - March 2024
                        </small>
                      </div>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center ">
                  <div className="row m-0 p-0 w-15 ">
                    <div className="col-6 p-3 m-0 border-right">
                    <div className="ojt-date">
                          <div>
                            <p className="grad-year p-0 m-0">
                              Graduated with a BSIT degree
                            </p>
                            <small className="m-0 p-0">June 2023</small>
                          </div>
                        </div>
                    </div>
                    <div className="col-6 p-3 m-0 border-bottom-right">
                    <div className="p-3">
                          <p className="text-teal grad-year p-0 m-0">
                            Graduated with a BSIT degree
                          </p>
                          <div className="fs-10">
                            I graduated from Bulacan State University - Meneses
                            Campus with Latin honors as a Cum Laude.
                          </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center ">
                  <div className="row m-0 p-0 w-15 ">
                    <div className="col-6 p-3 m-0 border-right border-bottom-left">
                      <div className="p-3">
                        <p className="text-teal grad-year p-0 m-0">
                          Intern at Technomancer Inc
                        </p>
                        <div className="fs-10">
                          During my internship, I was trained in Laravel and
                          developed web application features that could be
                          applied to our clients' needs.
                        </div>
                      </div>
                    </div>

                    <div className="col-6 p-3 m-0">
                      <div className="grad-date">
                      <div>
                      <p className="grad-year p-0 m-0">
                          Intern at Technomancer Inc
                        </p>
                        <small className="m-0 p-0">
                          February 2023 - May 2023
                        </small>
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
    </div>
  );
}

export default about;
