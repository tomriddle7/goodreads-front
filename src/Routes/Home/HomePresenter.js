import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  padding: 20px;
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
                movie.name
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    kdc: PropTypes.string.isRequired
  }).isRequired),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;