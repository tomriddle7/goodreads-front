import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import ErrorText from "Components/ErrorText";

const Container = styled.div`
  padding: 20px;
`;

const Label = styled.label``;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const Submit = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 16px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  color: #0b84fe;
`;

const SignupPresenter = ({
  email,
  password1,
  password2,
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
      <Label htmlFor="email">e-mail</Label>
      <Input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        required
      />
      {error && error.email && error.email.length > 0 && <ErrorText text={error.email[0]} />}
      <Label htmlFor="password1">Password1</Label>
      <Input
        type="password"
        name="password1"
        placeholder="password"
        value={password1}
        onChange={handleChange}
        required
      />
      {error && error.password1 && error.password1.length > 0 && <ErrorText text={error.password1[0]} />}
      <Label htmlFor="password2">Password2</Label>
      <Input
        type="password"
        name="password2"
        placeholder="password"
        value={password2}
        onChange={handleChange}
        required
      />
      {error && error.password2 && error.password2.length > 0 && <ErrorText text={error.password2[0]} />}
      <Submit type="submit" value="Submit"></Submit>
    </Form>
  </Container>
);

export default SignupPresenter;