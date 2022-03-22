import React, { Component } from "react";
import "./Main.css";

import Form from "./Form";
import Tarefas from "./Tarefas";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    listaDeTarefas: [],
    index: -1,
  };

  componentDidMount() {
    const listaDeTarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!listaDeTarefas) return;

    this.setState({ listaDeTarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { listaDeTarefas } = this.state;

    if (listaDeTarefas === prevState.listaDeTarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(listaDeTarefas));
  }

  handlerSubmit = (e) => {
    e.preventDefault();

    const { listaDeTarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (listaDeTarefas.indexOf(novaTarefa) > -1 || !novaTarefa) return;

    const novaListaDeTarefas = [...listaDeTarefas];

    if (index === -1) {
      this.setState({
        listaDeTarefas: [...novaListaDeTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novaListaDeTarefas[index] = novaTarefa;
      this.setState({
        listaDeTarefas: [...novaListaDeTarefas],
        novaTarefa: "",
      });
    }
  };

  handlerInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handlerEdit = (e, index) => {
    const { listaDeTarefas } = this.state;

    this.setState({
      index,
      novaTarefa: listaDeTarefas[index],
    });
    console.log(e, index);
  };

  handlerDelete = (e, index) => {
    const { listaDeTarefas } = this.state;
    const novaListaDeTarefas = [...listaDeTarefas];
    novaListaDeTarefas.splice(index, 1);
    this.setState({
      listaDeTarefas: [...novaListaDeTarefas],
    });
  };

  render() {
    const { novaTarefa, listaDeTarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handlerSubmit={this.handlerSubmit}
          handlerInputChange={this.handlerInputChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          listaDeTarefas={listaDeTarefas}
          handlerEdit={this.handlerEdit}
          handlerDelete={this.handlerDelete}
        />
      </div>
    );
  }
}
