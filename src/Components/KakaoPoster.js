import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { booksApi } from "api";
import Popup from "reactjs-popup";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const KakaoPoster = ({ isbn, name, bookImage, author, publisher, pub_year }) => (
  <div onClick={() => { alert("서적이 등록되었습니다."); booksApi.addBook(isbn); }}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={bookImage}
        />
      </ImageContainer>
      <Title>
        {name.length > 18 ? `${name.substring(0, 18)}...` : name}
      </Title>
      <Year>{author}, {pub_year}</Year>
      <Rating>
        <span role="img" aria-label="rating">
          ⭐️
        </span>{" "}
        {10}/10
      </Rating>
    </Container>
  </div>
);

KakaoPoster.propTypes = {
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired
};

export default KakaoPoster;