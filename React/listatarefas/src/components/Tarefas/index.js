import React from "react";
import PropTypes from "prop-types";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./style.css";

export default function Tarefas({
  listaDeTarefas,
  handlerEdit,
  handlerDelete,
}) {
  return (
    <ul className="tarefas">
      {listaDeTarefas.map((tarefa, index) => (
        <li key={tarefa} className="tarefa">
          {tarefa}
          <span className="buttons">
            <button
              className="edit"
              type="button"
              onClick={(e) => handlerEdit(e, index)}
            >
              <FaEdit />
            </button>
            <button
              className="delete"
              type="button"
              onClick={(e) => handlerDelete(e, index)}
            >
              <FaWindowClose />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
// Tarefas.defaultProps = {
//   listaDeTarefas: [],
// };
Tarefas.propTypes = {
  listaDeTarefas: PropTypes.array.isRequired,
  handlerEdit: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};
