import React, { Component } from "react";

import twitterlogo from "../twitter.svg";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
  };

  handleInputChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  //   função executada no submit
  handleSubmit = (e) => {
    e.preventDefault();

    const { username } = this.state;
    // se campo de usuario estiver vazio, retorna
    if (!username.length) return;

    // salva username no storage do navegador
    localStorage.setItem("@GoTwitter:username", username);

    this.props.history.push("/timeline");
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterlogo}></img>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
