import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
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
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.img`
  width: auto;
  height: 40%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 18px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DesContainer = styled.div`
  margin: 20px 0;
  font-size: 16px;
`;

const MePresenter = ({ results, loading, error }) =>
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
          My | SSReads
        </title>
      </Helmet>
      <Content>
        가입날짜: {results.created_at}
        닉네임: {results.nickname}
      </Content>
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
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default MePresenter;