import React, { useContext } from "react";
import { navbarOpenContext } from "../../App";

const RemittanceTable = () => {
  const { isNavbarOpen } = useContext(navbarOpenContext);

  return (
    <div
      style={{
        fontFamily: "IBM Plex Sans Condensed",
        background: "rgba(217, 217, 217, 0.32)",
        height: "100vh",
      }}
    >
      <div
        className="container py-4"
        style={{ transform: isNavbarOpen ? "translateX(105px)" : "none" }}
      >
        <p style={{ fontSize: "25px" }} className="fw-bold">
          Remittances
        </p>

        <div class="d-flex gap-4 ">
          <div class="col-md-4">
            <div class="form">
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search By Remittance Number"
              />
              <span class="left-pan"></span>
            </div>
          </div>

          <div class="dropdown">
            <select
              style={{ height: "37px", width: "180px" }}
              className="border rounded"
            >
              <option value="">Sort By</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <table className="table remittancetable">
          <thead className="table">
            <tr>
              <th scope="col">Remittance Number</th>
              <th scope="col">Date</th>
              <th scope="col">Bank Transaction ID</th>
              <th scope="col">Status</th>
              <th scope="col">Remittance Amount</th>
            </tr>
          </thead>
        </table>

        <table className="table  halltabledesign">
          <tbody>
            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>

            <tr>
              <button
                style={{
                  color: "#08179B",
                  textDecoration: "underline",
                  border: "none",
                }}
              >
                R122644521562132138
              </button>
              <td>Dec 22, 2023</td>
              <td>SBIN00014568</td>
              <td>Completed</td>
              <td>₹ 112560</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemittanceTable;

// import React from "react";
// import "../../style_components/remittance.css"

// const RemittanceTable = () => {
//   return (
//     <div>
//       <h3>Remittances</h3>

//       <div class="container">
//         <div class="search-bar">
//           <input type="text" placeholder="Search by Remittance Number" />
//           <select>
//             <option value="">Sort By</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Remittance Number</th>
//             <th>Date</th>
//             <th>Bank Transaction ID</th>
//             <th>State</th>
//             <th>Remittance Amount</th>
//           </tr>
//         </thead>
//         <p></p>
//         <tbody>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//           <tr>
//             <td>R123456789123456</td>
//             <td>Dec 22, 2023</td>
//             <td>SBIN00014568</td>
//             <td>Completed</td>
//             <td>112560</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RemittanceTable;
