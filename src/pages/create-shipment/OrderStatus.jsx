import React, { useContext, useEffect, useState } from "react";
import cart from "../../images/mdi_cart-outline.png";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import clockImg from "../../assets/clock.png";
import logo from "../../images/image 4.png";
import { navbarOpenContext } from "../../App";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useContext(AuthContext);
  const [pickup, setPickup] = useState("today");
  let [searchParams, setSearchParams] = useSearchParams();
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpenModal = (orderId) => {
    setOpenModalId(orderId);
  };

  let color = "rgba(193, 57, 43, 1)";
  let catg = searchParams.get("category");

  const getFormattedUpcomingDate = (numberOfDaysToAdd) => {
    const currentDate = new Date();
    const upcomingDate = new Date(currentDate);
    upcomingDate.setDate(upcomingDate.getDate() + numberOfDaysToAdd);

    const day = upcomingDate.getDate();
    const month = upcomingDate.toLocaleString("default", { month: "long" });
    const year = upcomingDate.getFullYear().toString().slice(-2);

    const formattedDate = `${day} ${month}, ${year}`;

    return formattedDate;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/order?limit=50&page=1",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setOrders(response.data.response.orders);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const handleShipnow = async (order) => {
    navigate(`/select-courier-partner/${order._id}`);
  };

  const HEADER = [
    "Order details",
    "Reference ID",
    "Customer & Courier details",
    "Package details",
    "Payment",
    "Pickup Address",
    "Status",
    "Action",
  ];
  const handleDropdown = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
  };

  const handleTabClick = (category, stage) => {
    if (category === "All shipment") {
      setSearchParams(``);
      fetchOrders();
      return;
    }
    const filteredOrders = orders.filter((order) =>
      stage.includes(order.orderStage)
    );
    setSearchParams(`?category=${category}`);
    setOrders(filteredOrders);
  };

  const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <>
      <div
        className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        // style={{ background: "rgba(217, 217, 217, 0.32)" }}
      >
        <div
          className="container-fluid overflow-hidden"
          style={{
            maxWidth: "100%",
          }}
        >
          <div className="d-flex gap-5 mt-3 fw-bold">
            <p
              style={{
                cursor: "pointer",
                color: catg === "New" ? color : "black",
              }}
              onClick={() => handleTabClick("New", [0])}
            >
              New
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg === "pickup" ? color : "black",
              }}
              onClick={() => handleTabClick("pickup", [0, 2, 3, 4])}
            >
              Ready for pickup
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg === "Transit" ? color : "black",
              }}
              onClick={() => handleTabClick("Transit", [27, 30])}
            >
              In-Transit
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg === "Delivered" ? color : "black",
              }}
              onClick={() => handleTabClick("Delivered", [11])}
            >
              Delivered
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg === "RTO" ? color : "black",
              }}
              onClick={() => handleTabClick("RTO", [18, 19, 28])}
            >
              RTO
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg === "NDR" ? color : "black",
              }}
              onClick={() => handleTabClick("NDR", [12, 13, 14, 15, 16, 17])}
            >
              NDR
            </p>
            <p
              style={{
                cursor: "pointer",
                color: catg ? "black" : color,
              }}
              onClick={() => {
                handleTabClick("All shipment");
              }}
            >
              All Shipment
            </p>{" "}
            {/* Reset to fetch all orders */}
          </div>
          <div>
            <div className="text-xl font-semibold">
              <select
                style={{ fontSize: "14px", opacity: "0.6" }}
                className="p-3 w-25 rounded border"
              >
                <option>Last 30 days</option>
                <option>Last 20 days</option>
                <option>Last 10 days</option>
              </select>
            </div>
          </div>
          <div className="mt-3 mb-2 px-3">3 Orders for last 30 days</div>
          <div
            className="items-center bg-white rounded p-4 font-bold text-lg my-auto"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(9, minmax(185px, 1fr))",
              gap: 2,
              gridRowGap: "20px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {HEADER.map((item) => (
              <div>{item}</div>
            ))}
          </div>

          {orders?.length > 0 ? (
            orders
              ?.map((order, index) => {
                console.log(order);
                return (
                  <div
                    className="items-center bg-white rounded p-4 mt-4 font-bold my-auto"
                    style={{
                      fontSize: "13px",
                      display: "grid",
                      gridTemplateColumns: "repeat(9, minmax(185px, 1fr))",
                      gap: 2,
                      gridRowGap: "20px",
                      fontWeight: 550,
                    }}
                  >
                    <div>
                      <div>
                        AWB: {order.order_awd_id ? order.order_awd_id : "_"}
                      </div>
                      <div>Invoice: {order.order_invoice_number}</div>
                      <div>Date: {order.order_invoice_date}</div>
                    </div>
                    <div>
                      <div>{order.order_reference_id}</div>
                      <div>{order.pickupAddress.hub_id}</div>
                    </div>
                    <div>
                      <div>{order.customerDetails.name}</div>
                      <div>{order.customerDetails.email}</div>
                      <div>{order.customerDetails.phone}</div>
                      <div>
                        Order Min-weight: {order.orderWeight / 2}
                        {order.orderWeightUnit}
                      </div>
                    </div>
                    <div>
                      <div>
                        Weight: {order.orderWeight}
                        {order.orderWeightUnit}
                      </div>
                      <div>
                        {order.orderBoxLength} x {order.orderBoxWidth} x
                        {order.orderBoxHeight} {order.orderSizeUnit}
                      </div>
                      <div>
                        Vol. weight:{" "}
                        {(order.orderBoxLength *
                          order.orderBoxWidth *
                          order.orderBoxHeight) /
                          5000}{" "}
                        {order.orderWeightUnit}
                      </div>
                    </div>
                    <div>
                      <div>₹{order.amount2Collect}</div>
                      <div
                        style={{
                          backgroundColor: "#E5F6E7",
                          color: "#69b372",
                          padding: "4px",
                          borderRadius: "8px",
                          textAlign: "center",
                          width: "45%",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        {order.payment_mode ? "COD" : "Prepaid"}
                      </div>
                    </div>
                    <div>
                      <div>{order.pickupAddress.address1}</div>
                      <div>
                        {order.pickupAddress.city}, {order.pickupAddress.state}
                      </div>
                      <div>Pin: {order.pickupAddress.pincode}</div>
                    </div>
                    <div>
                      <span
                        style={{
                          backgroundColor: "#E5F6E7",
                          color: "#69b372",
                          padding: "6px",
                          borderRadius: "7px",
                        }}
                      >
                        Unavailable
                      </span>
                    </div>

                    <div
                      className="d-flex "
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {order.orderStage ? (
                          <select
                            id="dropdown"
                            onChange={(event) => handleDropdown(event)}
                            style={{
                              fontSize: "13px",
                              background: "#f7c6c691",
                              fontWeight: "700",
                              borderRadius: "6px",
                              padding: ".5rem",
                              fontFamily: "IBM Plex Sans Condensed",
                              border: ".5px solid #bb9e9e",
                            }}
                          >
                            <option value="">Select</option>
                            <option value="clone">Clone</option>
                            <option value="track">Track</option>
                            <option value="cancel">Cancel</option>
                          </select>
                        ) : (
                          <button
                            style={{
                              fontSize: "13px",
                              background: "rgba(193, 57, 43, 1)",
                              color: "white",
                              fontWeight: "700",
                              borderRadius: "6px",
                              padding: ".5rem 1rem ",
                              fontFamily: "IBM Plex Sans Condensed",
                            }}
                            type="button"
                            onClick={() => handleShipnow(order)}
                          >
                            Ship Now
                          </button>
                        )}
                      </div>
                      {order.order_awd_id ? (
                        <>
                          <img
                            src={clockImg}
                            className="mx-2"
                            alt="schedule pickup"
                            onClick={() =>
                              handleOpenModal(order.order_reference_id)
                            }
                          />
                          {openModalId === order.order_reference_id && (
                            <div
                              className="modal fade show"
                              style={{
                                display: "block",
                                position: "fixed",
                                backgroundColor: "rgba(255, 255, 255, 0.4)",
                                backdropFilter: "blur(5px)",
                              }}
                            >
                              <div class="modal-dialog">
                                <div
                                  class="modal-dialog modal-dialog-centered"
                                  role="document"
                                >
                                  <div class="modal-content mt-5">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title mx-1 fw-bold"
                                        id="exampleModalLongTitle"
                                      >
                                        Schedule Pickup
                                      </h5>
                                    </div>

                                    <div class="modal-body">
                                      <div className="row justify-content-center">
                                        <h6
                                          class="mb-2 text-muted opacity-75"
                                          style={{
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          Schedule pickup : {pickup}
                                          <span
                                            style={{ color: "#C1392B" }}
                                          ></span>
                                        </h6>
                                        <div
                                          class="card mt-2"
                                          style={{
                                            width: "29rem",

                                            border: "none",
                                          }}
                                        >
                                          <div
                                            className="d-flex mb-2 py-2"
                                            style={{
                                              background: "#C1392B0F",
                                            }}
                                          >
                                            <div>
                                              <img
                                                src={logo}
                                                alt=""
                                                className="mx-2"
                                                srcset=""
                                                height={100}
                                                width={50}
                                              />
                                            </div>
                                            <div
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              <div>Pickup Address</div>
                                              <div>
                                                {order.pickupAddress.address1}{" "}
                                                {order.pickupAddress.city},{" "}
                                                {order.pickupAddress.state} Pin:{" "}
                                                {order.pickupAddress.pincode}{" "}
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="d-flex justify-content-between py-2"
                                            style={{
                                              background: "#C1392B0F",
                                            }}
                                          >
                                            <button
                                              className={`rounded-pill rechargessss p-2 ${
                                                pickup === "today"
                                                  ? "bg-danger text-white"
                                                  : ""
                                              } `}
                                              onClick={() => setPickup("today")}
                                            >
                                              Today
                                            </button>
                                            <button
                                              className={`rounded-pill rechargessss p-2 ${
                                                pickup === "Tomorrow"
                                                  ? "bg-danger text-white"
                                                  : ""
                                              } `}
                                              onClick={() =>
                                                setPickup("Tomorrow")
                                              }
                                            >
                                              Tomorrow
                                            </button>
                                            <button
                                              className={`rounded-pill rechargessss p-2 ${
                                                pickup === "day after tomorrow"
                                                  ? "bg-danger text-white"
                                                  : ""
                                              } `}
                                              onClick={() =>
                                                setPickup(
                                                  getFormattedUpcomingDate(2)
                                                )
                                              }
                                            >
                                              {getFormattedUpcomingDate(2)}
                                            </button>
                                            <button
                                              className={`rounded-pill rechargessss p-2 ${
                                                pickup === "3 days later"
                                                  ? "bg-danger text-white"
                                                  : ""
                                              } `}
                                              onClick={() =>
                                                setPickup(
                                                  getFormattedUpcomingDate(3)
                                                )
                                              }
                                            >
                                              {getFormattedUpcomingDate(3)}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                        onClick={() => setOpenModalId(null)}
                                      >
                                        Close
                                      </button>
                                      <button
                                        style={{
                                          background: "#C1392B",
                                          color: "white",
                                        }}
                                        type="button"
                                        class="btn btn"
                                      >
                                        Schedule pickup
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })
              .reverse()
          ) : (
            <div
              className="text-center"
              style={{
                gridColumn: "1/9",
                padding: "20px",
              }}
            >
              No orders found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
