import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: row;
`;

const Scope80 = styled("div")`
  width:80vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0px 10px;
`;

const Scope20 = styled("div")`
  width:20vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Image = styled("div")`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const Button = styled("a")`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
`;

const Name = styled("span")``;

const Genre = styled("span")`
  font-size:12pt;
  color: #808084;
`;

const Review = ({ id, created_at, user, book, star, description }) => (
  <Container>
    <Scope20>
      <Name>{user}</Name>
    </Scope20>
    <Scope80>
      <Name>{description}</Name>
    </Scope80>
  </Container>
    
);

Review.propTypes = {
    id: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    book: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Review;