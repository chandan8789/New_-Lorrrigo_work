import React, { useState, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import bulding from "../../images/Group 194.png";
import delivery from "../../images/Group 200.png";
import cal from "../../images/Group 199.png";
import { Link } from "react-router-dom";
import "../stylingSheet/Order.css";
import { navbarOpenContext } from "../../App";

ChartJS.register(ArcElement, Tooltip, Legend);

const Order = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const { isNavbarOpen } = useContext(navbarOpenContext);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const dummyData = {
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["rgba(255, 204, 74, 1)", "rgba(151, 71, 255, 1)"],
      },
    ],
  };
  return (
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
              Select an Option
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="b2b">
                  B2B
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="b2c">
                  B2C
                </a>
              </li>
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
              <button className="create_b2b_order">Create B2B Order</button>
            </Link>
            <Link to="/new-create-shipment">
              <button className="create_b2c_order">Create B2B Order</button>
            </Link>
          </div>
        </div>

        <div
          style={{ fontSize: "18px", fontWeight: "500" }}
          className="d-flex gap-5 mt-4"
        >
          <Link to="/overview">
            <button type="button" className="order_overview mx-1">
              Overview
            </button>
          </Link>
          <Link to="/order">
            <button type="button" className="order_button">
              Orders
            </button>
          </Link>
          <Link to="/shipment">
            <button type="button" className="order_shipments">
              Shipments
            </button>
          </Link>
          <Link to="/rto">
            <button type="button" className="orderrto">
              RTO
            </button>
          </Link>
          <Link to="/courier">
            <button type="button" className="ordercourier">
              Courier
            </button>
          </Link>
          <Link to="/delay">
            <button type="button" className="orderdelay">
              Delay
            </button>
          </Link>
          <Link to="/tracking">
            <button type="button" className="ordertracking">
              Tracking
            </button>
          </Link>
        </div>

        {/* <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
  <div className="d-flex justify-content-between gap-5">
  <div className="col">
    <div class="card mx-1" style={{width:"395px", height:"270px"}}>
      <div class="card-body">
        <div className="mx-auto d-block mt-2" style={{ height: "100px",
                              width: "100px",
                              display: "flex",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                              border:"none",
                              background: "rgba(164, 164, 164, 0.26)"}}>
          <img className="mx-3 py-3" src={bulding} alt="" />
        </div>
        <div style={{textAlign:"center"}}>
    
            <h6 class="card-subtitle text-muted mt-2">Bulk Order</h6>
    
          <p style={{ fontWeight:"bold", color: "rgba(193, 57, 43, 1)", fontSize:"22px"}} class="card-text mt-2">B2B Service</p>
          <Link to="/bulk-order"><button style={{width:"150px", height:"40px", background: "rgba(193, 57, 43, 0.15)", fontWeight:"bold", color: "rgba(193, 57, 43, 1)"}} className="rounded">Explore Now <i class="bi bi-arrow-right"></i></button></Link>
        </div>
      </div>
    
    
    
    </div>
  </div>
  
  
  <div className="col">
    <div class="card" style={{width:"395px", height:"270px"}}>
      <div class="card-body">
        <div className="mx-auto d-block mt-2" style={{ height: "100px",
                              width: "100px",
                              display: "flex",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                              border:"none",
                              background: "rgba(164, 164, 164, 0.26)"}}>
          <img className="mx-3 py-3" src={delivery} alt="" />
        </div>
        <div style={{textAlign:"center"}}>
          <h6 class="card-subtitle text-muted mt-2">Delivery</h6>
          <p style={{ fontWeight:"bold", color: "rgba(193, 57, 43, 1)", fontSize:"22px"}} class="card-text mt-2">B2C Service</p>
          <Link to="/new-create-shipment"><button style={{width:"150px", height:"40px", background: "rgba(193, 57, 43, 0.15)", fontWeight:"bold", color: "rgba(193, 57, 43, 1)"}} className="rounded">Explore Now <i class="bi bi-arrow-right"></i></button></Link>
        </div>
      </div>
    
    
    
    
    
    </div>
  </div>
  
  <div className="col">
    <div class="card" style={{width:"395px", height:"270px"}}>
      <div class="card-body">
        <div className="mx-auto d-block mt-2" style={{ height: "100px",
                              width: "100px",
                              display: "flex",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                              border:"none",
                              background: "rgba(164, 164, 164, 0.26)"}}>
          <img className="mx-4 py-4" src={cal} alt="" />
        </div>
        <div style={{textAlign:"center"}}>
          <h6 class="card-subtitle text-muted mt-2">Manage your Orders</h6>
          <p style={{ fontWeight:"bold", color: "rgba(193, 57, 43, 1)", fontSize:"22px"}} class="card-text mt-2">Rate Calculator</p>
          <Link to="/shipping-rate-cal"><button style={{width:"150px", height:"40px", background: "rgba(193, 57, 43, 0.15)", fontWeight:"bold", color: "rgba(193, 57, 43, 1)"}} className="rounded">Explore Now <i class="bi bi-arrow-right"></i></button></Link>
        </div>
      </div>
    
    
    
    
    
    </div>
  </div>
  
  </div>
</div> */}

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
                  <p
                    className="card-title"
                    style={{ fontWeight: "500", fontSize: "20px" }}
                  >
                    Orders Count
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Total Orders</th>
                        <th>Pickup Unscheduled</th>
                        <th>Pickup Scheduled</th>
                        <th>InTransit</th>
                        <th>Delivered</th>
                        <th>Undelivered</th>
                        <th>RTO</th>
                        <th>Lost/Damaged</th>
                        <th>Cancelled</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add your data here */}
                      <tr>
                        <td>25 Jan 2024</td>
                        <td>24</td>
                        <td>N/A</td>
                        <td>24 Jan 2024</td>
                        <td>--</td>
                        <td>Successful</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>N/A</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="row">
            <div class="col-md-4">
              <div
                class="card mt-3"
                style={{
                  // width: "405px",
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
                      Prepaid vs. COD Orders
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
            <div class="col-md-4">
              <div
                class="card mt-3"
                style={{
                  // width: "405px",
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
                      Buyer Demographics
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
                class="card mt-3"
                style={{
                  // width: "405px",
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
                      Most Popular Orders Location
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>
                      Last 30 days
                    </p>
                  </div>
                  {/* ---range-- */}
                  {/* <div className="container">
      <div className="mt-4">
        <p className='mx-2' style={{margin:"0"}}>Delhi</p>
        <input
          type="range"
          min="0"
          max="500"
          value={sliderValue}
          onChange={handleSliderChange}
          className='border rounded'
          style={{
            background: `linear-gradient(to right, red 0%, red ${(sliderValue / 500) * 100}%, #ccc ${(sliderValue / 500) * 100}%, #ccc 100%)`,
            width: '300px', // Set the width to your desired size
            margin: '0 10px', // Adjust the margin for spacing
            outline: 'none', // Remove default outline
            cursor: 'pointer', // Change cursor on hover
          }}
        />
        <span className="ml-3">{sliderValue}</span>
      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <div>
              <div
                class="card mt-3"
                style={{
                  // width: "600px",
                  height: "350px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Top 10 Customers
                    </p>
                    <input
                      style={{ padding: "10px" }}
                      className="border rounded"
                      type="datetime-local"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3 fw-bold">
                    <p>Customer Name</p>
                    <p>Order Count</p>
                    <p>Revenue</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Delhi Delivery service </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Delhi Delivery service </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Delhi Delivery service </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Delhi Delivery service </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <div
                class="card mt-3"
                style={{
                  // width: "600px",
                  height: "350px",
                  position: "relative",
                }}
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <p
                      style={{ fontSize: "20px", fontWeight: "500" }}
                      class="card-title"
                    >
                      Top 10 Products
                    </p>
                    <input
                      style={{ padding: "10px" }}
                      className="border rounded"
                      type="datetime-local"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3 fw-bold">
                    <p>Product Name</p>
                    <p>Unit Sold</p>
                    <p>Revenue</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Redmi phone </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>Redmi phone </p>
                    <p>5,124</p>
                    <p>₹15,231</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>MI Charger </p>
                    <p>524</p>
                    <p>₹500</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 mx-3">
                    <p>MI Charger </p>
                    <p>524</p>
                    <p>₹500</p>
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

export default Order;
