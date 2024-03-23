import React, {useContext} from "react";
import { navbarOpenContext } from "../../App";

const data = [
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone:"35 Kg",
    Refund_Amount:"250.00"
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone:"35 Kg",
    Refund_Amount:"250.00"
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone:"35 Kg",
    Refund_Amount:"250.00"
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone:"35 Kg",
    Refund_Amount:"250.00"
  },
];

const DomesticWalletRefund = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <>
      <div
        style={{
          fontFamily: "IBM Plex Sans Condensed",
          height: "100vh",
          background: "rgba(217, 217, 217, 0.32)",
        }}
        className="table-container py-5 text-center"
      >
        <div className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}>
          <div className="d-flex justify-content-between">
            <p
              style={{ fontWeight: "bold", margin: "0px", fontSize: "25px" }}
              class="d-flex float-right mx-2"
            >
              Domestic Wallet
            </p>
            <div
              style={{
                height: "60px",
                width: "410px",
                background: "white",
                border: "none",
                fontSize: "16px",
                fontWeight: "500",
                alignItems: "center",
              }}
              className="d-flex rounded"
            >
              <p className=" justify-content mx-3 mt-3">
                Current Wallet Balance : ₹ 100.00{" "}
              </p>
              <button
                style={{
                  fontSize: "13px",
                  background: "rgba(193, 57, 43, 1)",
                  height: "35px",
                  width: "130px",
                  color: "white",
                  fontWeight: "700",
                  borderRadius: "6px",
                  alignItems: "center",
                }}
                type="submit"
              >
                Recharge Wallet
              </button>
            </div>
          </div>
          <div className="d-flex gap-5">
            <button
              style={{
                justifyContent: "right",
                fontWeight: "bold",
              }}
              type="button"
              class="float-right btn btn-sm wallethistory"
            >
              Spends
            </button>
            <button
              style={{
                fontWeight: "bold",
                fontWeight: "bold",
              }}
              type="button"
              class="float-right btn btn-sm"
            >
              Refunds
            </button>
            <button
              style={{
                justifyContent: "right",
                fontWeight: "bold",
              }}
              type="button"
              class="float-right btn btn-sm wallethistory"
            >
              Recharges
            </button>
          </div>
          <div style={{ background: "white" }} className="border p-5 rounded mt-3">
            <div className="d-flex">
              <input style={{width:"450px", padding:"10px"}}
                className="border rounded"
                type="date"
                name=""
                id=""
              />
            </div>
            <table className="billingtable">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction Date</th>
                  <th>AWS Number</th>
                  <th>Weight</th>
                  <th>Zone</th>
                  <th>Refund Amount ( ₹ )</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.Transaction_ID}</td>
                    <td>{row.Transaction_Date}</td>
                    <td style={{ color: "#08179B", textDecoration: "underline", border:"none" }}>{row.AWS_Number}</td>
                    <td>{row.Weight}</td>
                    <td>{row.Zone}</td>
                    <td>{row.Refund_Amount}</td>
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

export default DomesticWalletRefund;
