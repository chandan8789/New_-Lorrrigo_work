import React, { useContext } from "react";
import building from "../../images/clarity_building-line.png";
import mdi from "../../images/mdi_account-payment-outline (1).png";
import { navbarOpenContext } from "../../App";

const Setting_Page = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "rgba(237, 239, 239, 1)",
          fontFamily: "IBM Plex Sans Condensed",
        }}
      >
        <div
          className="container py-4"
          style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        >
          <p style={{ fontSize: "25px" }} className="fw-bold mx-5">
            Settings
          </p>
          <div class="row row-cols-1 row-cols-md-3 g-3 mx-5">
            <div class="col">
              <div
                className="card mt-2 py-2"
                style={{
                  width: "320px",
                  boxShadow:
                    "0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="d-flex gap-2">
                    <img
                      style={{ height: "35px", width: "36px" }}
                      src={building}
                      alt=""
                    />
                    <div className="d-flex justify-content-between">
                      <p style={{ fontSize: "18px" }} className="mt-2 fw-bold">
                        Company
                      </p>
                    </div>
                    {/* <p className="mx-auto"><i class="bi bi-info-circle"></i></p> */}
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text mx-1"
                    >
                      Company Profile
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      class="card-text"
                    >
                      KYC
                    </p>
                    <i
                      style={{ marginLeft: "70px" }}
                      className="bi bi-chevron-right"
                    ></i>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text"
                    >
                      Change Password
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                className="card mt-2 py-2"
                style={{
                  width: "320px",
                  boxShadow:
                    "0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="d-flex gap-2">
                    <img
                      style={{ height: "35px", width: "36px" }}
                      src={mdi}
                      alt=""
                    />
                    <p style={{ fontSize: "18px" }} className="mt-2 fw-bold">
                      Cod Payment
                    </p>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text mx-3"
                    >
                      Bank Details
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text mx-2"
                    >
                      PostPaid
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                className="card mt-2 py-2"
                style={{
                  width: "320px",
                  boxShadow:
                    "0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",
                  border: "none",
                }}
              >
                <div className="card-body">
                  <div className="d-flex gap-2">
                    <img
                      style={{ height: "35px", width: "36px" }}
                      src={mdi}
                      alt=""
                    />
                    <p style={{ fontSize: "18px" }} className="mt-2 fw-bold">
                      Billing
                    </p>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text mx-3"
                    >
                      GSTIN Invoicing
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                  <div className="d-flex justify-content-around">
                    <p
                      style={{ fontSize: "15px", fontWeight: "500" }}
                      className="card-text mx-3"
                    >
                      Billing Address
                    </p>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row row-cols-1 row-cols-md-3 g-3 mx-5 mt-3">
            <div class="col">
            <div className="card mt-2 py-2" style={{width:"320px", boxShadow:"0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",border: "none"}}>
              <div className="card-body">
                <div className="d-flex gap-2">
                  <img style={{height:"35px", width:"36px"}} src={building} alt="" />
                  <p style={{fontSize:"18px"}} className="mt-2 fw-bold">Company</p>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text mx-1">Company Profile</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} class="card-text">KYC</p>
                  <i style={{marginLeft:"70px"}} className="bi bi-chevron-right"></i>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text">Change Password</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            </div>

            <div class="col">
            <div className="card mt-2 py-2" style={{width:"320px", boxShadow:"0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",border: "none"}}>
              <div className="card-body">
                <div className="d-flex gap-2">
                  <img style={{height:"35px", width:"36px"}} src={mdi} alt="" />
                  <p style={{fontSize:"18px"}} className="mt-2 fw-bold">Cod Payment</p>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text mx-3">Bank Details</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text mx-2">PostPaid</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            </div>

            <div class="col">
            <div className="card mt-2 py-2" style={{width:"320px", boxShadow:"0px 0px 19.200000762939453px 0px rgba(0, 0, 0, 0.21)",border: "none"}}>
              <div className="card-body">
                <div className="d-flex gap-2">
                  <img style={{height:"35px", width:"36px"}} src={mdi} alt="" />
                  <p style={{fontSize:"18px"}} className="mt-2 fw-bold">Billing</p>
                </div>
                <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text mx-3">GSTIN Invoicing</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
                  <div className="d-flex justify-content-around">
                  <p style={{fontSize:"15px", fontWeight:"500"}} className="card-text mx-3">Billing Address</p>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Setting_Page;
