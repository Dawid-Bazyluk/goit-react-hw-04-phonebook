import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        {contact.name}: {contact.number}
        <button
          className={styles.buttonItem}
          onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
