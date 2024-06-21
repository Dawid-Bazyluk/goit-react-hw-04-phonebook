import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formValue;
    addContact(name, number);
    setFormValue({ name: "", number: "" });
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
        value={formValue.name}
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
        value={formValue.number}
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
