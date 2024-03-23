import React from "react";

const data = [
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
  {
    Invoice_no: "451547561548",
    Invoice_Date: "23 Jan 2023",
    Gst_Number: "44746541474",
    Service_Type: "Domestic",
    Paid_Amount: "-₹4581",
    Due_Date: "23 Jan 2023",
  },
];

const Invoice = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "IBM Plex Sans Condensed",
          background: "rgba(217, 217, 217, 0.32)",
          height: "100vh",
        }}
        className="table-container py-4 text-center"
      >
        <p
          style={{ fontWeight: "bold", margin: "0px", fontSize: "25px" }}
          class="d-flex float-right mx-2"
        >
          Invoice
        </p>

        <div
          style={{ background: "white" }}
          className="border p-5 rounded mt-2"
        >
          <div className="d-flex gap-4">
            <div>
              <input
                className="overviewInput border rounded"
                type="text"
                placeholder="Invoice Search here..."
              />
              <span className="inputiconoverview mt-1 opacity-50">
                <i class="bi bi-search"></i>
              </span>
            </div>{" "}
            <input type="date" className="p-2 border rounded w-50" />
          </div>

          <table className="billingtable">
            <thead>
              <tr>
                <th>Invoice no.</th>
                <th>Invoice Date</th>
                <th>Gst Number</th>
                <th>Service Type</th>
                <th>Paid Amount</th>
                <th>Due Date </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.Invoice_no}</td>
                  <td>{row.Invoice_Date}</td>
                  <td>{row.Gst_Number}</td>
                  <td>{row.Service_Type}</td>
                  <td>{row.Paid_Amount}</td>
                  <td>{row.Due_Date}</td>
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
    </>
  );
};

export default Invoice;
