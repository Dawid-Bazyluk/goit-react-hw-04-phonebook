import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(name, number);
    setName("");
    setNumber("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="number">Phone number</label>
      <input
        id="number"
        type="number"
        name="number"
        required
        title="Phone number must be digits and can contain spaces, dashes,
        parentheses and can start with +"
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
};
export default ContactForm;

