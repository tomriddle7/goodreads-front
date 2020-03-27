import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import KakaoLogin from 'react-kakao-login';

const appKey = process.env.REACT_APP_KEY;

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

const StyledKakaoLogin = styled(KakaoLogin)`
  display: inline-block;
  padding: 0;
  width: 100%;
  height: 49px;
  line-height: 49px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 16px;
  font-size: 16px;
  text-align: center;
`;

const LoginPresenter = ({
  email,
  password,
  handleChange,
  handleSubmit,
  kakaoSuccess,
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
    <StyledKakaoLogin
      jsKey={appKey}
      onSuccess={kakaoSuccess}
      onFailure={result => console.log(result)}
      getProfile={true}
    />
  </Container>
);

export default LoginPresenter;