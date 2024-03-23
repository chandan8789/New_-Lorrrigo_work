import React, { useContext } from "react";
import { navbarOpenContext } from "../../App";

const data = [
  {
    Date: "23 Jan 2023",
    SR_Transaction_ID: "516131511412",
    Amount: "- 112560",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    SR_Transaction_ID: "516131511412",
    Amount: "- 112560",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    SR_Transaction_ID: "516131511412",
    Amount: "- 112560",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    SR_Transaction_ID: "516131511412",
    Amount: "- 112560",
    Description: "Credit done for shipments. ",
  },
];

const BillingPage = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <>
      <div
        style={{
          fontFamily: "IBM Plex Sans Condensed",
          background: "rgba(217, 217, 217, 0.32)",
        }}
        // className="table-container py-4 text-center"
      >
        <div
          className="container py-4"
          style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
        >
          <p
            style={{ fontWeight: "bold", margin: "0px", fontSize: "25px" }}
            class="d-flex float-right mx-2"
          >
            Billing
          </p>
          <div className="d-flex">
            <button
              style={{
                justifyContent: "right",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              type="button"
              class="float-right btn btn-sm wallethistory"
            >
              Wallet History
            </button>
            <button
              style={{
                fontWeight: "bold",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              type="button"
              class="float-right btn btn-sm"
            >
              Shipping Charges
            </button>
          </div>
          <div
            style={{ background: "white" }}
            className="border p-5 rounded mt-2"
          >
            <div className="d-flex">
              <button
                style={{ justifyContent: "right" }}
                type="button"
                class="float-right btn btn-danger btn-sm"
              >
                Wallet History
              </button>
              <button
                style={{}}
                type="button"
                class="float-right btn btn-secondary btn-sm"
              >
                Recharge History
              </button>
              <input
                className="mx-5 w-25 border rounded p-2"
                type="date"
                name=""
                id=""
              />
            </div>
            <div class="row mt-4">
              <div class="col-sm-4 mt-2">
                <div
                  style={{
                    background: "rgba(193, 57, 43, 0.12)",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  class="card"
                >
                  <div class="card-body">
                    <h5 class="card-title">Successful Recharge</h5>
                    <p class="card-text">₹ 400</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mt-2">
                <div
                  style={{
                    background: "rgba(193, 57, 43, 0.12)",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  class="card"
                >
                  <div class="card-body">
                    <h5 class="card-title">Total Credit</h5>
                    <p class="card-text">₹ 400</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 mt-2">
                <div
                  style={{
                    background: "rgba(193, 57, 43, 0.12)",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  class="card"
                >
                  <div class="card-body">
                    <h5 class="card-title">Total Debit</h5>
                    <p class="card-text">₹ 400</p>
                  </div>
                </div>
              </div>
            </div>
            <table className="billingtable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>SR Transaction ID</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.Date}</td>
                    <td>{row.SR_Transaction_ID}</td>
                    <td>{row.Amount}</td>
                    <td>{row.Description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center mt-3 gap-2">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
