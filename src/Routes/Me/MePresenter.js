import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Poster from "../../Components/Poster";
import Review from "../../Components/Review";
import Loader from "Components/Loader";
import ToggleSwitch from "Components/ToggleSwitch";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 20px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const MePresenter = ({ results, toggleValue, toggleState, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | SSReads</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <ToggleSwitch values={['info', 'mybook', 'review']} selected="info" handleChange={toggleState}/>
      <Helmet>
        <title>
          My | SSReads
        </title>
      </Helmet>
      {results && toggleValue ==='info' && (
        <Content>
        가입날짜: {results.created_at}
        아이디: {results.username}
        닉네임: {results.nickname}
        </Content>
      )}
      {results && results.mybook && results.mybook.length > 0 && toggleValue ==='mybook' && (
        <Content>
        나의 책
        {results.mybook.map(p => (
          <Poster
            key={p.book.id}
            isbn={p.book.isbn}
            name={p.book.title}
            bookImage={p.book.bookImage}
            author={p.book.author}
            publisher={p.book.publisher}
            pub_year={p.book.pub_year}
          />
        ))}
      </Content>
      )}
      {results && results.review && results.review.length > 0 && toggleValue ==='review' && (
        <Content>
        나의 리뷰
        {results.review.map((element, index) => (
            <Review key={parseInt(index)} id={element.id} created_at={element.created_at} user={element.user} book={element.book} star={element.star} description={element.description} />
          ))}
      </Content>
      )}
    </Container>
  );

  MePresenter.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    mybook: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      book: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        auther: PropTypes.string.isRequired,
        bookImage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isbn: PropTypes.string.isRequired,
        like_count: PropTypes.string.isRequired,
        num_views: PropTypes.string.isRequired,
        pub_year: PropTypes.string.isRequired,
        review_count: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired),
    }).isRequired),
    review: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      star: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      book: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired)
  }).isRequired),
    toggleValue: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default MePresenter;