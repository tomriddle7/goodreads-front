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

const HomePresenter = ({ nowPlaying, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section>
            {nowPlaying.map(movie => (
              <Poster
                key={movie.isbn}
                isbn={movie.isbn}
                name={movie.name}
                author={movie.author}
                publisher={movie.publisher}
                pub_year={movie.pub_year}
                volume={movie.volume}
                volume={movie.kdc}
              />
            ))}
          </Section>
        )}
        {/*{error && <Message color="#e74c3c" text={error} />}*/}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    kdc: PropTypes.string.isRequired
  }).isRequired),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;