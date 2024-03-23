import React, { useContext } from "react";
import supportLog from "../../images/supportLogo.png";
import "../stylingSheet/Supports.css";
import { navbarOpenContext } from "../../App";

const Support = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

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

  return (
    <div>
      <div
        className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
      >
        <div className="d-flex justify-content-between">
          <p className="fw-bold mt-3">Supports</p>

          <button
            style={{
              width: "150px",
              background: "rgba(193, 57, 43, 1)",
              color: "white",
            }}
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            + Raise Ticket
          </button>

          <div
            class="modal fade bd-example-modal-lg mt-5"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div className="container">
                  <div className="d-flex justify-content-between">
                    <p className="Need_help mt-3 mx-4">Need help</p>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span
                        style={{ fontSize: "40px", marginRight: "20px" }}
                        aria-hidden="true"
                      >
                        &times;
                      </span>
                    </button>
                  </div>
                  <div className="d-flex">
                    <img
                      style={{ height: "43px", marginLeft: "25px" }}
                      src={supportLog}
                      alt=""
                      srcset=""
                    />
                    <div class="card help_card mx-2 mt-1">
                      <div class="card-body">
                        <p
                          style={{ fontSize: "14px", fontWeight: "500" }}
                          class="card-title m-0"
                        >
                          Please Describe the issue
                        </p>
                        <p
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          class="card-subtitle text-muted"
                        >
                          DOMESTIC SHIPMENT ISSUE
                        </p>
                        <div className="d-flex gap-4 mt-2">
                          <p className="cancel_delivery">
                            Cancel delivery / Pickup
                          </p>
                          <p className="delay_delivery">
                            Delay in delivery / Consignee pickup / return
                          </p>
                        </div>
                        <div className="d-flex gap-4">
                          <p className="behavioral">
                            Behavioral complaint against staff
                          </p>
                          <p className="firstmile">
                            Firstmile / Seller Pickup related issues
                          </p>
                        </div>
                        <div className="d-flex gap-4">
                          <p className="shipment_delivered">
                            Shipment not delivered (need POD) / Fake remark
                          </p>
                          <p className="need_reattempt">
                            Need Reattempt / Reschedule / NDR
                          </p>
                        </div>
                        <div className="d-flex gap-4">
                          <p className="self_collect">Self Collect / Drop</p>
                          <p className="update_shipment">
                            Update shipment details
                          </p>
                        </div>
                        <div>
                          <p
                            style={{ fontSize: "13px" }}
                            className="opacity-75 m-2"
                          >
                            OTHER ISSUES
                          </p>
                          <div className="d-flex gap-3">
                            <p className="tech_support">Tech Support</p>
                            <p className="account">Account</p>
                          </div>
                        </div>
                        <div className="mx-2 opacity-75">
                          <p>March 06, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-1 delay_in_delivery">
                    <div class="card mx-2 help_cards">
                      <div class="card-body">
                        <p className="consignee_pickup">
                          Delay in delivery / Consignee pickup / return
                        </p>
                        <p className="marcha_09">March 09, 2024</p>
                      </div>
                    </div>
                    <img
                      style={{ height: "43px" }}
                      src={supportLog}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>

                <div>
                  <div className="d-flex mt-3">
                    <img
                      style={{ height: "43px", marginLeft: "25px" }}
                      src={supportLog}
                      alt=""
                      srcset=""
                    />
                    <div class="card help_card_more mx-2 mt-1 mb-5">
                      <div class="card-body">
                        <p
                          style={{ fontSize: "13px", fontWeight: "500" }}
                          class="card-subtitle mb-2 text-muted"
                        >
                          SELECT A SUB CATEGORY
                        </p>
                        <div className="d-flex gap-4">
                          <p className="cancel_delivery">
                            Cancel delivery / Pickup
                          </p>
                          <p className="delay_delivery">
                            Delay in delivery / Consignee pickup / return
                          </p>
                        </div>
                        <p className="marcha_09">March 06, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer mb-2">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Reset Categories
                  </button>
                  <button
                    style={{
                      background: "rgba(193, 57, 43, 1)",
                      color: "white",
                    }}
                    type="button"
                    class="btn border rounded"
                  >
                    Add more emails in cc
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            Thank you for creating a new ticket. It will appear here shortly.
            Your patience is appreciated.
            <div className="d-flex gap-5 mt-3 fw-bold text-dark">
              <p className="open_supports">Open</p>
              <p className="resolve_supports">Resolved</p>
              <p className="closed_supports">Closed</p>
            </div>
            <div className="gap-3 d-flex">
              <input
                type="text"
                placeholder="Search by Request ID"
                className="border rounded w-25 p-2"
              />
              <input
                type="text"
                placeholder="Search by AWB"
                className="border rounded w-25 p-2"
              />
            </div>
            <div>
              <table className="billingtable">
                <thead>
                  <tr>
                    <th>Request ID & AWB </th>
                    <th>Raised By</th>
                    <th>Category - Sub category</th>
                    <th>Ticket Created</th>
                    <th>Last Update</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <tr key={row.id}>
                      <td>447548658474</td>
                      <td>techninza@gmail.com</td>
                      <td>Need Reattempt/Reschedule/NDR</td>
                      <td>Mar, 04, 2024</td>
                      <td>Mar, 04, 2024</td>
                      <td>Open</td>
                      <td class="bi bi-chat-dots text-primary fw-bold">
                        {" "}
                        Chat
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center mt-3 gap-2">
                    <li class="page-item disabled">
                      <a class="page-link text-danger" href="#" tabindex="-1">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link text-danger" href="#">
                        1
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link text-danger" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
