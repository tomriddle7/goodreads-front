import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Form = styled.form`
  border-radius: 16px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #2a2a2d;
  padding: 10px;
`;

const SearchDiv = styled.div`
  width: 34px;
  display: flex;
  flex-direction: row;
`;

const SearchLens = styled.span`
  color: #808084;
  fill: currentColor;
  line-height: 24px;
  position: relative;
  height: 34px;
  width: 34px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  color: #808084;
`;

const ShelfPresenter = ({ results, error, loading }) => (
  <Container>
    <Helmet>
      <title>Search | NomadStore</title>
    </Helmet>
    {results && results.length > 0 && (
          <Section>
            {results.map(movie => (
              <Poster
                key={movie.book.isbn}
                isbn={movie.book.isbn}
                name={movie.book.title}
                bookImage={movie.book.bookImage}
                author={movie.book.author}
                publisher={movie.book.publisher}
                pub_year={movie.book.pub_year}
              />
            ))}
          </Section>
        )}
  </Container>
);

ShelfPresenter.propTypes = {
  results: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default ShelfPresenter;