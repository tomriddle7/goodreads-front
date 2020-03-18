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
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 25px;
`;

const BookPresenter = ({ next, bookList, loading, error }) => (
  <>
    <Helmet>
      <title>Books | SSReads</title>
    </Helmet>
    {loading ? (
      <>
        <Helmet>
          <title>Loading | SSReads</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>Books | SSReads</title>
        </Helmet>
        {bookList && bookList.length > 0 && (
          <Section>
            {bookList.map(movie => (
              <Poster
                key={movie.isbn}
                isbn={movie.isbn}
                name={movie.title}
                bookImage={movie.bookImage}
                author={movie.author}
                publisher={movie.publisher}
                pub_year={movie.pub_year}
              />
            ))}
          </Section>
        )}
        {/*{error && <Message color="#e74c3c" text={error} />}*/}
      </Container>
    )}
  </>
);

BookPresenter.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    kdc: PropTypes.string.isRequired
  }).isRequired),
  addBookList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default BookPresenter;