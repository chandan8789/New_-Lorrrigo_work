// import React from "react";

// const ShippingCharges = () => {
//   return (
    // <div>
    //   <div className="container py-5">
    //     <div style={{width:"auto", height:"450px"}} className="border rounded">
    //         <div className="d-flex justify-content-between gap-3 mt-3 mx-3">
    //           <div class="card" style={{width: "18rem"}}>
    //             <div class="card-body text-center">
    //               <p class="card-subtitle mb-2 text-muted">Total Freight  Charges</p>
    //               <p class="card-text">₹ 400</p>
            
    //             </div>
    //           </div>
    //           <div class="card" style={{width: "18rem"}}>
    //             <div class="card-body text-center">
    //               <p class="card-subtitle mb-2 text-muted">Successful Recharge</p>
    //               <p class="card-text">₹ 400</p>
            
    //             </div>
    //           </div>
    //           <div class="card" style={{width: "18rem"}}>
    //             <div class="card-body text-center">
    //               <p class="card-subtitle mb-2 text-muted">Successful Recharge</p>
    //               <p class="card-text">₹ 400</p>
            
    //             </div>
    //           </div>
    //           <div class="card" style={{width: "18rem"}}>
    //             <div class="card-body text-center">
    //               <p class="card-subtitle mb-2 text-muted">Successful Recharge</p>
    //               <p class="card-text">₹ 400</p>
            
    //             </div>
    //           </div>
    //           <div class="card" style={{width: "18rem"}}>
    //             <div class="card-body text-center">
    //               <p class="card-subtitle mb-2 text-muted">Successful Recharge</p>
    //               <p class="card-text">₹ 400</p>
            
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default ShippingCharges;
import React, {useContext} from 'react';
import { navbarOpenContext } from "../../App";


const data = [
  { Order_ID: "854516213512", 
  SR_Transaction_ID: '585135251812142', 
  Courier: "Express Surface", 
  Shipment_Status: 'Delivered',
  AWB_Assigned_Date:"23 May 2023",
  Applied_Weight_Charges:"250.00",
  Excess_Weight_Charges:"100.00",
  On_hold_Amount:"--",
  Total_Freight_Charger:"350.00",
  Entered_Weight_Dimensions:"2.16 KG  12x12x4 Cm",
  Charged_Weight_Dimensions:"3.66 KG  26x75x4 Cm",
},
{ Order_ID: "854516213512", 
SR_Transaction_ID: '585135251812142', 
Courier: "Express Surface", 
Shipment_Status: 'Delivered',
AWB_Assigned_Date:"23 May 2023",
Applied_Weight_Charges:"250.00",
Excess_Weight_Charges:"100.00",
On_hold_Amount:"--",
Total_Freight_Charger:"350.00",
Entered_Weight_Dimensions:"2.16 KG  12x12x4 Cm",
Charged_Weight_Dimensions:"3.66 KG  26x75x4 Cm",
},
{ Order_ID: "854516213512", 
SR_Transaction_ID: '585135251812142', 
Courier: "Express Surface", 
Shipment_Status: 'Delivered',
AWB_Assigned_Date:"23 May 2023",
Applied_Weight_Charges:"250.00",
Excess_Weight_Charges:"100.00",
On_hold_Amount:"--",
Total_Freight_Charger:"350.00",
Entered_Weight_Dimensions:"2.16 KG  12x12x4 Cm",
Charged_Weight_Dimensions:"3.66 KG  26x75x4 Cm",
},
{ Order_ID: "854516213512", 
SR_Transaction_ID: '585135251812142', 
Courier: "Express Surface", 
Shipment_Status: 'Delivered',
AWB_Assigned_Date:"23 May 2023",
Applied_Weight_Charges:"250.00",
Excess_Weight_Charges:"100.00",
On_hold_Amount:"--",
Total_Freight_Charger:"350.00",
Entered_Weight_Dimensions:"2.16 KG  12x12x4 Cm",
Charged_Weight_Dimensions:"3.66 KG  26x75x4 Cm",
}
];

