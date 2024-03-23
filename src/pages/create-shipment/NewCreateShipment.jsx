import React, { useEffect, useState } from "react";
import axios from "axios";
import "../stylingSheet/NewCreateShipment.css";
import Ellipse from "../../images/Ellipse 2.jpg";
import bx_edit from "../../images/bx_edit.jpg";
import Rectangle from "../../images/Group 27.png";
import Solar_user from "../../images/solar_user-broken.jpg";
import plus from "../../images/plus.png";
import equal from "../../images/equal.png";
import line from "../../images/Line 13.jpg";
import plus1 from "../../images/plus1.png";
import { useNavigate } from "react-router-dom";

const dateFormatter = (date) => {
  let splittedDate = date.split("-");
  const temp = splittedDate[0];
  splittedDate[0] = splittedDate[2];
  splittedDate[2] = temp;
  return splittedDate.join("-");
};
const NewCreateShipment = () => {
  const [userDetails, setUserDetails] = useState({});
  const [pickupAddressBool, setPickupAddressBool] = useState(true)
  const [hub, setHub] = useState([]);

  // const [num1, setNum1] = useState("");
  // const [num2, setNum2] = useState("");

  const [order_reference_id, setOrder_referernce_id] = useState("");
  // const [total_order_value, setTotalOrderValue] = useState("");
  const [payment_mode, setPaymentMode] = useState(""); // will replaced by number;
  const [orderWeight, setOrderWeight] = useState("");
  const orderWeightUnit = "kg";
  const [order_invoice_date, setOrder_invoid_date] = useState("");


  const [order_invoice_number, setOrder_invoice_number] = useState("");

  console.log(order_invoice_date, order_invoice_number, "date and number")
  const [noOfBox, setNoOfBox] = useState(0);
  const orderSizeUnit = "cm";
  const [orderBoxHeight, setOrderBoxHeight] = useState(0);
  const [orderBoxWidth, setOrderBoxWidth] = useState(0);
  const [orderBoxLength, setOrderBoxLength] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupAddressForm, setPickupAddressForm] = useState({
    facilityName: "",
    contactPersonName: "",
    pickupLocContact: "",
    email: "",
    address: "",
    country: "India",
    pincode: "",
    state: "",
    city: ""
  })
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    hsn_code: "",
    quantity: 0,
    taxRate: "",
    taxableValue: "",
    amount2Collect: ""
  });

  const [isContainFragileItem, setIsContainFragile] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setPickupAddressBool(prevState => !prevState);
  };

  const [modalClose, setModalClose] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserDetails(user);
    axios
      .get("http://localhost:4000/hub", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
      .then((r) => {
        if (r.data?.valid) {
          setHub(r.data.hubs);
        } else {
          console.log(r.data);
        }
      })
      .catch((err) => {
      });
  }, []);

  const hitApi = (e) => {
    e.preventDefault();
    let data = {
      order_reference_id: order_reference_id,
      total_order_value: total_order_value,
      payment_mode: payment_mode === "COD" ? 1 : 0,
      orderWeight: orderWeight,
      orderWeightUnit: orderWeightUnit,
      order_invoice_date: order_invoice_date,
      order_invoice_number: order_invoice_number,
      numberOfBoxes: noOfBox,
      orderSizeUnit: orderSizeUnit,
      orderBoxHeight: orderBoxHeight,
      orderBoxWidth: orderBoxWidth,
      orderBoxLength: orderBoxLength,
      amount2Collect: productDetails.amount2Collect,
      customerDetails: {
        name: customerDetails?.name,
        email: customerDetails?.email,
        phone: customerDetails?.phone,
        address: customerDetails?.address,
        city: customerDetails?.city,
        pincode: Number(customerDetails?.pincode),
      },
      productDetails: {
        name: productDetails?.name,
        category: productDetails?.category,
        hsn_code: productDetails?.hsn_code,
        quantity: productDetails?.quantity,
        taxRate: productDetails?.taxRate,
        taxableValue: productDetails?.taxableValue,
      },
      pickupAddress: pickupAddress,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/order/b2c",
      headers: {
        Authorization: `Bearer ${userDetails?.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {

        if (response.data?.valid) {
          // alert("Data Submited Sucessfully!");
          console.log(response.data)
          navigate(`/order-status`)

        } else {
          alert(response.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [addSellerAdd, setAddSellerAdd] = useState(false);

  const [formData, setFormData] = useState({
    sellerName: '',
    address: '',
    address2: '',
    pincode: '',
    phone: '',
    city: '',
    state: '',
    gstNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleChangePickup = async (e) => {
    const { name, value } = e.target;

    setPickupAddressForm(prevState => ({
      ...prevState,
      [name]: value
    }))



  }

  useEffect(() => {
    let timer;

    const fetchCityState = async () => {
      if (pickupAddressForm.pincode.length > 4) {
        const cityStateRes = await axios.post("http://localhost:4000/hub/pincode", { pincode: Number(pickupAddressForm.pincode) }, {
          headers: {
            "Authorization": `Bearer ${userDetails?.token}`,
            "Content-Type": "application/json",
          }
        });

        setPickupAddressForm(prevState => ({ ...prevState, city: cityStateRes.data.city, state: cityStateRes.data.state }));
      }
    };

    // Debouncing the function
    clearTimeout(timer);
    timer = setTimeout(fetchCityState, 500); // Adjust the delay as per your preference

    return () => clearTimeout(timer); // Cleanup function to clear the timeout
  }, [pickupAddressForm.pincode, userDetails?.token, setPickupAddressForm]);

  const handleAddSellerDetails = (e) => {
    e.preventDefault();
    const data = {
      facilityName: pickupAddressForm.facilityName,
      name: pickupAddressForm.contactPersonName,
      address1: pickupAddressForm.address,
      email: pickupAddressForm.email,
      pincode: parseInt(pickupAddressForm.pincode),
      phone: parseInt(pickupAddressForm.pickupLocContact),
      city: pickupAddressForm.city,
      state: pickupAddressForm.state
    }
    axios.post('http://localhost:4000/hub', data, {
      headers: {
        Authorization: `Bearer ${userDetails?.token}`
      }
    }).then((response) => {
      if (response.data?.valid) {
        alert("Pickup location Added Successfully!");
        window.location.reload();
      } else {
        alert(response.data?.message);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div
        style={{ background: "rgba(237, 239, 239, 1)" }}
        className="container-fluid"
      >
        <form onSubmit={hitApi} className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              {/* Create a new shipment */}
              <div
                style={{
                  width: "730px",
                  fontFamily: "IBM Plex Sans Condensed",
                  marginLeft: "120px",
                }}
              >
                <h4 className="fw-bold mt-3">Create a new shipment (B2C)</h4>
                <div className="col justify-content-center">
                  <div className="row border p-4 rounded bg-white mt-3">
                    <div class="container">
                      <div>
                        <div class="form-group">
                          <p className="fw-bold">Order Details</p>
                          <hr style={{ width: "680px" }} />
                          <label className="fw-bold" for="order">
                            Order ID/Reference Number
                          </label>
                          <input
                            type="text"
                            class="mt-2 OrderFirstInput"
                            placeholder="Enter Order ID/Reference Number"
                            // id="order"
                            // onChange={handleChange}
                            // value={formData.name}
                            // value={formData.order_refernce_id}
                            value={order_reference_id}
                            onChange={(e) => {
                              setOrder_referernce_id(e.target.value);
                            }}
                          // onChange={(e) =>
                          //   setFormData({
                          //     ...formData,
                          //     order_refernce_id: e.target.value,
                          //   })
                          // }
                          />
                        </div>

                        <div class="form-group">
                          <p className="mt-3 fw-bold">Shipment Details</p>
                          <hr style={{ width: "680px" }} />
                          <div className="d-flex gap-4">
                            <div>
                              <label className="fw-bold">Product Name</label>
                              <input
                                type="text"
                                class="mt-2 OrderIDReference d-block"
                                placeholder="Enter Product Name"
                                id="name"
                                // onChange={(e) =>
                                //   setFormData({
                                //     ...formData,
                                //     productDetails: {
                                //       ...formData.productDetails,
                                //       name: e.target.value,
                                //     },
                                //   })
                                // }
                                // value={formData.name}
                                value={productDetails?.name}
                                onChange={(e) =>
                                  setProductDetails({
                                    ...productDetails,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>

                            <div>
                              <label className="fw-bold">Item Count</label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="number"
                                  class="mt-2 ItemCount"
                                  placeholder="--"
                                  // onChange={(e) => {
                                  //   setFormData({
                                  //     ...formData,
                                  //     productDetails: {
                                  //       ...formData.productDetails,
                                  //       quantity: e.target.value,
                                  //     },
                                  //   });
                                  // }}
                                  // value={formData.quantity}
                                  value={productDetails?.quantity}
                                  onChange={(e) => {
                                    setProductDetails({
                                      ...productDetails,
                                      quantity: Number(e.target.value),
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group mt-3">
                          <div className="d-flex gap-4">
                            <div>
                              <label className="fw-bold">
                                Product Category
                              </label>
                              <input
                                type="text"
                                class="mt-2 OrderIDReference d-block"
                                placeholder="Enter Product Category"
                                value={productDetails?.category}
                                onChange={(e) => {
                                  setProductDetails({
                                    ...productDetails,
                                    category: e.target.value,
                                  });
                                }}
                              />
                            </div>

                            <div>
                              <label className="fw-bold">HSN Code</label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="text"
                                  class="mt-2 HSNCode"
                                  placeholder="Enter HSN Code"
                                  value={productDetails?.hsn_code}
                                  onChange={(e) => {
                                    setProductDetails({
                                      ...productDetails,
                                      hsn_code: Number(e.target.value),
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group mt-4 shipment">
                          <div className="d-flex gap-4">
                            <div>
                              <label className="fw-bold mx-3 mt-1">
                                Shipment Value
                              </label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  class="mt-2 mx-3 shipmentvalue d-block"
                                  placeholder="Enter shipment value"
                                  id="shipmentValue"
                                  name="shipmentValue"
                                  value={productDetails?.taxableValue}
                                  onChange={(e) => {
                                    setProductDetails({
                                      ...productDetails,
                                      taxableValue: Number(e.target.value),
                                    });
                                  }}
                                />
                                <div
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "25px",
                                    marginTop: "20px",
                                  }}
                                >
                                  <img src={plus} alt="" />
                                </div>
                              </div>
                              <p
                                className="mt-1 mx-3 tax"
                                style={{ fontSize: "12px", marginLeft: "5px" }}
                              >
                                Total value without tax
                              </p>
                            </div>

                            <div>
                              <label className="fw-bold mt-1 mx-3">
                                Tax Rate
                              </label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="text"
                                  class="mt-2 mx-3 shipmentvalue"
                                  placeholder="Enter Tax Value"
                                  id="taxValue"
                                  name="taxValue"
                                  value={productDetails?.taxRate}
                                  onChange={(e) => {
                                    setProductDetails({
                                      ...productDetails,
                                      taxRate: e.target.value,
                                    });
                                  }}
                                />
                                <div
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "25px",
                                    marginTop: "15px",
                                  }}
                                >
                                  <img src={equal} />
                                </div>{" "}
                              </div>
                            </div>

                            <div>
                              <label className="fw-bold mt-1 mx-3">
                                Total Value
                              </label>
                              <div className="d-flex align-items-center">
                                <input
                                  type="text"
                                  class="mt-2 mx-2 shipmentvalue"
                                  placeholder="Total Value"
                                  id="totalValue"
                                  name="totalValue"
                                  value={
                                    (Number(productDetails?.taxableValue) +
                                      (Number(productDetails?.taxRate) / 100) *
                                      Number(productDetails?.taxableValue)) === 0 ? "" : Number(productDetails?.taxableValue) +
                                    (Number(productDetails?.taxRate) / 100) *
                                    Number(productDetails?.taxableValue)
                                  }
                                  onChange={(e) => {
                                    setProductDetails({
                                      ...productDetails,
                                      taxableValue: Number(e.target.value),
                                    })
                                  }}
                                />
                              </div>
                              <p
                                className="mt-1 tax"
                                style={{ fontSize: "12px", marginLeft: "5px" }}
                              >
                                Auto Calculated (Editable)
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="form-check mt-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            // value={formData.isContainFragileItem}
                            // onChange={(e) => {
                            //   setFormData({
                            //     ...formData,
                            //     isContainFragileItem: e.target.checked,
                            //   });
                            // }}
                            value={isContainFragileItem}
                            onChange={(e) => {
                              setIsContainFragile(e.target.checked);
                            }}
                          />
                          <p style={{ fontWeight: "bold" }}>
                            My shipment contains fragile items.
                          </p>
                        </div>

                        <div className="mt-4">
                          <p className="fw-bold">Payment Details</p>
                          <hr style={{ width: "680px" }} />

                          <div className="d-flex gap-4">
                            <div>
                              <div style={{
                                display: "flex",
                                justifyContent: "space-between"

                              }}>
                                <p style={{
                                  fontWeight: 600
                                }}>Invoice Number</p>
                                <p>Optional</p>
                              </div>
                              <input
                                className="p-2 rounded payment"
                                type="text"
                                placeholder="Enter Invoice Number"
                                id="invoiceNumber"
                                name="invoiceNumber"
                                value={order_invoice_number}
                                onChange={(e) =>
                                  setOrder_invoice_number(
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div>
                              <div style={{
                                display: "flex",
                                justifyContent: "space-between"

                              }}>
                                <p style={{
                                  fontWeight: 600
                                }}>Invoice Date</p>
                                <p>Optional</p>
                              </div>
                              <input
                                className="p-2 rounded payment"
                                type="date"
                                id="invoiceDate"
                                name="invoiceDate"
                                value={dateFormatter(order_invoice_date)}
                                form
                                onChange={(e) => {
                                  setOrder_invoid_date(
                                    dateFormatter(e.target.value)
                                  );
                                }}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">

                            <div>
                              <p className="mt-4 fw-bold">Payment Mode</p>
                              <select
                                className="p-2 rounded payment appearance-none border border-gray-300 text-gray-700 py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
                                id="paymentMode"
                                name="paymentMode"
                                value={payment_mode}
                                onChange={(e) => {
                                  if (e.target.value === "Select Payment Mode") return;
                                  setPaymentMode(e.target.value);
                                }}
                              >
                                <option value="Select Payment Mode">Select Payment Mode</option>
                                <option value="COD">Cash on Delivery</option>
                                <option value="Prepaid">Prepaid</option>
                              </select>
                            </div>
                            {payment_mode === "COD" ? (<div>
                              <p className="mt-4 fw-bold">Collectable Amount</p>
                              <input className="p-2 rounded payment" type="text" placeholder="Enter the collectable amount" onChange={(e) => setProductDetails({ ...productDetails, amount2Collect: e.target.value })} />
                            </div>) : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Status */}

            <div
              style={{
                width: "285px",
                height: "750px",
                fontFamily: "IBM Plex Sans Condensed",
              }}
              className="col-12 col-md-4 mt-3"
            >
              <div className="row1 border p-4 rounded bg-white mt-5 border-0">
                <h5 style={{ fontSize: "16px" }} className="fw-bold">
                  Delivery status
                </h5>
                <div>
                  <span className="d-flex">
                    <img
                      style={{
                        height: "25px",
                        width: "25px",
                        marginTop: "33px",
                        marginLeft: "4px",
                      }}
                      src={Ellipse}
                    />
                    <button className=" p-3 dropdown-toggle" style={{
                      marginLeft: "20px",
                    }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {hub.filter((item) => item._id === pickupAddress)[0]?.name || "Select facility"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {hub.map((h) => (
                        <div className="dropdown-item" key={h._id} onClick={(e) => {
                          console.log(e.target.value)
                          const hubId = hub.filter((h) => h.name === e.target.textContent)[0]._id;
                          setPickupAddress(hubId);
                        }
                        }>
                          {h.name}
                        </div>
                      ))}
                      <button onClick={() => setModalClose(true)} style={{
                        color: 'rgba(8, 23, 155, 1)'
                      }} type="button" className="dropdown-item border-top d-flex align-items-center" data-target="#pickupModalCenter" data-toggle="modal" >
                        <img src={plus} alt="" srcset="" className="mr-2" /><span className="mx-2" >Add Pickup location</span>
                      </button>
                    </div>


                    {modalClose &&
                      <div className="modal fade show" style={{
                        display: "block", position: "fixed", backgroundColor: "rgba(255, 255, 255, 0.4)",
                        paddingTop: "84px",
                        backdropFilter: "blur(5px)",
                      }}
                      >
                        <div
                          class="mx-auto modal-dialog-centered"
                          style={{
                            maxWidth: "700px"
                          }}
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                style={{ fontSize: "25px", fontWeight: "bold" }}
                                class="modal-title"
                                id="exampleModalLongTitle"
                              >
                                Add Pickup Location
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setModalClose(false)}
                              >
                                <span
                                  style={{ fontSize: "30px" }}
                                  aria-hidden="true"
                                >
                                  &times;
                                </span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div>
                                <div className="row d-flex my-2">
                                  <div className="col w-100 mb-2">
                                    <div className="w-100">
                                      <div className="fw-bold">Facility Name</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter Facility Name"
                                        name="facilityName"
                                        value={pickupAddressForm.facilityName}
                                        onChange={handleChangePickup}
                                      />
                                      <p style={{
                                        color: "gray",
                                        fontSize: "13px"
                                      }}>Please note that facility name cannot be edited after saving</p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="w-100">
                                      <div className="fw-bold">Contact Person Name (Optional)</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter contact person name"
                                        name="contactPersonName"
                                        value={pickupAddressForm.contactPersonName}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>

                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">Pickup Location Contact</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter contact person name"
                                        name="pickupLocContact"
                                        value={pickupAddressForm.pickupLocContact}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">Email (Optional)</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter email"
                                        name="email"
                                        value={pickupAddressForm.email}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                  <div className="w-100">
                                    <div className="w-100">
                                      <div className="fw-bold">Address Line</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2 w-100"
                                        placeholder="Enter address"
                                        name="address"
                                        value={pickupAddressForm.address}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                    <p style={{
                                      color: "gray",
                                      fontSize: "13px"
                                    }}>This will be used in the invoices that you will print.</p>
                                  </div>
                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">Country</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter country"
                                        name="country"
                                        value={pickupAddressForm.country}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">Pincode</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter pincode"
                                        name="pincode"
                                        value={pickupAddressForm.pincode}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">State</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Select state"
                                        name="state"
                                        value={pickupAddressForm.state}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                  <div className="col my-2">
                                    <div className="w-100">
                                      <div className="fw-bold">City</div>
                                      <input
                                        style={{ width: "320px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter city"
                                        name="city"
                                        value={pickupAddressForm.city}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <div style={{
                                      fontWeight: 550,
                                      fontSize: "24px"
                                    }}>Return</div>
                                    <input type="checkbox" id="pickupaddress" checked={pickupAddressBool} onChange={handleCheckboxChange} />
                                    <label htmlFor="pickupaddress" style={{
                                      margin: "5px 0 5px 10px"
                                    }}>
                                      Return address is the same as Pickup Address
                                    </label>
                                  </div>


                                  {!pickupAddressBool && (<><div className="w-100">
                                    <div className="w-100">
                                      <div className="fw-bold">Address Line</div>
                                      <input
                                        style={{ width: "260px" }}
                                        type="text"
                                        className="border rounded p-2 w-100"
                                        placeholder="Enter address"
                                        name="address"
                                        value={pickupAddressForm.address}
                                        onChange={handleChangePickup}
                                      />
                                    </div>
                                  </div>
                                    <div className="col my-2">
                                      <div className="w-100">
                                        <div className="fw-bold">Country</div>
                                        <input
                                          style={{ width: "260px" }}
                                          type="text"
                                          className="border rounded p-2"
                                          placeholder="Enter country"
                                          name="address"
                                          value={pickupAddressForm.country}
                                          onChange={handleChangePickup}
                                        />
                                      </div>
                                    </div>
                                    <div className="col my-2">
                                      <div className="w-100">
                                        <div className="fw-bold">Pincode</div>
                                        <input
                                          style={{ width: "260px" }}
                                          type="text"
                                          className="border rounded p-2"
                                          placeholder="Enter pincode"
                                          name="address"
                                          value={pickupAddressForm.pincode}
                                          onChange={handleChangePickup}
                                        />
                                      </div>
                                    </div>
                                    <div className="col my-2">
                                      <div className="w-100">
                                        <div className="fw-bold">State</div>
                                        <input
                                          style={{ width: "260px" }}
                                          type="text"
                                          className="border rounded p-2"
                                          placeholder="Select state"
                                          name="address"
                                          value={pickupAddressForm.state}
                                          onChange={handleChangePickup}
                                        />
                                      </div>
                                    </div>
                                    <div className="col my-2">
                                      <div className="w-100">
                                        <div className="fw-bold">City</div>
                                        <input
                                          style={{ width: "260px" }}
                                          type="text"
                                          className="border rounded p-2"
                                          placeholder="Enter city"
                                          name="address"
                                          value={pickupAddressForm.city}
                                          onChange={handleChangePickup}
                                        />
                                      </div>
                                    </div></>)}
                                </div>
                                <div class="modal-footer p-0 pt-2">
                                  <button type="button" class="btn btn-light mt-2" data-dismiss="modal" onClick={() => setModalClose(false)}>Cancel</button>
                                  <button class="btn btn-dark close" type="button" onClick={handleAddSellerDetails}>Add Pickup Location</button>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    }

                  </span>

                  <img
                    style={{ marginLeft: "16px", marginTop: "5px" }}
                    src={line}
                    alt=""
                  />

                  <p
                    style={{ marginTop: "-30px" }}
                    className="d-flex border p-2 mx-5 addseller"
                  >
                    <img
                      style={{ height: "13px", width: "13px" }}
                      src={bx_edit}
                    />

                    <p
                      class="details"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Add Seller Details
                    </p>

                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              style={{ fontSize: "25px", fontWeight: "bold" }}
                              class="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Add Seller Details
                            </h5>

                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span
                                style={{ fontSize: "30px" }}
                                aria-hidden="true"
                              >
                                &times;
                              </span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <div className="row d-flex my-2">
                                <div className="col">
                                  <div>
                                    <p className="fw-bold">Seller Name</p>
                                    <input
                                      style={{ width: "220px" }}
                                      type="text"
                                      className="border rounded p-2"
                                      placeholder="Enter Seller Name"
                                      name="sellerName"
                                      value={formData.sellerName}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <p className="fw-bold">GST No.</p>
                                    <input
                                      style={{ width: "220px" }}
                                      type="text"
                                      className="border rounded p-2"
                                      placeholder="Enter GST"
                                      name="address"
                                      value={formData.gstNo}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <input type="checkbox" name="Add Seller Address" id="" onChange={() => setAddSellerAdd(!addSellerAdd)} />
                                  <label htmlFor="Add seller address" style={{
                                    margin: "5px 0 5px 10px"
                                  }}>
                                    Add seller address
                                  </label>
                                </div>
                                {addSellerAdd && (<><div className="col">
                                  <div>
                                    <p className="fw-bold">Address</p>
                                    <input
                                      style={{ width: "220px" }}
                                      type="text"
                                      className="border rounded p-2"
                                      placeholder="Enter Address2"
                                      name="address2"
                                      value={formData.address}
                                      onChange={handleChange} />
                                  </div>
                                </div><div className="col">
                                    <div>
                                      <p className="fw-bold">Phone</p>
                                      <input
                                        style={{ width: "220px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange} />
                                    </div>
                                  </div><div className="col">
                                    <div>
                                      <p className="fw-bold">City</p>
                                      <input
                                        style={{ width: "220px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange} />
                                    </div>
                                  </div><div className="col">
                                    <div>
                                      <p className="fw-bold">State</p>
                                      <input
                                        style={{ width: "220px" }}
                                        type="text"
                                        className="border rounded p-2"
                                        placeholder="Enter State"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange} />
                                    </div>
                                  </div><div className="">
                                    <div>
                                      <p className="fw-bold">Pincode</p>
                                      <input
                                        style={{ width: "220px" }}
                                        type="text"
                                        className="border rounded p-2 w-100"
                                        placeholder="Pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange} />
                                    </div>
                                  </div></>)}
                              </div>
                              <div class="modal-footer p-0 pt-2">
                                <button type="button" class="btn btn-light mt-2" data-dismiss="modal">Cancel</button>
                                <button class="btn btn-dark close" type="button">Add Seller Details</button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </p>

                  <p className="d-flex p-2 gap-3">
                    <img
                      style={{
                        height: "20px",
                        width: "20px",
                        marginTop: "-15px",
                      }}
                      src={Rectangle}
                    />
                    <img
                      style={{
                        height: "16px",
                        width: "16px",
                        marginTop: "-5px",
                      }}
                      src={Solar_user}
                    />

                    <p
                      class="customer"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      Add Customer Details
                    </p>

                    <div
                      class="modal fade mt-5"
                      id="exampleModalLong"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title fw-bold"
                              id="exampleModalLongTitle"
                            >
                              Add Customer Details
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span
                                style={{ fontSize: "30px" }}
                                aria-hidden="true"
                              >
                                &times;
                              </span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div className="row d-flex justify-content-between">
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">Customer Name</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Enter Customer Name"
                                    // value={addCustomer.name}
                                    // onChange={(e) => {
                                    //   setAddCustomer({
                                    //     ...addCustomer,
                                    //     name: e.target.value,
                                    //   });
                                    // }}
                                    value={customerDetails?.name}
                                    onChange={(e) => {
                                      setCustomerDetails({
                                        ...customerDetails,
                                        name: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">Contact Number</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Enter Contact Number"
                                    // value={addCustomer.phone}
                                    // onChange={(e) => {
                                    //   setAddCustomer({
                                    //     ...addCustomer,
                                    //     phone: e.target.value,
                                    //   });
                                    // }}
                                    value={customerDetails?.phone}
                                    onChange={(e) =>
                                      setCustomerDetails({
                                        ...customerDetails,
                                        phone: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-2">
                              <p className=" m-1 fw-bold">Address Line 1</p>
                              <input
                                type="text"
                                className="border rounded p-2 w-100"
                                placeholder="Address Line 1"
                                // value={addCustomer.address}
                                // onChange={(e) => {
                                //   setAddCustomer({
                                //     ...addCustomer,
                                //     address: e.target.value,
                                //   });
                                // }}
                                value={customerDetails?.address}
                                onChange={(e) => {
                                  setCustomerDetails({
                                    ...customerDetails,
                                    address: e.target.value,
                                  });
                                }}
                              />
                            </div>

                            <div className="mt-2">
                              <div className="d-flex justify-content-between">
                                <p className="m-1 fw-bold">Address Line 2</p>
                                <p className="m-1 opacity-50">Optional</p>
                              </div>
                              <input
                                type="text"
                                className="border rounded p-2 w-100"
                                placeholder="Address Line 2"
                                // value={addCustomer.address}
                                // onChange={(e) => {
                                //   setAddCustomer({
                                //     ...addCustomer,
                                //     addCustomer: e.target.value,
                                //   });
                                // }}
                                value={
                                  customerDetails?.addressLine2
                                    ? customerDetails?.addressLine2
                                    : ""
                                }
                                onChange={(e) => {
                                  setCustomerDetails({
                                    ...customerDetails,
                                    addressLine2: e.target.value,
                                  });
                                }}
                              />
                            </div>

                            <div className="row d-flex justify-content-between mt-2">
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">Country</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Enter Country"
                                    value={
                                      customerDetails?.country
                                        ? customerDetails?.country
                                        : ""
                                    }
                                    onChange={(e) => {
                                      setCustomerDetails({
                                        ...customerDetails,
                                        country: e.target.value,
                                      });
                                    }}
                                  // value={addCustomer.country}
                                  // onChange={(e) => {
                                  //   setAddCustomer({
                                  //     ...addCustomer,
                                  //     country: e.target.value,
                                  //   });
                                  // }}
                                  // value={customerDetails}
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">Pincode</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Pincode"
                                    // value={addCustomer.pincode}
                                    // onChange={(e) => {
                                    //   setAddCustomer({
                                    //     ...addCustomer,
                                    //     pincode: e.target.value,
                                    //   });
                                    // }}
                                    value={customerDetails?.pincode}
                                    onChange={(e) => {
                                      setCustomerDetails({
                                        ...customerDetails,
                                        pincode: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row d-flex justify-content-between mt-2">
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">State</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Enter State"
                                    // value={addCustomer.state}
                                    // onChange={(e) => {
                                    //   setAddCustomer({
                                    //     ...addCustomer,
                                    //     state: e.target.value,
                                    //   });
                                    // }}
                                    value={
                                      customerDetails?.state
                                        ? customerDetails?.state
                                        : ""
                                    }
                                    onChange={(e) => {
                                      setCustomerDetails({
                                        ...customerDetails,
                                        state: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col">
                                <div>
                                  <p className="m-1 fw-bold">City</p>
                                  <input
                                    style={{ width: "220px" }}
                                    type="text"
                                    className="border rounded p-2"
                                    placeholder="Enter City"
                                    // value={addCustomer.city}
                                    // onChange={(e) => {
                                    //   setAddCustomer({
                                    //     ...addCustomer,
                                    //     city: e.target.value,
                                    //   });
                                    // }}
                                    value={customerDetails.city}
                                    onChange={(e) => {
                                      setCustomerDetails({
                                        ...customerDetails,
                                        city: e.target.value,
                                      });
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-light"
                              data-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              class="btn btn-dark close"
                              type="button"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              {" "}
                              Add Customer Details{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>

                  <hr />
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Sans Condensed",
                    }}
                  >
                    Box Details
                  </p>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "11px",
                      fontFamily: "IBM Plex Sans Condensed",
                    }}
                  >
                    How many boxes will you ship?
                  </p>

                  <div className="d-flex gap-3 mx-3 ">
                    <button
                      type={"button"}
                      onClick={() => {
                        if (noOfBox !== 0) {
                          setNoOfBox(noOfBox - 1);
                        }
                      }}
                      style={{
                        background: "rgba(237, 237, 237, 1)",
                        height: "39px",
                        width: "36px",
                      }}
                      className="border w-25 p-1 text-center rounded OrderID"
                    >
                      <i class="bi bi-dash"></i>
                    </button>

                    <input
                      className="border rounded p-2 w-25 text-center OrderID"
                      id="numberOfBox"
                      value={noOfBox + ""}
                      onChange={(e) => {
                        setNoOfBox(Number(e.target.value));
                      }}
                    />

                    <button
                      type={"button"}
                      onClick={() => {
                        setNoOfBox(noOfBox + 1);
                      }}
                      style={{
                        background: "rgba(237, 237, 237, 1)",
                        height: "39px",
                        width: "36px",
                      }}
                      className="border w-25 p-1 text-center rounded OrderID"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>

                  <p
                    style={{ fontWeight: "600", fontSize: "11px" }}
                    className="mt-3"
                  >
                    Package Type
                  </p>
                  <select
                    className="create_shipment_dropdown"
                    onChange={(e) => { }}
                  >
                    <option>Select Package Type</option>
                    <option>Plastic cover/Flyer</option>
                    <option>Cardboard Box</option>
                  </select>

                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "12.5px",
                      fontFamily: "IBM Plex Sans Condensed",
                      marginLeft: "3px",
                      marginTop: "5px",
                      color: "#8B8B8B",
                    }}
                  >
                    Select a box for Packing & Shipping.
                  </p>
                  <p
                    style={{
                      fontFamily: "IBM Plex Sans Condensed",
                      fontWeight: "600",
                      fontSize: "11px",
                      marginLeft: "5px",
                    }}
                  >
                    Size
                  </p>
                  <div className="d-flex justify-content-between gap-2">
                    <input
                      style={{ height: "33px", width: "52px" }}
                      className="border rounded OrderID"
                      type="text"
                      id="boxHeight"
                      name="boxHeight"
                      // value={formData.boxHeight}
                      // onChange={handleChange}
                      value={orderBoxLength}
                      onChange={(e) =>
                        setOrderBoxLength(Number(e.target.value))
                      }
                    />
                    <input
                      style={{ height: "33px", width: "52px" }}
                      className="border rounded OrderID"
                      type="text"
                      id="boxLength"
                      name="boxLength"
                      // value={orderBoxLength}
                      // onChange={(e)=> setOrderBoxLength(Number(e.target.value))}
                      value={orderBoxWidth}
                      onChange={(e) => setOrderBoxWidth(Number(e.target.value))}
                    />

                    <input
                      style={{ height: "33px", width: "52px" }}
                      className="border rounded OrderID"
                      type="text"
                      id="boxWidth"
                      name="boxWidth"
                      // value={formData.boxWidth}
                      // onChange={handleChange}
                      value={orderBoxHeight}
                      onChange={(e) =>
                        setOrderBoxHeight(Number(e.target.value))
                      }
                    />

                    <span
                      style={{
                        height: "31px",
                        width: "52px",
                        background: "#F6F7F7",
                      }}
                      className="border w-25 p-2 rounded OrderID"
                      type="text"
                    >
                      cm
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "12.5px",
                      fontWeight: "400",
                      color: "#8B8B8B",
                    }}
                    className="mt-3 mx-2"
                  >
                    Length x Breadth x Height should be at-least 15cm.
                  </p>

                  <p
                    style={{ fontWeight: "600", fontSize: "11px" }}
                    className="mx-3"
                  >
                    Weight
                  </p>
                  <input
                    style={{ height: "34px", width: "175px" }}
                    className="p-2 rounded weight"
                    type="text"
                    id="boxWeight"
                    name="boxWeight"
                    placeholder="Enter package weight"
                    // value={formData.boxWeight}
                    // onChange={handleChange}
                    value={orderWeight}
                    onChange={(e) => setOrderWeight(e.target.value)}
                  />

                  <span
                    style={{
                      height: "30px",
                      width: "56px",
                      background: "#F6F7F7",
                    }}
                    className="border w-50 p-2 rounded OrderID"
                    type="text"
                  >
                    Kg
                  </span>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "11px",
                      color: "#8B8B8B",
                    }}
                    className="mt-2 mx-2"
                  >
                    Package weight should be 0.5kg.
                  </p>

                  {/* <div>
                    <p
                      style={{
                        color: "#8B8B8B",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                      className="fw-bold mx-1"
                    >
                      Shipping Total Breakup
                    </p>

                    <div
                      style={{
                        height: "115px",
                        width: "210px",
                        fontSize: "11px",
                      }}
                      className="border p-3 rounded fw-bold shipping"
                    >
                      <div className="d-flex justify-content-between ">
                        <span>Freight cost</span>
                        <span>--</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Fuel surcharge</span>
                        <span>--</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>GST - 18% (CGST+SGST)</span>
                        <span>--</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Total</span>
                        <span>--</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Cod</span>
                        <span>--</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: "IBM Plex Sans Condensed",
              fontWeight: "bold",
            }}
            className="d-flex gap-3 mt-2"
          >
            <button type="cancel" className="cancel_button">
              {" "}
              Cancel{" "}
            </button>
            <button
              type="button"
              className="create_shipment"
              value="submit"
              onClick={hitApi}
            >
              Create Shipment{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCreateShipment;
