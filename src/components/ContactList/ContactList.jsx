import React from "react";
import PropTypes from "prop-types";
import ContactItem from "components/ContactItem/ContactItem";
import "./ContactList.scss";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className="ContactList">
        {contacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
