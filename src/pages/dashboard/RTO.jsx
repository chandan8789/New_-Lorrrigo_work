import React, { useContext } from "react";
import bulding from "../../images/Group 194.png";
import delivery from "../../images/Group 200.png";
import cal from "../../images/Group 199.png";
import { Link } from "react-router-dom";
import "../stylingSheet/Rto.css";
import notfound from "../../images/image 19.png";
import { navbarOpenContext } from "../../App";

const RTO = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <div>
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

          <div className="d-flex gap-5 mt-4 mr-2">
            <Link to="/overview">
              <button type="button" className="overview mx-1">
                Overview
              </button>
            </Link>
            <Link to="/order">
              <button type="button" className="order_overview">
                Orders
              </button>
            </Link>
            <Link to="/shipment">
              <button type="button" className="shipmentsRTO">
                Shipments
              </button>
            </Link>
            <Link to="/rto">
              <button type="button" className="returnorder">
                RTO
              </button>
            </Link>
            <Link to="/courier">
              <button type="button" className="rtocourier">
                Courier
              </button>
            </Link>
            <Link to="/delay">
              <button type="button" className="rtodelay">
                Delay
              </button>
            </Link>
            <Link to="/tracking">
              <button type="button" className="rtotracking">
                Tracking
              </button>
            </Link>
          </div>

          {/*     
          <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
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

          <div class="card mt-3">
            <div class="card-body">
              <div className="d-flex gap-3 mt-2">
                {/* <p class="card-title text-muted fw-bold">Filter</p> */}
                <span className="text-muted fw-bold">
                  Filter<i class="bi bi-funnel-fill mx-2"></i>
                </span>
                <input
                  className="border rounded w-25"
                  type="datetime-local"
                  name=""
                  id=""
                />
                <select className="border rounded p-2 w-25">
                  <option value="">Payment Mode</option>
                  <option value="">Cash On Delivery</option>
                  <option value="">Upi & Cards</option>
                </select>
                <select className="border rounded p-2 w-25">
                  <option value="">Shipment Mode</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
            </div>
          </div>

          <div class="card mt-3">
            <div class="card-body text-center">
              <div className="d-flex justify-content-around mt-2">
                <div class="card bg-light mb-3" style={{ width: "210px" }}>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    class="card-header"
                  >
                    Total RTO
                  </div>
                  <div class="card-body">
                    <p
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      class="card-text"
                    >
                      0
                    </p>
                  </div>
                </div>

                <div class="card bg-light mb-3" style={{ width: "210px" }}>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    class="card-header"
                  >
                    RTO Percentage
                  </div>
                  <div class="card-body">
                    <p
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      class="card-text"
                    >
                      0 %
                    </p>
                  </div>
                </div>

                <div class="card bg-light mb-3" style={{ width: "210px" }}>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    class="card-header"
                  >
                    RTO Initiated
                  </div>
                  <div class="card-body">
                    <p
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      class="card-text"
                    >
                      0
                    </p>
                  </div>
                </div>

                <div class="card bg-light mb-3" style={{ width: "210px" }}>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    class="card-header"
                  >
                    RTO Undelivered
                  </div>
                  <div class="card-body">
                    <p
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      class="card-text"
                    >
                      0
                    </p>
                  </div>
                </div>

                <div class="card bg-light mb-3" style={{ width: "210px" }}>
                  <div
                    style={{ fontSize: "18px", fontWeight: "600" }}
                    class="card-header"
                  >
                    RTO Delivered
                  </div>
                  <div class="card-body">
                    <p
                      style={{ fontSize: "50px", fontWeight: "600" }}
                      class="card-text"
                    >
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="card mt-3">
              <div class="card-body">
                <p style={{ fontSize: "20px", fontWeight: "600" }}>RTO Count</p>
                <div>
                  <img
                    class="rounded mx-auto d-block mt-5"
                    src={notfound}
                    alt=""
                  />
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Data not found for the selected filter
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div class="card mt-3">
                <div class="card-body">
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    RTO Count
                  </p>
                  <div>
                    <img
                      class="rounded mx-auto d-block"
                      src={notfound}
                      alt=""
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Data not found for the selected filter
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mt-3">
                <div class="card-body">
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    RTO Reason
                  </p>
                  <div>
                    <img
                      class="rounded mx-auto d-block"
                      src={notfound}
                      alt=""
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Data not found for the selected filter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-6">
              <div>
                <div
                  class="card mt-3"
                  style={{
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
                        Top RTO - Pincodes
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
                      <p>Pincode</p>
                      <p>RTO Count</p>
                      <p>Percentage</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div>
                <div
                  class="card mt-3"
                  style={{
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
                        Top RTO - City
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
                      <p>City</p>
                      <p>RTO Count</p>
                      <p>Percentage</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>Gurgaon</p>
                      <p>45152</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>Gurgaon</p>
                      <p>45152</p>
                      <p>45%</p>
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

          <div class="row mt-3">
            <div class="col-6">
              <div>
                <div
                  class="card mt-3"
                  style={{
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
                        Top RTO - Courier
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
                      <p>Name</p>
                      <p>RTO Count</p>
                      <p>Percentage</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>273008</p>
                      <p>45115</p>
                      <p>45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div>
                <div
                  class="card mt-3"
                  style={{
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
                        Top RTO - Customer
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
                      <p>Name</p>
                      <p>RTO Count</p>
                      <p>Percentage</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>Gurgaon</p>
                      <p>45152</p>
                      <p>45%</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3 mx-3">
                      <p>Gurgaon</p>
                      <p>45152</p>
                      <p>45%</p>
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
    </div>
  );
};

export default RTO;
