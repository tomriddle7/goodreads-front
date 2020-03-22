import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Poster from "../../Components/Poster";
import Review from "../../Components/Review";
import Loader from "Components/Loader";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Label = styled.label``;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const Submit = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  color: #0b84fe;
`;

const SetinfoPresenter = ({ results, email, nickname, password1, password2, handleSubmit, handleChange, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | SSReads</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          Setinfo | SSReads
        </title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">이메일</Label>
      <Input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        required
      />
      <Label htmlFor="nickname">닉네임</Label>
      <Input
        type="nickname"
        name="nickname"
        placeholder="nickname"
        value={nickname}
        onChange={handleChange}
        required
      />
      <Label htmlFor="password1">Password1</Label>
      <Input
        type="password"
        name="password1"
        placeholder="password"
        value={password1}
        onChange={handleChange}
        required
      />
      <Label htmlFor="password2">Password2</Label>
      <Input
        type="password"
        name="password2"
        placeholder="password"
        value={password2}
        onChange={handleChange}
        required
      />
      <Submit type="submit" value="Submit"></Submit>
    </Form>
    </Container>
  );

  SetinfoPresenter.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired),
    handleSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default SetinfoPresenter;