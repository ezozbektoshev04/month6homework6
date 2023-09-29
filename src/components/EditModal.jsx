import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = (props) => {
  const [updated, setUpdated] = useState({
    firstName: props.per.firstName,
    lastName: "",
    phone: "",
  });
  const handleUpdateChnages = (e) => {
    e.preventDefault();
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };
  //   handleUpdate

  return (
    <div>
      {props.children}
      <Modal show={props.show} onHide={props.handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="pt-3 pb-3">
            <div className="filed pt-3 pb-3">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={updated.firstName}
                onChange={handleUpdateChnages}
                name="firstName"
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={updated.lastName}
                onChange={handleUpdateChnages}
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={updated.phone}
                onChange={handleUpdateChnages}
                name="phone"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleUpdateClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleUpdateClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
