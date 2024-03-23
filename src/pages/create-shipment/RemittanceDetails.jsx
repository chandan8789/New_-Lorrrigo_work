import React from "react";
import file from "../../images/file.png";
import line from "../../images/simple-line-icons_calender.png";
import question from "../../images/Frame 120 (2).png";
import vector from "../../images/Vector.png";
import arrow from "../../images/Arrow 2.png";
import "../../pages/mediaQuery/styling.css"

const RemittanceDetails = () => {
  return (
    <div className="container-fluid py-3"
    style={{ height: "100vh", background: "rgba(217, 217, 217, 0.32)" }}>
    <div
      style={{ fontFamily: "IBM Plex Sans Condensed" }}
      className="container"
    >
      <div id="main_class" className="row d-flex justify-content-center"> 
        <div className="col-4">
          <div className="d-flex gap-3">
            <button
              style={{
                border: "1px solid",
                height: "24px",
                width: "24px",
                borderRadius: "3px",
                boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
                border: "none",
              }}
            >
              <img className="mx-1" src={arrow} alt="" />
            </button>
            <p style={{fontSize:"15px", fontWeight:"500"}}>Transaction Details</p>
          </div>
          <div>
          <p style={{fontSize:"21px", fontWeight:"600"}}>R125622168468435213</p>
          </div>
          <div
            class="card "
            style={{
              width: "446px",
              height: "523px",
              boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
              border: "none",
            }}
          >
            <div style={{ justifyContent: "space-around" }} className="d-flex mt-3">
              <div
                style={{
                  border: "1px",
                  height: "27px",
                  width: "27px",
                  background: "#C1392B0F",
                  borderRadius: "4px",
                }}
              >
                <img className="mx-1 mt-1" src={file} />
              </div>
              <p style={{fontSize:"15px", fontWeight:"500"}}>Remittance Details</p>
              <span>
                <button style={{ color: "#08179B", fontWeight: "bold", fontSize:"15px" }}>
                  Download Recipet
                </button>
              </span>
            </div>
            <div style={{ marginLeft: "30px" }} className="d-flex gap-5 mt-2">
              <p
                style={{
                  border: "1px solid",
                  height: "20",
                  width: "70px",
                  color: "#ECAA00",
                  fontSize: "12px",
                  textAlign: "center",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  border: "none",
                  background: "#ECAA001C",
                }}
              >
                Pending
              </p>
              <div
                style={{
                  border: "1px solid",
                  width: "185px",
                  fontSize: "12px",
                  height: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0000001C",
                  gap: "4px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  border: "none",
                }}
                className="d-flex"
              >
                <img style={{ height: "13px", width: "13px" }} src={line} />{" "}
                <span>Processed on: Jan 22, 2024</span>
              </div>
            </div>
            <div className="d-flex ">
              <div style={{ marginLeft: "27px" }} className="">
                <div
                  style={{
                    border: "1px solid",
                    height: "150px",
                    width: "393px",
                    // justifyContent: "center",
                    background: "#C1392B0F",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <div>
                    <div className="d-flex text-center">
                      <img
                        className="mt-2"
                        style={{
                          height: "40px",
                          width: "40px",
                          marginLeft: "80px",
                        }}
                        src={question}
                      />
                      <p
                        className=""
                        style={{ fontWeight: "bold", fontSize: "13px", margin: "0" }}
                      >
                        Remittance Amount
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "700",
                            fontSize: "27px",
                            fontWeight: "bold",
                            // margin: "0",
                            marginTop:"-5px"
                          }}
                        >
                          ₹ 11,256
                        </p>
                      </p>
                    </div>
                    <hr className="mx-3" style={{ width: "92%", marginTop:"-50px" }} />
                    <div className="d-flex justify-content-between">
                      <div className="mx-3">
                        <p style={{ margin: "0px", marginTop:"-15px", fontSize:"14px",fontWeight: "500" }}>Total Order</p>
                        <p style={{margin: "0px", fontSize:"14px",fontWeight: "500", marginLeft:"30px" }}>3</p>
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: "500" }}>
                        <p style={{ margin: "0px", marginTop:"-15px" }} className="mx-3">Remittance Date</p>
                        <p style={{ margin: "0px" }} className="mx-3">Jan 22, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div
                style={{
                  border: "1px",
                  height: "27px",
                  width: "27px",
                  background: "#C1392B0F",
                  borderRadius: "4px",
                  marginLeft: "25px",
                  marginTop: "20px",
                }}
              >
                <img
                  style={{ height: "17px", width: "17px" }}
                  className="mx-1 mt-2"
                  src={vector}
                  alt=""
                />
              </div>
              <span
                style={{
                  marginLeft: "10px",
                  marginTop: "25px",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                AWB Numbers
              </span>
            </div>
            <div class="d-flex gap-5">
              <div class="col-md-11">
                <div class="form">
                  <i
                    style={{ marginLeft: "15px", marginTop: "1px" }}
                    class="fa fa-search"
                  ></i>
                  <input
                    style={{
                      marginLeft: "25px",
                      marginTop: "16px",
                      fontSize: "13px",
                      width: "393px",
                      height: "40px",
                      boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
                    }}
                    type="text"
                    class="form-control form-input"
                    placeholder="Search By AWB"
                  />
                  <span class="left-pan"></span>
                </div>
              </div>
            </div>
            <div class="container text-center">
              <div
                style={{
                  border: "1px solid",
                  width: "393px",
                  height: "120px",
                  marginLeft: "14px",
                  boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.2)",
                  border: "none",
                  borderRadius: "5px",
                  marginTop:"-18px"
                }}
                class="row"
              >
                <div class="col mx-4 mt-2">
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                      AWB NUMBER
                    </p>
                    <p
                      style={{
                        color: "rgba(8, 23, 155, 1)",
                        fontSize: "14px",
                        margin: "0px",
                      }}
                    >
                      8416102153
                    </p>
                    <p
                      style={{
                        color: "rgba(8, 23, 155, 1)",
                        fontSize: "14px",
                        margin: "0px",
                      }}
                    >
                      8416102153
                    </p>
                    <p
                      style={{
                        color: "rgba(8, 23, 155, 1)",
                        fontSize: "14px",
                        margin: "0px",
                      }}
                    >
                      8416102153
                    </p>
                  
                  </div>
                </div>
                <div class="col mt-2">
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                      AMOUNT COLLECTED
                    </p>
                    <p style={{ margin: "0px" }}>₹ 5000</p>
                    <p style={{ margin: "0px" }}>₹ 5000</p>
                    <p style={{ margin: "0px" }}>₹ 5000</p>
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
};

export default RemittanceDetails;
