import React, { useState } from "react";

const Table = (props) => {
  const { type } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="table-container">
        <div className="table-heading">
          <div className="table-entries">
            <p>Show</p>
            <div className="select-wrapper">
              <select name="entries" id="entries">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
            <p>entries</p>
            <div className="search_box">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="table-add">
            {type === "workorder" && (
              <button>
                <i className="bx bx-plus"></i> Add Order
              </button>
            )}
            {type === "worklog" && (
              <button>
                <i className="bx bx-plus"></i> Add Log
              </button>
            )}
          </div>
        </div>

        <table className="table-notdetail">
          <thead>
            <TableHead type={type} />
          </thead>
          <tbody>
            <tr>
              <TableDescription type={type} setIsModalOpen={setIsModalOpen} />
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="modal-overlay"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-details">
          <div className="modal-header">
            <h3>Work Order Details</h3>
            <i className="bx bx-x" onClick={handleModalClose}></i>
          </div>
          <div className="table-details">
            <table>
              <thead>
                <tr>
                  <th scope="col" width="100px">
                    No
                  </th>
                  <th scope="col" width="100px">
                    Week
                  </th>
                  <th scope="col" width="100px">
                    Date
                  </th>
                  <th scope="col" width="100px">
                    Due Date
                  </th>
                  <th scope="col" width="100px">
                    PIC
                  </th>
                  <th scope="col" width="100px">
                    Work Giver
                  </th>
                  <th scope="col" width="100px">
                    Project
                  </th>
                  <th scope="col" width="100px">
                    Account
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>7</td>
                  <td>2024-07-01</td>
                  <td>2024-07-01</td>
                  <td>Dimm</td>
                  <td>Bondi</td>
                  <td>Dashboard</td>
                  <td>Teknomadya</td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Work Order</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dimm</td>
                  <td>High</td>
                  <td>Done</td>
                  <td>Dimm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const TableHead = ({ type }) => {
  if (type === "workorder") {
    return (
      <tr>
        <th scope="col" width="100px">
          No
        </th>
        <th scope="col" width="100px">
          Week
        </th>
        <th scope="col" width="100px">
          Date
        </th>
        <th scope="col" width="100px">
          Due Date
        </th>
        <th scope="col" width="100px">
          PIC
        </th>
        <th scope="col" width="100px">
          Work Giver
        </th>
        <th scope="col" width="100px">
          Project
        </th>
        <th scope="col" width="100px">
          Account
        </th>
        <th scope="col" width="200px">
          Action
        </th>
      </tr>
    );
  } else {
    return (
      <tr>
        <th scope="col" width="100px">
          No
        </th>
        <th scope="col" width="100px">
          PIC
        </th>
        <th scope="col" width="100px">
          Week
        </th>
        <th scope="col" width="100px">
          Date
        </th>
        <th scope="col" width="100px">
          Opportunity
        </th>
        <th scope="col" width="100px">
          Account
        </th>
        <th scope="col" width="100px">
          Activity
        </th>
        <th scope="col" width="200px">
          Action
        </th>
      </tr>
    );
  }
};

const TableDescription = ({ type, setIsModalOpen }) => {
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  if (type === "workorder") {
    return (
      <>
        <td>1</td>
        <td>Dimm Riff</td>
        <td>2024-07-01</td>
        <td>2024-07-01</td>
        <td>Meeting</td>
        <td>Internal</td>
        <td>Dimm</td>
        <td>Example</td>
        <td>
          <div className="td-flex">
            <button className="td-btn" onClick={handleModalOpen}>
              See Details
            </button>
            <i className="bx bx-edit"></i>
            <i className="bx bx-trash"></i>
          </div>
        </td>
      </>
    );
  } else {
    return (
      <>
        <td>1</td>
        <td>Ghani</td>
        <td>2</td>
        <td>2024-07-01</td>
        <td>Meeting</td>
        <td>Ghani</td>
        <td>Example</td>
        <td>
          <div className="td-flex">
            <i className="bx bx-edit"></i>
            <i className="bx bx-trash"></i>
          </div>
        </td>
      </>
    );
  }
};

export default Table;
