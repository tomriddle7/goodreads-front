import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const Label = styled.label``;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 12px;
  border: 0px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  background: #2a2a2d;
`;

const Submit = styled.input`
  width: 100%;
  padding: 12px;
  border: 0px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  background-color: #1c1c1e;
  color: #0b84fe;
`;

const SignupPresenter = ({
  username,
  password,
  handleChange,
  handleSubmit,
  loading,
  error
}) => (
  <Container>
    <Helmet>
      <title>Signup | Goodreads</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="username">Username</Label>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        required
      />
      <Label htmlFor="password">Username</Label>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required
      />
      <Submit type="submit" value="Submit"></Submit>
    </Form>
  </Container>
);

export default SignupPresenter;