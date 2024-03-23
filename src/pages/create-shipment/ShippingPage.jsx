import React, { useContext } from "react";
import { navbarOpenContext } from "../../App";

const data = [
  {
    Date: "23 Jan 2023",
    Transaction_ID: "4515213513521",
    AWB: "7778784555",
    Amount: "- 112560",
    Status: "Pending",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    Transaction_ID: "4515213513521",
    AWB: "7778784555",
    Amount: "- 112560",
    Status: "Pending",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    Transaction_ID: "4515213513521",
    AWB: "7778784555",
    Amount: "- 112560",
    Status: "Pending",
    Description: "Credit done for shipments. ",
  },
  {
    Date: "23 Jan 2023",
    Transaction_ID: "4515213513521",
    AWB: "7778784555",
    Amount: "- 112560",
    Status: "Pending",
    Description: "Credit done for shipments. ",
  },
];

const Shipping = () => {
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
                className="mx-5 w-25 border rounded"
                type="date"
                name=""
                id=""
              />
            </div>
            <table className="billingtable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction ID(PG)</th>
                  <th>AWB Number</th>
                  <th>(₹) Amount</th>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.Date}</td>
                    <td>{row.Transaction_ID}</td>
                    <td>{row.AWB}</td>
                    <td>{row.Status}</td>
                    <td>{row.AWB}</td>
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

export default Shipping;
