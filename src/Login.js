import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "./api";
import { login } from "./auth";
import { Form, Container,Body } from "./style";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Body>
        <Container>
          <Form onSubmit={this.handleSignIn}>
            <img
              src="https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png"
              alt="new"
            />
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Entrar</button>
            <hr />

          </Form>
        </Container>

      </Body>



    );
  }
}

export default withRouter(SignIn);