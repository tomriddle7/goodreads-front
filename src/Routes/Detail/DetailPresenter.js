import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Review from "Components/Review";
import Popup from 'Components/Popup';
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
`;

const Cover = styled.img`
  width: 55%;
  height: 55%;
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

const Label = styled.label``;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  all: unset;
  width: 70%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const Submit = styled.input`
  width: 20%;
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
`;

const DetailPresenter = ({ result, star, review, showPopup, getSubscribe, onChangeStar, togglePopup, reviewSubmit, loading, error }) =>
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
            <Divider></Divider>
            <Item>
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={fasThumbsUp} />
              {result.like_count}
            </Item>
            <Divider></Divider>
            <Item>
              {result.avg_star ? result.avg_star : 0} / 5.0
            </Item>
          </ItemContainer>
          <DesContainer>
            {result.description.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
          </DesContainer>
          <button onClick={getSubscribe}>구독</button>
        </Data>
      </Content>
      { showPopup ? <Popup text='구독하려면 로그인하세요.' /> : null }
      <Form onSubmit={reviewSubmit}>
      <Label>
          별점
          <select value={star} onChange={onChangeStar}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </Label>
        <Label htmlFor="review">리뷰</Label>
        <Input
          type="text"
          name="review"
          placeholder="review"
          value={review}
          required
        />
        <Submit type="submit" value="Submit"></Submit>
      </Form>
      {result.review_count} 개 리뷰
      {result.review.map((element, index) => (
            <Review key={parseInt(index)} id={element.id} created_at={element.created_at} user={element.user} book={element.book} star={element.star} description={element.description} />
          ))}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pub_year: PropTypes.string.isRequired,
    review: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      book: PropTypes.string.isRequired,
      star: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired)
  }).isRequired),
  getSubscribe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;