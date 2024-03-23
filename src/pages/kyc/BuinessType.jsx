import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../stylingSheet/Kyc.css";
import Upload from "../../images/kycUpload.png";
import Webcam from "react-webcam";

const steps = [
  "Business Type",
  "Photo Identification",
  "Document Identification",
];

export default function BusinessType() {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState();
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const deletePhoto = () => {
    setImage(null);
  };

  return (
    <>
      <div className="container py-5">
        <p
          style={{
            display: "block",
            fontWeight: "bold",
            marginLeft: "auto",
            marginRight: "auto",
            width: "70%",
          }}
        >
          KYC
        </p>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "red", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "#fff", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "red", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "common.white", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white", // circle's number (ACTIVE)
                  },
                }}
              >
                {/* <StepButton sx={{color: }}/> */}
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {activeStep === 0 && (
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
            }}
            className="border rounded p-3 mt-4"
          >
            <div class="card mt-3">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label fw-bold"
                    for="flexRadioDefault1"
                  >
                    Individual{" "}
                  </label>
                  <p class="card-text opacity-50">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label fw-bold"
                    for="flexRadioDefault1"
                  >
                    Solo Proprietor{" "}
                  </label>
                  <p class="card-text opacity-50">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label fw-bold"
                    for="flexRadioDefault1"
                  >
                    Company{" "}
                  </label>
                  <p class="card-text opacity-50">
                    With supporting text below as a natural lead-in to additiona
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
            }}
            class="card mt-3"
          >
            <div class="card-body">
              <div>
                <p className="fw-bold">Photo Identification</p>
              </div>

            
              <div>
                {image ? (
                  <div>
                    <img src={image} alt="captured" className="takeselfi" />
                    <button
                      className="border rounded p-2 mt-2 takeselfi"
                      onClick={deletePhoto}
                    >
                      Delete Photo
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <Webcam className="border rounded takeselfi"
                      audio={false}
                      height={300}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={350}
                    />
                    <button
                      className="border rounded p-2 mt-2 takeselfi"
                      onClick={capture}
                    >
                      Take Selfi
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <>
            <div
              style={{
                display: "block",
                fontWeight: "bold",
                marginLeft: "auto",
                marginRight: "auto",
                width: "70%",
              }}
            >
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2
                    class="accordion-header fw-bold"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      KYC using GSTIN & TAN number
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <div className="col">
                          <div>
                            <p>GSTIN Number</p>
                            <input
                              style={{
                                width: "350px",
                                fontSize: "14px",
                                fontWeight: "300",
                              }}
                              className="opacity-75 border rounded p-3"
                              type="text"
                              placeholder="Enter your GSTIN number"
                            />
                            <br />
                            <button
                              style={{ fontSize: "14px", fontWeight: "300" }}
                              className="border rounded p-2 mt-3 w-25"
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        <div className="col">
                          <div>
                            <p>TAN Number</p>
                            <input
                              style={{
                                width: "350px",
                                fontSize: "14px",
                                fontWeight: "300",
                              }}
                              className="opacity-75 border rounded p-3"
                              type="text"
                              placeholder="Enter your TAN number"
                            />
                            <br />
                            <button
                              style={{ fontSize: "14px", fontWeight: "300" }}
                              className="border rounded p-2 mt-3 w-25"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "block",
                fontWeight: "bold",
                marginLeft: "auto",
                marginRight: "auto",
                width: "70%",
              }}
              className="mt-4 border rounded"
            >
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header fw-bold" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      KYC by uploading ID & Address Proofs
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div className="d-flex justify-content-between mx-5 mt-2">
                        <p>Document Type</p>
                        <p>Document Type</p>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <select
                            style={{
                              width: "350px",
                              fontSize: "14px",
                              fontWeight: "300",
                            }}
                            className="border rounded p-3 opacity-75"
                          >
                            <option value="">Choose Document Types</option>
                            <option value="aadhar">Aadhaar Card</option>
                            <option value="pan">Pan Card</option>
                            <option value="driving">Driving License</option>
                          </select>
                        </div>

                        <div className="col">
                          <select
                            style={{
                              width: "350px",
                              fontSize: "14px",
                              fontWeight: "300",
                            }}
                            className="border rounded p-3"
                          >
                            <option value="">Choose Document Types</option>
                            <option value="">Aadhaar Card</option>
                            <option value="">Pan Card</option>
                            <option value="">Driving License</option>
                          </select>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div className="mt-4">
                            <p>Document Image</p>
                            <div className="d-flex gap-3">
                              <div>
                                <input
                                  className="filesystem"
                                  type="file"
                                  id="file"
                                />
                                <label className="uploade_image" for="file">
                                  <img
                                    className="logoimage"
                                    src={Upload}
                                    alt=""
                                  />
                                </label>
                              </div>

                              <div>
                                <input
                                  className="filesystem"
                                  type="file"
                                  id="file"
                                />
                                <label className="uploade_image" for="file">
                                  <img
                                    className="logoimage"
                                    src={Upload}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="opacity-75 mt-4">
                            <p>Document Image</p>
                            <div className="d-flex gap-3">
                              <div>
                                <input
                                  className="filesystem"
                                  type="file"
                                  id="file"
                                />
                                <label className="uploade_image" for="file">
                                  <img
                                    className="logoimage"
                                    src={Upload}
                                    alt=""
                                  />
                                </label>
                              </div>

                              <div>
                                <input
                                  className="filesystem"
                                  type="file"
                                  id="file"
                                />
                                <label className="uploade_image" for="file">
                                  <img
                                    className="logoimage"
                                    src={Upload}
                                    alt=""
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="row">
                        <div className="col">
                        <div className="mx-5">
                       
                      </div>
                        </div>

                        <div className="col">
                        <div className="mx-5">
                        <div className="opacity-75 mt-4">
                          <p>Document Image</p>
                        
                         <div className="d-flex gap-3">
                         <div>
                            <input className="filesystem" type="file" id="file" />
                            <label className="uploade_image" for='file'>
                              <img className="logoimage" src={Upload} alt="" />
                            </label>
                          </div>
                          <div>
                            <input className="filesystem" type="file" id="file" />
                            <label className="uploade_image" for='file'>
                              <img className="logoimage" src={Upload} alt="" />
                            </label>
                          </div>
                         </div>

                            

                        </div>
                      </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "70%",
          }}
          className="d-flex justify-content-between mt-3"
        >
          <button
            style={{
              height: "40px",
              width: "100px",
              background: "#C1392B",
              color: "white",
            }}
            disabled={activeStep === 0}
            className="rounded"
            onClick={() => setActiveStep(activeStep - 1)}
          >
            Back
          </button>

          <button
            style={{
              height: "40px",
              width: "130px",
              background: "#444444",
              color: "white",
              cursor: "pointer",
            }}
            className="rounded"
            disabled={activeStep === 2}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            {activeStep === 2 ? "Complete Kyc" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}
