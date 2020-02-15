import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

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

const Social = styled.a``;

const KaKaoImg = styled.img`
  display: inline;
  width: auto;
  height: 100%;
  margin: 0px 5px;
`;

const LoginPresenter = ({
  email,
  password,
  handleChange,
  handleSubmit,
  loading,
  error
}) => (
  <Container>
    <Helmet>
      <title>Login | SSReads</title>
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
      <Label htmlFor="password">Password</Label>
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
    <Social href="accounts/login/kakao/"><KaKaoImg src={require("../../Assets/kakaoLoginBtn.png")}/></Social>
    
  </Container>
);

export default LoginPresenter;