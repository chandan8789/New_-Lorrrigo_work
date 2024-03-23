import React, { useState, useEffect, CSSProperties } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
// import ClipLoader from "react-spinners/ClipLoader";

ChartJS.register(ArcElement, Tooltip, Legend);

const override = {
  display: "block",
  margin: "auto",
  borderColor: "red",
  marginTop: "230px",
};

const B2B = () => {
  const dummyData = {
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["rgba(255, 204, 74, 1)", "rgba(151, 71, 255, 1)"],
      },
    ],
  };

  // const [loading, setLoading]=useState(false)
  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  return (
    <div
      style={{
        fontFamily: "IBM Plex Sans Condensed",
        background: "rgba(217, 217, 217, 0.32)",
        // height: loading ? "100vh" : '100%',
        // overflow: loading? "hidden": 'unset'
      }}
    >
      {/* {
          loading ?
       <ClipLoader
        color={'#D00216'}
        loading={loading}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader" 
      />:  */}
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-5">
            <p style={{ fontSize: "25px" }} className="fw-bold mt-4">
              Bulk Order (B2B)
            </p>
            <div className="dropdown-center mt-4">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select an Option
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="b2c">
                    B2C
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="b2b">
                    B2B
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="d-flex gap-3 border rounded p-2 mt-3 bg-light">
                <p style={{fontSize:"17px"}} className="m-2 fw-bold">Current Wallet Balance : ₹ 100.00</p>
                <button style={{background: "#C1392BF0", color:"white", fontSize:"13px"}} className="border rounded p-2 fw-bold">Recharge Wallet</button>
            </div> */}
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <div className="d-flex gap-3 mt-2">
              <span className="text-muted fw-bold mt-1">
                Filter<i class="bi bi-funnel-fill mx-2"></i>
              </span>
              <input
                className="border rounded w-25 p-2"
                type="datetime-local"
                name=""
                id=""
              />

              <input
                className="p-2 w-50 border rounded mx-2"
                type="text"
                placeholder="Search By (Client name / Refrence ID / Shipment ID)"
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-5">
            <div
              class="card"
              style={{
                height: "160px",
                border: "none",
                boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
              }}
            >
              <div class="card-body">
                <div>
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontWeight: "500", fontSize: "20px" }}
                      className="mx-4"
                    >
                      Pickup Details
                    </p>
                    <p
                      style={{ fontWeight: "400", fontSize: "15px" }}
                      className="mx-4"
                    >
                      Last 30 days
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mx-4">
                    <div>
                      <span
                        style={{
                          border: "1px solid",
                          height: "50px",
                          width: "50px",
                          alignSelf: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "7px",
                          fontSize: "18px",
                          boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                          border: "none",
                        }}
                      >
                        12
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "400" }}>
                        Manifested
                      </span>
                    </div>

                    <div>
                      <span
                        style={{
                          border: "1px solid",
                          height: "50px",
                          width: "50px",
                          alignSelf: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "7px",
                          fontSize: "18px",
                          boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                          border: "none",
                        }}
                      >
                        08
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "400" }}>
                        Pickup Done
                      </span>
                    </div>

                    <div>
                      <span
                        style={{
                          border: "1px solid",
                          height: "50px",
                          width: "50px",
                          alignSelf: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "7px",
                          fontSize: "18px",
                          boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                          border: "none",
                        }}
                      >
                        14
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "400" }}>
                        Pickup Delayed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="col-12">
              <div
                class="card"
                style={{
                  height: "160px",
                  border: "none",
                  boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                }}
              >
                <div class="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <p
                        style={{ fontWeight: "500", fontSize: "20px" }}
                        className="mx-4"
                      >
                        Delivery Details
                      </p>
                      <p
                        style={{ fontWeight: "400", fontSize: "15px" }}
                        className="mx-4"
                      >
                        Last 30 days
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mx-4">
                      <div>
                        <span
                          style={{
                            border: "1px solid",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          12
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "400" }}>
                          Delivered
                        </span>
                      </div>

                      <div>
                        <span
                          style={{
                            border: "1px solid",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          12
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "400" }}>
                          Delayed
                        </span>
                      </div>

                      <div>
                        <span
                          style={{
                            border: "1px solid",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          08
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "400" }}>
                          RTO
                        </span>
                      </div>

                      <div>
                        <span
                          style={{
                            border: "1px solid",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          14
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "400" }}>
                          Pending
                        </span>
                      </div>

                      <div>
                        <span
                          style={{
                            border: "1px solid",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          08
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "400" }}>
                          Transit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="row mt-3">
            <div class="col-6">
              <div
                class="card mt-3"
                style={{
                  height: "300px",
                  // width:"560px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Ontime Pickup
                    </p>
                  </div>
                  <div
                    className="circle"
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <Doughnut
                      data={dummyData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12",
                    fontWeight: "400",
                    marginTop: 200,
                  }}
                  className="col justify-content-around"
                >
                  <span>Loreum epsium</span>
                  <span>Loreum epsium</span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div
                class="card mt-3"
                style={{
                  height: "300px",
                  // width:"560px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Ontime Deliveries
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>
                      Last 30 days
                    </p>
                  </div>
                  <div
                    className="circle"
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <Doughnut
                      data={dummyData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12",
                    fontWeight: "400",
                    marginTop: 200,
                  }}
                  className="col justify-content-around"
                >
                  <span>Loreum epsium</span>
                  <span>Loreum epsium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="row">
            <div className="col-sm mt-3">
              <div
                className="card"
                style={{
                  width: "auto",
                  border: "none",
                  boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                }}
              >
                <div className="card-body">
                  <div>
                    <h5
                      className="card-title mb-4"
                      style={{ fontWeight: "500", fontSize: "20px" }}
                    >
                      Shipment Overview by Courier
                    </h5>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order Name</th>
                          <th>Pickup Unscheduled</th>
                          <th>Pickup Scheduled</th>
                          <th>In-Transit</th>
                          <th>Delivered</th>
                          <th>RTO</th>
                          <th>Lost / Damaged</th>
                          <th>Total Shipment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Add your data here */}
                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>

                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>
                        <tr>
                          <td>5546322145 Phone</td>
                          <td>N/A</td>
                          <td>24 Jan 2024</td>
                          <td>--</td>
                          <td>Successful</td>
                          <td>--</td>
                          <td>N/A</td>
                          <td>--</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* }  */}
    </div>
  );
};

export default B2B;
