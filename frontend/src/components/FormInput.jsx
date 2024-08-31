import React, { useState } from "react";
import UseInput from "../hooks/UseInput";
const FormInput = ({ onClose }) => {
  const {
    pic,
    date,
    due_date,
    work_giver,
    project,
    account,
    work_order,
    priority,
    status,
    notes,
    setPic,
    setDate,
    setDueDate,
    setWorkGiver,
    setProject,
    setAccount,
    setWorkOrder,
    setPriority,
    setStatus,
    setNotes,
    handleSubmitForm,
  } = UseInput();

  return (
    <section className="container">
      <i className="bx bx-x" onClick={onClose}></i>
      <header>Add Work Order</header>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="input-box">
          <label htmlFor="fullName">PIC</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Pic Name"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Work Giver</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Work giver name"
            value={work_giver}
            onChange={(e) => setWorkGiver(e.target.value)}
            required
          />
        </div>
        <div className="column">
          <div className="input-box">
            <label htmlFor="Date">Date</label>
            <input
              type="date"
              id="date"
              placeholder="Enter date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              id="birthDate"
              placeholder="Enter due date"
              value={due_date}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="project">Project</label>
          <input
            type="text"
            id="project"
            placeholder="Enter project name"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="account">Account</label>
          <input
            type="text"
            id="account"
            placeholder="Enter account name"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="workOrder">Work Order</label>
          <input
            type="text"
            id="workOrder"
            placeholder="Enter work order name"
            value={work_order}
            onChange={(e) => setWorkOrder(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="priority">Priority</label>
          <input
            type="text"
            id="priority"
            placeholder="Set priority level"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            placeholder="Set status level"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            id="notes"
            placeholder="Add a notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormInput;
