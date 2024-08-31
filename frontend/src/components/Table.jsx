import React, { useState, useEffect } from "react";
import axios from "axios";
import { format, isValid } from "date-fns";
import FormInput from "./FormInput";

const Table = (props) => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isFormInputModalOpen, setIsFormInputModalOpen] = useState(false);
  useEffect(() => {
    getTables();
  }, []);

  const getTables = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tableorder`);
      setTables(response.data);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  const handleDetailsModalOpen = (table, index) => {
    setSelectedTable(table);
    setSelectedIndex(index);
    setIsDetailsModalOpen(true);
  };

  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
    setSelectedTable(null);
    setSelectedIndex(null);
  };

  const handleFormInputModalOpen = () => {
    setIsFormInputModalOpen(true);
  };

  const handleFormInputModalClose = () => {
    setIsFormInputModalOpen(false);
  };

  const { type } = props;
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
              <button onClick={handleFormInputModalOpen}>
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
            {tables.map((table, index) => (
              <tr key={table.id}>
                <TableDescription
                  type={type}
                  table={table}
                  index={index}
                  handleModalOpen={() => handleDetailsModalOpen(table, index)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormInputModalOpen && (
        <div className="container-overlay">
          <FormInput onClose={handleFormInputModalClose} />
        </div>
      )}

      <div
        className="modal-overlay"
        style={{ display: isDetailsModalOpen ? "block" : "none" }}
      >
        <div className="modal-details">
          <div className="modal-header">
            <h3>Work Order Details</h3>
            <i className="bx bx-x" onClick={handleDetailsModalClose}></i>
          </div>
          {selectedTable && (
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
                    <td>{selectedIndex + 1}</td>
                    <td>2</td>{" "}
                    <td>
                      {isValid(new Date(selectedTable.date))
                        ? format(new Date(selectedTable.date), "yyyy-MM-dd")
                        : "Invalid date"}
                    </td>
                    <td>
                      {isValid(new Date(selectedTable.due_date))
                        ? format(new Date(selectedTable.due_date), "yyyy-MM-dd")
                        : "Invalid date"}
                    </td>
                    <td>{selectedTable.pic}</td>
                    <td>{selectedTable.work_giver}</td>
                    <td>{selectedTable.project}</td>
                    <td>{selectedTable.account}</td>
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
                    <td>{selectedTable.work_order}</td>
                    <td>{selectedTable.priority}</td>
                    <td>{selectedTable.status}</td>
                    <td>{selectedTable.notes}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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

const TableDescription = ({ type, table, index, handleModalOpen }) => {
  const handleSeeDetails = () => {
    handleModalOpen(table, index);
  };

  if (type === "workorder") {
    return (
      <>
        <td>{index + 1}</td>
        <td>2</td>
        <td>{format(new Date(table.date), "yyyy-MM-dd")}</td>
        <td>{format(new Date(table.due_date), "yyyy-MM-dd")}</td>
        <td>{table.pic}</td>
        <td>{table.work_giver}</td>
        <td>{table.project}</td>
        <td>{table.account}</td>
        <td>
          <div className="td-flex">
            <button className="td-btn" onClick={handleSeeDetails}>
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
        <td>{index + 1}</td>
        <td>{table.pic}</td>
        <td>2</td>
        <td>{format(new Date(table.date), "yyyy-MM-dd")}</td>
        <td>{table.opportunity}</td>
        <td>{table.account}</td>
        <td>{table.activity}</td>
        <td>
          <div className="td-flex">
            <button className="td-btn" onClick={handleSeeDetails}>
              See Details
            </button>
            <i className="bx bx-edit"></i>
            <i className="bx bx-trash"></i>
          </div>
        </td>
      </>
    );
  }
};

export default Table;
