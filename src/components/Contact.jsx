import React, { useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import Edit from "./Edit";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [person, setPerson] = useState({
    person: JSON.parse(localStorage.getItem("contact")) || [],
  });
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const addContact = (contactPerson) => {
    let newContact = [
      ...person.person,
      {
        id: Math.floor(Math.random() * 100000),
        ...contactPerson,
      },
    ];
    // console.log(newContact);
    localStorage.setItem("contact", JSON.stringify(newContact));
    setPerson({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };
  const deletePerson = (id) => {
    let newContact = person.person.filter((el) => el.id !== id);
    localStorage.setItem("contact", JSON.stringify(newContact));
    setPerson({
      person: JSON.parse(localStorage.getItem("contact")),
    });
  };
  const searchText = (e) => {
    let searchText = e.target.value.toLowerCase();
    setInputText(searchText);
  };
  //   localStorage.clear();
  return (
    <div>
      <div className="d-flex gap-5 pt-3 pb-3 w-100">
        <form className="w-75" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            id="search"
            className="form-control"
            // value={search}
            onChange={searchText}
          />
        </form>
        <button className="btn btn-primary" onClick={handleShow}>
          Add Contact
        </button>
      </div>
      <AddContact
        show={show}
        handleClose={handleClose}
        addContact={addContact}
      />
      <ContactList
        person={person.person}
        deletePerson={deletePerson}
        input={inputText}
      />
    </div>
  );
};

export default Contact;
