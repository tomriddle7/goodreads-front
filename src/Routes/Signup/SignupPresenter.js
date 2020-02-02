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

const Input = styled.input``;

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
      <input type="submit" value="Submit"></input>
    </Form>
  </Container>
);

export default SignupPresenter;