import React from "react";
import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa";

import "./style.css";

export default function Form({
  handlerSubmit,
  handlerInputChange,
  novaTarefa,
}) {
  return (
    <form action="#" className="form" onSubmit={handlerSubmit}>
      <input type="text" onChange={handlerInputChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
// Form.defaultProps = {
//   novaTarefa: "",
// };
Form.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
  handlerInputChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
