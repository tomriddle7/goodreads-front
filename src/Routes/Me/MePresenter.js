import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Popup from 'Components/Popup';

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

const MePresenter = ({ result, showPopup, getSubscribe, togglePopup, loading, error }) =>
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
          {result.title} | SSReads
        </title>
      </Helmet>
      <Content>
        <Cover
          src={result.bookImage}
        />
        <Data>
          <Title>
            {result.title}
          </Title>
          <ItemContainer>
            <Item>
              {result.author}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.pub_year}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.publisher}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.isbn}
            </Item>
          </ItemContainer>
          <DesContainer>
            {result.description}
          </DesContainer>
          <button onClick={getSubscribe}>구독</button>
        </Data>
      </Content>
      { showPopup ? <Popup text='구독하려면 로그인하세요.' /> : null }
    </Container>
  );

MePresenter.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    kdc: PropTypes.string.isRequired
  }).isRequired),
  getSubscribe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default MePresenter;