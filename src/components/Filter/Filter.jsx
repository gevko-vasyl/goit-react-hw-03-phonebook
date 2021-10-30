import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

export default function Filter({ onFilterChange }) {
  return (
    <div className="Filter ">
      <h2 className="Filter__contacts-title">Contacts</h2>
      <h3 className="Filter__title">Find contacts by name</h3>
      <input className="Filter__input" type="text" onChange={onFilterChange} />
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
