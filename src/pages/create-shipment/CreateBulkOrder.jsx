import React, { useState } from "react";
import newaddress from "../../images/NewAddress.png"

const CreateBulkOrder = () => {


  const [pincode, setPinCode] = useState('');

  const handlePincode= (e) => 
  {
    setPinCode(e.target.value);
  };


  return (
    <div
      style={{
        fontFamily: "IBM Plex Sans Condensed",
        background: "rgba(217, 217, 217, 0.32)",
      }}
    >
      <div class="container">
        <div class="row py-5">
      <p className="float-right" style={{fontWeight:"500", fontSize:"25px", marginLeft:"115px"}}>Create a New Shipment (B2B)</p>
          <div style={{marginLeft: "110px"}} class="col-12 col-md-4 mt-1">
            <div
              class="card"
              style={{ width: "450px", border: "none" }}
            >
              <div class="card-body mx-3">
                {/* <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title">LR Details </p> */}
                {/* <div className="d-flex mt-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label style={{fontWeight:"600", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                      MANUAL
                    </label>
                  </div>
                  <div class="form-check mx-5">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      AUTOMATIC
                    </label>
                  </div>
                </div> */}
                {/* <div>
                  <input
                    style={{
                      height: "40px",
                      width: "390px",
                      paddingLeft: "10px",
                      boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                    }}
                    className="border rounded mt-3"
                    type="text"
                    placeholder="LR No. *"
                  />
                </div> */}

                <div className="mt-2">
                  <span style={{fontWeight:"600", fontSize:"17px"}}>Client Name</span>
                  <input
                    style={{
                      height: "40px",
                      width: "390px",
                      paddingLeft: "10px",
                      // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                    }}
                    className="border rounded mt-3"
                    type="text"
                    placeholder="Client Names"
                  />
                </div>
              </div>
            </div>

            <div
              class="card mt-3"
              style={{ width: "450px", height: "305px", border: "none" }}
            >
              <div
                className="mx-4 mt-3"
                style={{
                  border: "1px solid",
                  width: "390px",
                  height: "270px",
                  borderRadius: "4px",
                }}
              >
                <div class="card-body mx-2">
                  <p style={{fontWeight:"500", fontSize:"15px"}} class="card-title">FREIGHT (PAID/TO PAY) </p>
                  <div className="d-flex mt-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label style={{fontWeight:"600", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                        MANUAL
                      </label>
                    </div>
                    {/* <div class="form-check mx-5">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label style={{fontWeight:"600", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                        AUTOMATIC
                      </label>
                    </div> */}
                  </div>
                  <div className="mt-3">
                    <p style={{fontWeight:"500", fontSize:"15px"}}>PICKUP TYPE</p>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label style={{fontWeight:"500", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                          FM-PICKUP
                        </label>
                      </div>
                      {/* <div class="form-check mx-5">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label style={{fontWeight:"500", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                          SELF-DROP
                        </label>
                      </div> */}
                    </div>
                  </div>

                  <div className="mt-3">
                    <p style={{fontWeight:"500", fontSize:"15px"}}>INSURANCE TYPE</p>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label style={{fontWeight:"600", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                          OWNER RISK
                        </label>
                      </div>
                      {/* <div class="form-check mx-5">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label style={{fontWeight:"600", fontSize:"13px"}} class="form-check-label" for="flexRadioDefault1">
                          CARRIER RISK
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card mt-3"
              style={{ width: "450px", border: "none" }}
            >
              <div class="card-body mx-3 mt-2">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title">Pickup Location </p>

                <div className="mt-2">
                  <input
                    // style={{
                    //   height: "40px",
                    //   width: "390px",
                    //   paddingLeft: "10px",
                    //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                    // }}
                    className="border rounded mt-3 p-2 w-100"
                    type="text"
                    placeholder="Search by name, city or pincode"
                  />
                </div>
              </div>
            </div>

            <div
              class="card mt-3"
              style={{ width: "450px", height:"200px" }}
            >
              {/* <div class="card-body mx-3 d-flex justify-content-between">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title">Shipment Details</p>
                <p style={{fontWeight:"400", fontSize:"15px"}}>Total no. of boxes: 0</p>
              </div> */}

              {/* <div class="card-body mx-3 d-flex justify-content-between">
                <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Product Description*"
                  />
                  <p style={{fontWeight:"400", fontSize:"13px", marginLeft:"5px", color: "rgba(0, 0, 0, 0.7)"}}>0/300 words</p>
                </div>
                <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Total weight (Kg)*"
                  />
                </div>
              </div> */}


             
              {/* <div class="card-body mx-3 d-flex justify-content-between">
                <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Client reference ID/Order ID*"
                  />
                </div>
                <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Qty*"
                  />
                </div>
              </div> */}

              <div className="d-flex justify-content-between mx-4 mt-3">
                  <p style={{fontSize:"17px"}} className="fw-bold">Shipment Details</p>
                  <p style={{fontSize:"15px", fontWeight:"400"}}>Total no. of boxes: 0</p>
              </div>

              <div className="d-flex justify-content-between mx-4">
              <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px", width:"210px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Product Description*"
                  />
                  <p style={{fontWeight:"400", fontSize:"13px", marginLeft:"5px", color: "rgba(0, 0, 0, 0.7)"}}>0/300 words</p>
                </div>
                <div>
                  <input
                    style={{ height: "40px", paddingLeft: "10px" }}
                    className="border rounded"
                    type="text"
                    placeholder="Total weight (Kg)*"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between mx-4 mt-2">
                <input style={{ height: "40px", paddingLeft: "10px", width:"210px" }} type="text" className="rounded border" placeholder="Client reference ID/Order ID*"/>
                <input style={{ height: "40px", paddingLeft: "10px" }} type="text" className="rounded border" placeholder="Qty*"/>
              </div>


            </div>

            <div
              class="card mt-3"
              style={{ width: "450px", border: "none" }}
            >
              <div class="card-body mx-3 mt-2">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title">Dimensions* </p>

                <div class="dropdown">
                  <select
                    style={{ height: "37px", width: "180px" }}
                    className="border rounded"
                  >
                    <option value="">Centimeter</option>
                    <option value="">Option1</option>
                    <option value="">Option2</option>
                    <option value="">Option3</option>
                  </select>
                </div>

                <div className="d-flex mt-3 rounded justify-content-between">
                  <div>
                    <input
                      style={{
                        width: "56px",
                        height: "34px",
                        textAlign: "center",
                        // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                  
                      }}
                      className="border rounded"
                      type="text"
                      placeholder="Qty*"
                    />
                  </div>
                  <div>
                    <input
                      style={{
                        width: "71px",
                        height: "34px",
                        textAlign: "center",
                        // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      }}
                      className="border rounded"
                      type="text"
                      placeholder="Length"
                    />
                  </div>

                  <div>
                    <input
                      style={{
                        width: "71px",
                        height: "34px",
                        textAlign: "center",
                        // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      }}
                      className="border rounded"
                      type="text"
                      placeholder="Width"
                    />
                  </div>

                  <div>
                    <input
                      style={{
                        width: "71px",
                        height: "34px",
                        textAlign: "center",
                        // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      }}
                      className="border rounded"
                      type="text"
                      placeholder="Height"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div
                style={{
                  fontFamily: "IBM Plex Sans Condensed",
                  fontWeight: "bold",
                }}
                className="d-flex gap-3 mt-5"
              >
                <div>
                  <button type="submit" style={{boxShadow: "0px -11px 16.600000381469727px 0px rgba(0, 0, 0, 0.22) inset",
                      height: "39px",
                      width: "125px",
                      background: "rgba(255, 255, 255, 1)",
                      color: "black", 
                    borderRadius:"7px"}}>
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    type="submit" style={{boxShadow: "0px -11px 16.600000381469727px 0px rgba(0, 0, 0, 0.22) inset",
                      height: "39px",
                      width: "199px",
                      background: "rgba(67, 67, 67, 1)",
                      boxShadow: "0px -8px 16.600000381469727px 0px rgba(255, 255, 255, 0.24) inset",
                      color: "white", 
                    borderRadius:"7px"}}
                  >
                    Create Shipment
                  </button>
                </div>
              </div>

      </div>









          {/* second col */}

          <div style={{marginLeft:"50px"}} class="col-md-6 mt-1">
            <div class="card" style={{ width: "566px", height:"120px", border: "none" }}>
              <div class="card-body">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title mx-4">Invoice Details </p>
                <div className="d-flex mt-3 rounded justify-content-around">
                  <div class="dropdown">
                    {/* <select
                      style={{ height: "37px", width: "200px", boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)" }}
                      className="border rounded"
                    >
                      <option value="">Centimeter</option>
                      <option value="">Option1</option>
                      <option value="">Option2</option>
                      <option value="">Option3</option>
                    </select> */}
                    <input className="p-2 border rounded" type="text" placeholder="PRE-PAID" />
                    
                  </div>

                  <div>
                    <input
                      // style={{
                      //   width: "210px",
                      //   height: "34px",
                      //   paddingLeft: "10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      // }}
                      className="border rounded p-2"
                      type="number"
                      placeholder="Amount to collect*"
                    />
                  </div>
                </div>
              </div>
            </div>

          
            <div class="card mt-3" style={{ width: "566px", height:"120px", border: "none" }}>
              <div class="card-body">
                <div className="d-flex justify-content-around">
                  <p style={{fontWeight:"500", fontSize:"15px"}} class="card-title mx-4">E-Waybill </p>
                  <p style={{fontWeight:"500", fontSize:"15px"}} class="card-title mx-4">Amount </p>
                  <p style={{fontWeight:"500", fontSize:"15px"}} class="card-title mx-4">Invoice No </p>
                </div>
                <div className="d-flex mt-3 gap-4 mx-5">
               
                  <div>
                    <input
                      // style={{
                      //   width: "145px",
                      //   height: "34px",
                      //   paddingLeft:"10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      // }}
                      className="border rounded p-2 w-100"
                      type="number"
                      placeholder="E-Waybill"
                    />
                  </div>
                  <div>
                    <input
                      // style={{
                      //   width: "145px",
                      //   height: "34px",
                      //   paddingLeft:"10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      // }}
                      className="border rounded p-2 w-100"
                      type="number"
                      placeholder="Amount*"
                    />
                  </div>

                  <div>
                    <input
                      // style={{
                      //   width: "145px",
                      //   height: "34px",
                      //   paddingLeft:"10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"

                      // }}
                      className="border rounded p-2 w-100"
                      type="number"
                      placeholder="Invoice no.*"
                    />
                  </div>

                </div>


              </div>
            </div>

            <div class="card mt-3" style={{ width: "566px", height:"120px", border: "none" }}>
              <div class="card-body">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title mx-4">GST Details </p>
                <div className="d-flex mt-3 rounded justify-content-around">
                <div>
                    <input
                      // style={{
                      //   width: "210px",
                      //   height: "34px",
                      //   paddingLeft:"10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"

                      // }}
                      className="border rounded p-2 w-100"
                      type="text"
                      placeholder="Shipper GSTIN"
                    />
                  </div>

                  <div>
                    <input
                      // style={{
                      //   width: "210px",
                      //   height: "34px",
                      //   paddingLeft:"10px",
                      //   boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)"
                      // }}
                      className="border rounded p-2 w-100"
                      type="text"
                      placeholder="Consignee GSTIN"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-3" style={{ width: "566px", height:"520px", border: "none"}}>
              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{fontWeight:"600", fontSize:"15px"}} className="mt-3 fw-bold mx-1">Send To</p>
                  <input
                    style={{
                      width: "300px",
                    }}
                    className="border rounded mt-2 p-2"
                    type="number"
                    id="pincode"
                    name="pincode"
                    maxLength={6}
                    placeholder="Entre Pincode"
                    value={pincode}
                    onChange={handlePincode}
                  />
          <button style={{
  boxShadow: "0px -11px 16.600000381469727px 0px rgba(0, 0, 0, 0.22) inset",
  height: "40px",
  width: "130px",
  background: "rgba(255, 255, 255, 1)",
  color: "black", 
  fontWeight:"500",
  fontSize:"12",
borderRadius:"7px",
marginTop:"12px",

}} type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">New Address</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Address</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span style={{fontSize:"30px"}} aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div className="row">
              <div className="col">
                <input className="border rounded p-2 w-100" type="text" placeholder="Store Code" />
              </div>
              <div className="col">
                <input className="border rounded p-2 w-100" type="text" placeholder="Company" />
              </div>
        </div>

        <div className="row mt-3">
            <p className="m-1">Contact Person</p>
              <div className="col">
                <input className="border rounded p-2 w-100" type="text" placeholder="Name" />
              </div>
              <div className="col">
                <input className="border rounded p-2 w-100" type="number" placeholder="Phone Number" />
              </div>
        </div>

        <div className="row mt-3">
            <p className="m-1">Address</p>
          <div className="col">
            <input type="text" className="border rounded p-2 w-100" placeholder="Address" />
          </div>
        </div>
        
        <div className="d-flex justify-content-between gap-2 mt-3">
            <input type="text" className="p-2 border rounded w-100" placeholder="Pin Code" />
            <input type="text" className="p-2 border rounded w-100" placeholder="City" />
            <input type="text" className="p-2 border rounded w-100" placeholder="State" />
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light mt-1" data-dismiss="modal">CANCEL</button>
        <button type="button" class="btn btn-dark">PROCESS</button>
      </div>
    </div>
  </div>
</div>

                </div>

                <div className="text-center">
                  <img style={{height:"160px", width:"160px"}} class="rounded mx-auto d-block mt-2" src={newaddress} alt="" />
                  <p className="mt-1 fw-bold" style={{margin:"0px", fontWeight:"600", fontSize:"17px"}}>Location</p>
                  <p style={{fontWeight:"400", fontSize:"15px"}}>Select your location for shipment</p>
                </div>
                </div>
            </div>

            <div class="card mt-3" style={{ width: "566px", height:"200px", border: "none" }}>
              <div class="card-body">
                <p style={{fontWeight:"600", fontSize:"17px"}} class="card-title mx-4">Upload Documents </p>
                <div className="d-flex mt-3 rounded justify-content-between mx-5">
                <div>
                   <p style={{fontWeight:"400", fontSize:"15px"}}>1. Invoice*</p>
                   <input type="file" id="upload" hidden/>
                    <label className="choosefile" for="upload">Upload Document</label>                 
                   </div>

                  <div>
                   <p style={{fontWeight:"400", fontSize:"15px"}}>2. Supporting Document</p>

                   <input type="file" id="upload" hidden/>
                    <label className="choosefile" for="upload">Upload Document</label>

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

export default CreateBulkOrder;
