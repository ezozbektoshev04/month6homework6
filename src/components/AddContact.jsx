import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddContact = (props) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
    // console.log({ ...contact, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };
  //   const editPersonInfo = (person) => {};

  const handleSubmit = (e) => {
    props.handleClose();
    e.preventDefault();
    props.addContact({
      firstName: contact.firstName,
      lastName: contact.lastName,
      phone: contact.phone,
    });
    setContact({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="pt-3 pb-3">
            <div className="filed pt-3 pb-3">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={contact.firstName}
                onChange={handleChange}
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
                value={contact.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="filed pt-3 pb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={contact.phone}
                onChange={handleChange}
                name="phone"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddContact;
