import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import order from "../../images/order.png";
import revenue from "../../images/revenue.png";
import average from "../../images/average.png";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import bulding from "../../images/Group 194.png"
import delivery from "../../images/Group 200.png"
import cal from "../../images/Group 199.png"

const B2C = () => {
// const [active, setActive]=useState(0)

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
    

  return (
    
    <div className="container py-4">
        <div className="d-flex gap-5">
            <p style={{fontWeight:"bold",margin:"0px", fontSize:"25px" }} className="d-flex float-right mx-1">(B2C)</p>
    
            <div className="dropdown-center">
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select an Option
                </button>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="b2c">B2C</a></li>
                <li><a className="dropdown-item" href="b2b">B2B</a></li>
                </ul>
            </div>
            
        </div>


                <div class="row mt-4">
                    <div class="col-12 col-md-4">
                    <div
                        class="card"
                        style={{
                        width: "390px",
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
                                borderRadius: "7px",
                                fontSize: "18px",
                                borderRadius: "50%",
                                background: "white",
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
                                12
                            </p>
                            <span style={{ fontSize: "14", fontWeight: "400" }}>
                                Yesterday 0{" "}
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div
                        class="card mt-3"
                        style={{
                        width: "390px",
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
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "7px",
                                fontSize: "18px",
                                borderRadius: "50%",
                                background: "white",
                            }}
                            >
                            <img
                                style={{ height: "40px", width: "40px" }}
                                src={revenue}
                            />
                            </div>
                            <div className="mx-4">
                            <span style={{ fontWeight: "400", fontSize: "" }}>
                                Today’s Revenue
                            </span>
                            <p style={{ margin: "0px", fontWeight: "500" }}>₹ 1200</p>
                            <span>Yesterday ₹ 1420 </span>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div
                        class="card mt-3"
                        style={{
                        width: "390px",
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
                    <div class="col-6 col-md-8">
                    <div
                        class="card"
                        style={{
                        width: "860px",
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Total Shipments
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Pickup Pending
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                In-Transit
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
                                00
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                NDR Pending
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
                                    fontSize: "18px0",
                                    boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                                    border: "none",
                                }}
                                >
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
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
                        width: "860px",
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Total Shipments
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Pickup Pending
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                In-Transit
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
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
                        width: "860px",
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Cod Available
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                COD Pending
                                </span>
                                <p style={{ fontSize: "11px", fontWeight: "400" }}>
                                (Greater than 8 days)
                                </p>
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
                                00
                                </span>
                                <span style={{ fontSize: "13px", fontWeight: "400" }}>
                                Last COD Remitted
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>


                <div class="container mt-4">
                <div class="row">
                    <div class="col-4">
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
                    <div class="col-4">
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
                    <div class="col-4">
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
                <div className="col-sm mt-3">
                <div className="card" style={{
                    width: "auto",
                    border: "none",
                    boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                }}>
                    <div className="card-body">
                    <div>
                        <h5 className="card-title mb-4" style={{ fontWeight: "500", fontSize: "20px" }}>
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

  )
}

export default B2C
