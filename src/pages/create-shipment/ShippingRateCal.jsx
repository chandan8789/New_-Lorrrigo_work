import React, { useContext, useEffect, useState } from "react";
import { navbarOpenContext } from "../../App";
import deliveryimage from "../../images/deliveryImage.png";
import location from "../../images/location.png";
import locationline from "../../images/Line 41.png";
import "../stylingSheet/ShippingRateCal.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const ShippingRateCal = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  const { token } = useContext(AuthContext);
  // console.log(token);

  const [ratecalculator, setRateCalculator] = useState({
    pickupPincode: "",
    deliveryPincode: "",
    weight: "",
    weightUnit: "kg",
    boxLength: "",
    boxWidth: "",
    boxHeight: "",
    sizeUnit: "cm",
    isFragileGoods: false,
  });
  // console.log(ratecalculator);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ratecalculator.weight = Number(ratecalculator.weight);
    try {
      // console.log(ratecalculator);
      const res = await axios.post(
        "http://localhost:4000/ratecalculator",
        ratecalculator,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      if (res.data.valid === true) {
        alert(JSON.stringify(res.data.rates));
      }
      if (res.data.valid === false) {
        alert(res.data.message);
      }
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  return (
    <div
      style={{
        fontFamily: "IBM Plex Sans Condensed",
        height: "100vh",
        background: "rgba(217, 217, 217, 0.32)",
      }}
    >
      <div
        className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
      >
        <div className="row mx-5">
          <div>
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>
              Shipping Rate Calculator
            </p>
            <div className="d-flex gap-5">
              <Link to="/shipping-rate-cal">
                <button className="forwardbtn">Forward</button>
              </Link>
              <Link to="/reverse">
                <button className="returnbtn">Reverse</button>
              </Link>
            </div>
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 1)",
              border: "none",
            }}
            class="col-md-8 mt-3 rounded"
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col d-flex mt-4">
                  <span>
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Pickup Pincode
                    </p>
                    <input
                      type="text"
                      className="pickupPincode"
                      placeholder="Pickup Pincode"
                      value={ratecalculator.pickupPincode}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          pickupPincode: e.target.value,
                        });
                      }}
                    />
                  </span>
                  <span>
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Delivery Pincode
                    </p>
                    <input
                      type="text"
                      className="deliveryPincode"
                      placeholder="Delivery Pincode"
                      value={ratecalculator.deliveryPincode}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          deliveryPincode: e.target.value,
                        });
                      }}
                    />
                  </span>
                </div>
                <div className="col d-flex mt-3 mx-3">
                  <span className="mt-2">
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Weight (Kg)
                    </p>
                    <input
                      type="number"
                      className="weightkg"
                      placeholder="00.0"
                      value={ratecalculator.weight}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          weight: e.target.value,
                        });
                      }}
                      required
                    />
                    <span className="kg">Kg</span>
                  </span>
                  <span className="mt-2">
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      Dimensions
                    </p>
                    <input
                      type="number"
                      className="weightkg"
                      placeholder="L"
                      required
                      value={ratecalculator.boxLength}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          boxLength: Number(e.target.value),
                        });
                      }}
                    />
                    <span className="kg">Cm</span>
                  </span>

                  <span className="mt-5">
                    <input
                      type="text"
                      className="weightkg"
                      placeholder="B"
                      required
                      value={ratecalculator.boxWidth}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          boxWidth: Number(e.target.value),
                        });
                      }}
                    />
                    <span className="kg">Cm</span>
                  </span>

                  <span className="mt-5">
                    <input
                      type="text"
                      className="weightkg"
                      placeholder="H"
                      required
                      value={ratecalculator.boxHeight}
                      onChange={(e) => {
                        setRateCalculator({
                          ...ratecalculator,
                          boxHeight: Number(e.target.value),
                        });
                      }}
                    />
                    <span className="kg">Cm</span>
                  </span>
                </div>
              </div>
              <div className="d-flex gap-5 mx-4">
                <p className="minweight mx-3">Min Weight 0.5 kg</p>
                <p className="dimensional">
                  Dimensional value should be greater then 0.5 cm{" "}
                </p>
              </div>

              <div className="d-flex gap-5 mx-4">
                <p className="paymenttype mx-3">Payment Type</p>
                <p className="shipmentValue">Shipment Value (₹)</p>
              </div>

              <div className="d-flex">
                <div className="d-flex gap-3 mx-5">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <p>Cash On Delivery</p>
                </div>
                <div className="d-flex gap-3 mx-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <p>Prepaid</p>
                </div>
                <div>
                  <span className="mt-5 mx-5">
                    <span className="rupesss">₹</span>
                    <input
                      type="text"
                      className="shipmentvalues"
                      placeholder="Enter the shipment value"
                      required
                    />
                  </span>
                </div>
              </div>

              {/* <div>
                  <p className="fragilegoods">Shipping Fragile Goods</p>
                </div>
                
                <div className="d-flex mx-5 gap-5">
                  <div className="d-flex gap-3">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <p>Yes</p>
                  </div>
                  <div className="d-flex gap-3">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <p>No</p>
                  </div>
                </div> */}
            </form>
          </div>

          <div className="col mt-3">
            <div
              style={{
                width: "320px",
                padding: "35px",
                background: "rgba(255, 255, 255, 1)",
                border: "none",
              }}
              class="container rounded"
            >
              <form>
                <div class="form-group">
                  <div className="d-flex">
                    <img src={location} alt="" />
                    <label for="exampleInputEmail1">Pickup Location</label>
                  </div>
                  <input
                    style={{ border: "1px solid rgba(193, 57, 43, 1)" }}
                    type="text"
                    class="form-control text-center mt-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="City / State"
                  />
                </div>

                <div class="form-group">
                  <div>
                    <img
                      class="rounded mx-auto d-block mt-2"
                      src={locationline}
                      alt=""
                    />
                  </div>

                  <div className="d-flex">
                    <img src={location} alt="" />
                    <label for="exampleInputPassword1">Delivery Location</label>
                  </div>

                  <input
                    style={{ border: "1px solid rgba(193, 57, 43, 1)" }}
                    type="text"
                    class="form-control text-center mt-1"
                    id="exampleInputPassword1"
                    placeholder="City / State"
                  />
                </div>
                <div>
                  <img
                    className="mt-3"
                    style={{ width: "350px", height: "170px" }}
                    src={deliveryimage}
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex gap-4">
            <button type="submit" className="resetbtn">
              Reset
            </button>
            <button
              type="submit"
              className="calculatebtn"
              onClick={handleSubmit}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingRateCal;