const ShippingCharges = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);


  return (
    <>
    <div style={{ fontFamily: "IBM Plex Sans Condensed", height:'100vh', background: "rgba(217, 217, 217, 0.32)"}} className="table-container py-5 text-center">
    <div className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}>
      <p style={{fontWeight:"bold",margin:"0px", fontSize:"25px" }} class="d-flex float-right mx-2">Billing</p>
          <div className='d-flex'>
              <button style={{ justifyContent: 'right', fontWeight:"bold", textDecoration:"underline"}} type="button" class="float-right btn btn-sm wallethistory">Wallet History</button>
              <button style={{fontWeight:"bold", fontWeight:"bold", textDecoration:"underline"}} type="button" class="float-right btn btn-sm">Shipping Charges</button>
          </div>
         <div style={{background:"white"}} className='border p-4 rounded mt-2'>
      
      
      <div  class="row">
        <div class="col mt-2">
      <div style={{background: "rgba(193, 57, 43, 0.12)", borderRadius:"4px", border:"none", width:"210px", height:"80px"}} class="card">
        <div style={{}} class="card-body">
          <span class="card-title">Total Freight  Charges</span>
          <p class="card-text">₹ 400</p>
        </div>
      </div>
        </div>
        <div class="col mt-2">
        <div style={{background: "rgba(193, 57, 43, 0.12)", borderRadius:"4px", border:"none", width:"210px", height:"80px"}} class="card">
        <div style={{}} class="card-body">
          <span class="card-title">Successful Recharge</span>
          <p class="card-text">₹ 400</p>
        </div>
      </div>
        </div>
        <div class="col mt-2">
        <div style={{background: "rgba(193, 57, 43, 0.12)", borderRadius:"4px", border:"none", width:"210px", height:"80px"}} class="card">
        <div style={{}} class="card-body">
          <span class="card-title">Successful Recharge</span>
          <p class="card-text">₹ 400</p>
        </div>
      </div>
        </div>
        <div class="col mt-2">
        <div style={{background: "rgba(193, 57, 43, 0.12)", borderRadius:"4px", border:"none", width:"210px", height:"80px"}} class="card">
        <div style={{}} class="card-body">
          <span class="card-title">Successful Recharge</span>
          <p class="card-text">₹ 400</p>
        </div>
      </div>
        </div>
        <div class="col mt-2">
        <div style={{background: "rgba(193, 57, 43, 0.12)", borderRadius:"4px", border:"none", width:"210px", height:"80px"}} class="card">
        <div style={{}} class="card-body">
          <span class="card-title">Successful Recharge</span>
          <p class="card-text">₹ 400</p>
        </div>
      </div>
        </div>
      </div>
        <table className='billingtable'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>AWB Number</th>
              <th>Courier</th>
              <th>Shipment Status</th>
              <th>AWB Assigned Date </th>
              <th>Applied Weight Charges (₹)</th>
              <th>Excess Weight Charges (₹)</th>
              <th>On hold Amount (₹)</th>
              <th>Total Freight Charger (₹)</th>
              <th>Entered Weight & Dimensions</th>
              <th>Charged Weight & Dimensions</th>
              <th>View transaction Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.Order_ID}</td>
                <td>{row.SR_Transaction_ID}</td>
                <td>{row.Courier}</td>
                <td>{row.Shipment_Status}</td>
                <td>{row.AWB_Assigned_Date}</td>
                <td>{row.Applied_Weight_Charges}</td>
                <td>{row.Excess_Weight_Charges}</td>
                <td>{row.On_hold_Amount}</td>
                <td>{row.Total_Freight_Charger}</td>
                <td>{row.Entered_Weight_Dimensions}</td>
                <td>{row.Charged_Weight_Dimensions}</td>
                <button style={{fontSize:"13px", background: "rgba(193, 57, 43, 1)", height:"31px", width:"100px", color:"white", fontWeight:"700", borderRadius:"6px", alignItems:"center", marginTop:"20px"}} type='submit'>View</button>
              </tr>
            ))}
          </tbody>
        </table>
      
          </div>
    </div>

    </div>
    </>
  );
};


export default ShippingCharges;

