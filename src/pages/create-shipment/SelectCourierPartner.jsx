import React, { useEffect, useState, useContext } from "react";
import logistic from "../../images/image 4.png";
import "../stylingSheet/NewCreateShipment.css";
import call from "../../images/call.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLoading } from "../../context/LoadingProvider";
import { navbarOpenContext } from "../../App";

const SelectCourierPartner = () => {
  const [userDetails, setUserDetails] = useState({});
  const [selectCourier, setSelectCourier] = useState();
  const [apiRes, setApiRes] = useState({});
  const [courierPartners, setCourierPartners] = useState([]);

  const parms = useParams();
  const { loading, setLoading } = useLoading();
  const handleCourierSelect = (courier) => {
    setSelectCourier(courier);
    const filteredCouriers = courierPartners.filter((cur) => {
      if (courier === "all") {
        return true;
      } else {
        return cur.type === courier;
      }
    });
    setApiRes({ ...apiRes, courierPartner: filteredCouriers });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserDetails(user);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/order/courier/b2c/${parms.productId}`, {
        headers: {
          Authorization: "Bearer " + userDetails.token,
        },
      })
      .then((response) => {
        setApiRes(response.data);
        setCourierPartners(response.data.courierPartner);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [parms.productId, userDetails.token]);

  const handleProductShipment = (carrierId, orderId) => {
    axios
      .post(
        `http://localhost:4000/shipment`,
        {
          orderId: orderId,
          carrierId: carrierId,
          orderType: 0,
        },
        {
          headers: {
            Authorization: "Bearer " + userDetails.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <>
      <div>{/* {loading && } */}</div>

      <div
        className="container-fluid p-5"
        style={{
          height: "100vh",
          background: "rgba(217, 217, 217, 0.32)",
          fontFamily: "IBM Plex Sans Condensed",
        }}
      >
        <div
          className="container py-4"
          style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        >
          <div className="row">
            <div className="col-12 col-md-3">
              <div
                class="card p-2"
                style={{
                  width: "265px",
                  height: "450px",
                  boxShadow: "background: rgba(255, 255, 255, 1)",
                  borderRadius: "15px",
                  border: "0.5px",
                }}
              >
                <div class="card-body">
                  <h5 style={{ fontSize: "18px" }} class="card-title">
                    Order Details
                  </h5>
                  <div className="mt-5">
                    <p
                      style={{ fontSize: "16px" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      Pickup From
                    </p>
                    <p
                      style={{ fontSize: "16px", fontWeight: "600" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      {apiRes?.orderDetails?.pickupAddress?.pincode},{" "}
                      {apiRes?.orderDetails?.pickupAddress.state}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p
                      style={{ fontSize: "16px" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      Deliver To
                    </p>
                    <p
                      style={{ fontSize: "16px", fontWeight: "600" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      {apiRes?.orderDetails?.customerDetails?.pincode},{" "}
                      {apiRes?.orderDetails?.customerDetails?.city}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p
                      style={{ fontSize: "16px" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      Order Value
                    </p>
                    <p
                      style={{ fontSize: "15px", fontWeight: "600" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      &#x20B9;{" "}
                      {apiRes?.orderDetails?.amount2Collect?.toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p
                      style={{ fontSize: "16px" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      Payment Mode
                    </p>
                    <p
                      style={{ fontSize: "15px", fontWeight: "600" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      {apiRes?.orderDetails?.payment_mode ? "COD" : "Prepaid"}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p
                      style={{ fontSize: "16px" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      Approximate Weight in kg
                    </p>
                    <p
                      style={{ fontSize: "15px", fontWeight: "600" }}
                      class="card-subtitle mb-2 text-body-secondary"
                    >
                      {apiRes?.orderDetails?.orderBoxHeight}{" "}
                      {apiRes?.orderDetails?.orderWeightUnit}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-9">
              <div>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                  }}
                >
                  Select Courier Partner
                </p>
              </div>
              <div className="d-flex gap-5">
                <button style={{ fontSize: "14px", fontWeight: "500" }}>
                  {apiRes?.courierPartner?.length} Couriers found
                </button>
                <button
                  className="All_buttonActive"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                  onClick={() => handleCourierSelect("all")}
                >
                  All
                </button>
                <button
                  className="All_button"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                  onClick={() => handleCourierSelect("air")}
                >
                  Air
                </button>
                <button
                  className="All_button"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                  onClick={() => handleCourierSelect("surface")}
                >
                  Surface
                </button>
              </div>

              <div
                style={{
                  borderRadius: "15px",
                  // height: "70px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 1)",
                  border: "0.5",
                  boxShadow: "background: rgba(255, 255, 255,1)",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
                className="d-flex gap-5 mt-2  p-2 border"
              >
                <p style={{ marginTop: "14px", marginLeft: "20px" }}>
                  Courier Partner
                </p>
                <p style={{ marginTop: "14px" }}>Expected Pickup</p>
                <p style={{ marginTop: "14px" }}>Charges</p>
                <p style={{ marginTop: "14px", marginRight: "20px" }}>Action</p>
              </div>

              {apiRes?.courierPartner?.map((courier, index) => (
                <div
                  style={{
                    borderRadius: "15px",
                    height: "135px",
                    justifyContent: "space-center",
                    background: "rgba(255, 255, 255, 1)",
                    border: "0.5",
                    boxShadow: "background: rgba(255, 255, 255,1)",
                    fontSize: "11px",
                  }}
                  className="d-flex gap-5 mt-4 border"
                >
                  <div className="d-flex">
                    <img
                      style={{
                        height: "33px",
                        width: "39px",
                        marginTop: "40px",
                        marginLeft: "10px",
                      }}
                      src={logistic}
                    />
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        marginTop: "17px",
                        marginLeft: "10px",
                        border: "1px",
                        height: "62px",
                        width: "210px",
                      }}
                    >
                      {courier.name} | Min-weight {courier.minWeight} RTO
                      Charges : {courier.charge.toFixed(2)}
                      <p
                        style={{
                          fontSize: "15px",
                          marginTop: "10px",
                          marginLeft: "-40px",
                          display: "flex",
                        }}
                      >
                        Available Contacts :{" "}
                        <img
                          style={{
                            height: "12px",
                            width: "10px",
                            marginTop: "6px",
                            marginLeft: "10px",
                          }}
                          src={call}
                        />
                        <p className="mx-2">Call enquiry &nbsp;|</p>
                      </p>
                    </div>
                  </div>

                  <div style={{ gap: "" }} className="d-flex gap-5">
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "50px",
                        marginLeft: "40px",
                      }}
                    >
                      {courier.expectedPickup}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginTop: "50px",
                        marginLeft: "190px",
                      }}
                    >
                      &#x20B9; {courier.charge.toFixed(2)}
                    </p>
                  </div>
                  <button
                    style={{
                      fontSize: "13px",
                      background: "rgba(193, 57, 43, 1)",
                      height: "31px",
                      width: "100px",
                      color: "white",
                      fontWeight: "700",
                      borderRadius: "6px",
                      alignItems: "center",
                      marginTop: "45px",
                      marginLeft: "100px",
                    }}
                    type="button"
                    onClick={() =>
                      handleProductShipment(
                        courier.smartship_carrier_id,
                        apiRes.orderDetails._id
                      )
                    }
                  >
                    Ship Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCourierPartner;
