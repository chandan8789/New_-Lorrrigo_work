import React, { useContext } from "react";
import { navbarOpenContext } from "../../App";

const data = [
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone: "35 Kg",
    Spend_Amount: "250.00",
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone: "35 Kg",
    Spend_Amount: "250.00",
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone: "35 Kg",
    Spend_Amount: "250.00",
  },
  {
    Transaction_ID: "516131511412",
    Transaction_Date: "20 Jan 2023",
    AWS_Number: "585135251812142",
    Weight: "35 Kg",
    Zone: "35 Kg",
    Spend_Amount: "250.00",
  },
];

const DomesticWalletSpend = () => {
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
        <div
          className="container py-4"
          style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        >
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
          <div
            style={{ background: "white" }}
            className="border p-5 rounded mt-3"
          >
            <div className="d-flex gap-4">
              <input
                style={{
                  width: "350px",
                  paddingLeft: "10px",
                  // boxShadow: "2px 2px 5px 2px rgb(212, 208, 208)",
                }}
                className="border rounded"
                type="text"
                placeholder="Search by name, city or pincode"
              />
              <select style={{ width: "270px" }} className="border rounded">
                <option value="">AWB Number</option>
                <option value="">Option1</option>
                <option value="">Option2</option>
                <option value="">Option3</option>
              </select>
              <input
                style={{ padding: "10px", width: "300px" }}
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
                  <th>Spend Amount ( ₹ )</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.Transaction_ID}</td>
                    <td>{row.Transaction_Date}</td>
                    <td>{row.AWS_Number}</td>
                    <td>{row.Weight}</td>
                    <td>{row.Zone}</td>
                    <td>{row.Spend_Amount}</td>
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

export default DomesticWalletSpend;
