import React, { useState } from "react";
// import Edit from "./EditModal";
import EditModal from "./EditModal";
import Edit from "./Edit";

const ContactList = (props) => {
  const [show, setShow] = useState(false);
  //   const [update, setUpdate] = useState(JSON.parse(localStorage.getItem("per")));

  const handleUpdateShow = (id) => {
    setShow(true);
    // const aa = props.person.find((el) => el.id === id);
    // localStorage.setItem("per", JSON.stringify(aa));
    // setUpdate(JSON.parse(localStorage.getItem("per")));
    // console.log(update);
  };

  const handleUpdateClose = () => {
    setShow(false);
  };

  const filteredData = props.person.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return (
        el.firstName.toLowerCase().includes(props.input) ||
        el.lastName.toLowerCase().includes(props.input)
      );
    }
  });
  const { deletePerson } = props;
  //   console.log(props.filteredData.firstName);
  //   console.log(props.person);
  return (
    <div>
      <table className="table table table-striped table-hover mt-3 w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.person.length > 0
            ? filteredData.map((person, index) => {
                return (
                  <tr key={person.id}>
                    <td>{index + 1}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.phone}</td>
                    <td className="d-flex gap-3">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deletePerson(person.id)}
                      >
                        Delete
                      </button>
                      <EditModal
                        show={show}
                        handleUpdateClose={handleUpdateClose}
                        // editText={editText}
                        per={props.person}
                        // filteredData={filteredData}
                      >
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => handleUpdateShow(person.id)}
                        >
                          Edit
                        </button>
                      </EditModal>
                      <Edit />
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
