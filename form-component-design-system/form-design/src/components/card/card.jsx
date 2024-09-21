import React from "react";
import PropTypes from "prop-types";
import ".//card.css";

const Card = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
