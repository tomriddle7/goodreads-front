import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  line-height: 20px;
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
  font-size: 14px;
  line-height: 14px;
`;

const Year = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const Poster = ({ isbn, name, bookImage, author, publisher, pub_year }) => (
  <Link to={`/book/${isbn}`}>
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
  </Link>
);

Poster.propTypes = {
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired
};

export default Poster;