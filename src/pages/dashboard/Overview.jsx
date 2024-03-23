import React, { useContext, useEffect, useState } from "react";
import order from "../../images/order.png";
import revenue from "../../images/revenue.png";
import average from "../../images/average.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import bulding from "../../images/Group 194.png";
import delivery from "../../images/Group 200.png";
import cal from "../../images/Group 199.png";
import { Link, useNavigate } from "react-router-dom";
import "../stylingSheet/Overview.css";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { navbarOpenContext } from "../../App";

ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = () => {
  const [Bus, setB] = useState("B2C");
  const nav = useNavigate();
  const { token } = useContext(AuthContext);
  const { isNavbarOpen } = useContext(navbarOpenContext);

  const dummyData = {
    datasets: [
      {
        data: [12, 19, 20, 15, 10],
        backgroundColor: [
          "rgba(255, 115, 249, 1)",
          "rgba(96, 235, 160, 1)",
          "rgba(151, 71, 255, 1)",
          "rgba(252, 160, 118, 1)",
          "rgba(250, 255, 21, 1)",
        ],
      },
    ],
  };

  const [orderRevenue, setOrderRevenue] = useState([]);

  useEffect(() => {
    const dashboardApi = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/shipment/dashboard`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        setOrderRevenue(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    dashboardApi();
  }, []);
  console.log("dfdsdafdsdf");
  console.log(isNavbarOpen);
  console.log("dfdsdafdsdf");
  return (
    <>
      <div
        style={{
          fontFamily: "IBM Plex Sans Condensed",
          background: "rgba(217, 217, 217, 0.32)",
        }}
      >
        <div
          className="container py-4"
          style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <p style={{ fontSize: "25px" }} className="mx-1 fw-bold">
                Dashboard
              </p>
            </div>

            <div class="dropdown-center">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {Bus}
              </button>
              <ul
                class="dropdown-menu"
                style={{
                  padding: "7px",
                }}
              >
                <li onClick={() => setB("B2B")}>B2B</li>
                <li onClick={() => setB("B2C")}>B2C</li>
              </ul>
            </div>

            <div>
              <input
                className="overviewInput"
                type="text"
                placeholder="Search..."
              />
              <span className="inputiconoverview mt-1 opacity-50">
                <i class="bi bi-search"></i>
              </span>
            </div>

            <div>
              <Link to="/bulk-order">
                <button className="create_b2b_order text-indigo-500">
                  Create B2B Order
                </button>
              </Link>
              <Link to="/new-create-shipment">
                <button className="create_b2c_order">Create B2C Order</button>
              </Link>
            </div>
          </div>

          <div className="d-flex gap-5 mt-4">
            <Link>
              <button type="button" className="overview_button mx-1">
                Overview
              </button>
            </Link>
            <Link to="/order">
              <button type="button" className="order_overview">
                Orders
              </button>
            </Link>
            <Link to="/shipment">
              <button type="button" className="shipment_overview">
                Shipments
              </button>
            </Link>
            <Link to="/rto">
              <button type="button" className="overviewrto">
                RTO
              </button>
            </Link>
            <Link to="/courier">
              <button type="button" className="overivewcourier">
                Courier
              </button>
            </Link>
            <Link to="/delay">
              <button type="button" className="overviewdelay">
                Delay
              </button>
            </Link>
            <Link to="/tracking">
              <button type="button" className="overviewtracking">
                Tracking
              </button>
            </Link>
          </div>

          <div className="row mt-4">
            {Bus === "B2B" ? (
              <div className="col">
                <div className="col-md-12">
                  <div class="card mx-1" style={{ height: "270px" }}>
                    <div class="card-body">
                      <div
                        className="mx-auto d-block mt-2"
                        style={{
                          height: "100px",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          border: "none",
                          background: "rgba(164, 164, 164, 0.26)",
                        }}
                      >
                        <img className="mx-3 py-3" src={bulding} alt="" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <h6 class="card-subtitle text-muted mt-2">
                          Bulk Order
                        </h6>

                        <p
                          style={{
                            fontWeight: "bold",
                            color: "rgba(193, 57, 43, 1)",
                            fontSize: "22px",
                          }}
                          class="card-text mt-2"
                        >
                          Create B2B Order
                        </p>
                        <Link to="/bulk-order" className="bg-red-500">
                          <button
                            style={{
                              width: "150px",
                              height: "40px",
                              background: "rgba(193, 57, 43, 0.15)",
                              fontWeight: "bold",
                              color: "rgba(193, 57, 43, 1)",
                            }}
                            className="rounded"
                          >
                            Explore Now <i class="bi bi-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col">
                <div className="col-md-12">
                  <div class="card mx-1" style={{ height: "270px" }}>
                    <div class="card-body">
                      <div
                        className="mx-auto d-block mt-2"
                        style={{
                          height: "100px",
                          width: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          border: "none",
                          background: "rgba(164, 164, 164, 0.26)",
                        }}
                      >
                        <img className="mx-3 py-3" src={bulding} alt="" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <h6 class="card-subtitle text-muted mt-2">
                          Bulk Order
                        </h6>

                        <p
                          style={{
                            fontWeight: "bold",
                            color: "rgba(193, 57, 43, 1)",
                            fontSize: "22px",
                          }}
                          class="card-text mt-2"
                        >
                          Create B2C Order
                        </p>
                        <Link to="/new-create-shipment">
                          <button
                            style={{
                              width: "150px",
                              height: "40px",
                              background: "rgba(193, 57, 43, 0.15)",
                              fontWeight: "bold",
                              color: "rgba(193, 57, 43, 1)",
                            }}
                            className="rounded"
                          >
                            Explore Now <i class="bi bi-arrow-right"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="col">
              <div className="col-md-12">
                <div class="card mx-1" style={{ height: "270px" }}>
                  <div class="card-body">
                    <div
                      className="mx-auto d-block mt-2"
                      style={{
                        height: "100px",
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        border: "none",
                        background: "rgba(164, 164, 164, 0.26)",
                      }}
                    >
                      <img className="mx-3 py-3" src={bulding} alt="" />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h6 class="card-subtitle text-muted mt-2">Bulk Order</h6>

                      <p
                        style={{
                          fontWeight: "bold",
                          color: "rgba(193, 57, 43, 1)",
                          fontSize: "22px",
                        }}
                        class="card-text mt-2"
                      >
                        Rate Calculator
                      </p>
                      <Link to="/shipping-rate-cal">
                        <button
                          style={{
                            width: "150px",
                            height: "40px",
                            background: "rgba(193, 57, 43, 0.15)",
                            fontWeight: "bold",
                            color: "rgba(193, 57, 43, 1)",
                          }}
                          className="rounded"
                        >
                          Explore Now <i class="bi bi-arrow-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div class="row mt-4">
            <div class="col-12 col-md-4">
              <div
                class="card"
                style={{
                  height: "160px",
                  boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                  border: "none",
                  background: "rgba(243, 243, 243, 1)",
                }}
              >
                <div class="card-body">
                  <div className="d-flex text-center">
                    <div
                      style={{
                        height: "70px",
                        width: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        background: "white",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        style={{ height: "32px", width: "26px" }}
                        src={order}
                      />
                    </div>
                    <div className="mx-5">
                      <span style={{ fontSize: "14px", fontWeight: "400" }}>
                        Today’s Order
                      </span>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "500",
                          fontSize: "20px",
                        }}
                      >
                        {orderRevenue?.todayYesterdayAnalysis?.todayOrdersCount}
                      </p>
                      <span style={{ fontSize: "14", fontWeight: "400" }}>
                        Yesterday{" "}
                        {
                          orderRevenue?.todayYesterdayAnalysis
                            ?.yesterdayOrdersCount
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="card mt-3"
                style={{
                  // width: "390px",
                  height: "160px",
                  boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                  border: "none",
                  background: "rgba(23, 223, 67, 0.11)",
                }}
              >
                <div class="card-body">
                  <div className="d-flex text-center">
                    <div
                      style={{
                        height: "70px",
                        width: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "7px",
                        fontSize: "18px",
                        background: "white",
                      }}
                    >
                      <img
                        style={{ height: "40px", width: "40px" }}
                        src={revenue}
                      />
                    </div>
                    <div className="mx-5">
                      <span style={{ fontWeight: "400", fontSize: "" }}>
                        Today’s Revenue
                      </span>
                      <p style={{ margin: "0px", fontWeight: "500" }}>
                        ₹ {orderRevenue?.todayYesterdayAnalysis?.todayRevenue}
                      </p>
                      <span>
                        Yesterday ₹{" "}
                        {orderRevenue?.todayYesterdayAnalysis?.yesterdayRevenue}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="card mt-3"
                style={{
                  // width: "390px",
                  height: "160px",
                  boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                  border: "none",
                  background: "rgba(243, 243, 243, 1)",
                }}
              >
                <div class="card-body">
                  <div className="d-flex text-center">
                    <div
                      style={{
                        height: "70px",
                        width: "70px",
                        display: "flex",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        fontSize: "18px",
                        background: "white",
                      }}
                    >
                      <img
                        style={{ height: "35px", width: "35px" }}
                        src={average}
                      />
                    </div>
                    <div className="mx-4">
                      <span>Average Shipping</span>
                      <p style={{ fontWeight: "500" }}>₹ 145 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second colume */}
            <div class="col-12 col-md-7 mx-2">
              <div
                class="card"
                style={{
                  width: "845px",
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
                        Shipment Details
                      </p>
                      <p
                        style={{ fontWeight: "400", fontSize: "15px" }}
                        className="mx-4"
                      >
                        Last 30 days
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mx-4">
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Total Shipments
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Pickup Pending
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          In-Transit
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Delivered
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          NDR Pending
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px0",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                            border: "none",
                          }}
                        >
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          RTO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="card mt-3"
                style={{
                  width: "845px",
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
                        NDR Details
                      </p>
                      <p
                        style={{ fontWeight: "400", fontSize: "15px" }}
                        className="mx-4"
                      >
                        Last 30 days
                      </p>
                    </div>
                    <div className="d-flex justify-content-around mx-4">
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Total Shipments
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Pickup Pending
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          In-Transit
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            border: "none",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                          }}
                        >
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="card mt-3"
                style={{
                  width: "845px",
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
                        COD Status
                      </p>
                      <p
                        style={{ fontWeight: "400", fontSize: "15px" }}
                        className="mx-4"
                      >
                        Last 30 days
                      </p>
                    </div>
                    <div className="d-flex justify-content-around mx-4">
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
                            border: "none",
                            height: "50px",
                            width: "50px",
                            alignSelf: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "7px",
                            fontSize: "18px",
                            boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                          }}
                        >
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Total COD
                        </span>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "13px",
                            fontWeight: "400",
                          }}
                        >
                          (Last 30 Days)
                        </p>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Cod Available
                        </span>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          COD Pending
                        </span>
                        <p style={{ fontSize: "11px", fontWeight: "400" }}>
                          (Greater than 8 days)
                        </p>
                      </div>

                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span
                          style={{
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
                          00
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: "500",
                            marginTop: "2px",
                          }}
                        >
                          Last COD Remitted
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div
                class="card mt-2"
                style={{
                  height: "420px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Couriers Split
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
                  <div
                    style={{
                      fontSize: "12",
                      fontWeight: "400",
                      marginTop: 200,
                    }}
                    className="row text-center"
                  >
                    <span>Loreum epsium</span>
                    <span>Loreum epsium</span>
                    <span>Loreum epsium</span>
                    <span>Loreum epsium</span>
                    <span>Loreum epsium</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="card mt-2"
                style={{
                  height: "420px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Prepaid/COD Split
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
                  style={{ fontSize: "12", fontWeight: "400", marginTop: 200 }}
                  className="col justify-content-around"
                >
                  <span>Loreum epsium</span>
                  <span>Loreum epsium</span>
                </div>
                <div
                  style={{ fontSize: "12", fontWeight: "400" }}
                  className="col justify-content-around"
                >
                  <span>Loreum epsium</span>
                  <span>Loreum epsium</span>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div
                class="card mt-2"
                style={{
                  height: "420px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Delivery Performance
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
                  style={{ fontSize: "12", fontWeight: "400", marginTop: 200 }}
                  className="col justify-content-around"
                >
                  <span>Loreum epsium</span>
                  <span>Loreum epsium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm mt-4">
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
    </>
  );
};

export default Overview;
