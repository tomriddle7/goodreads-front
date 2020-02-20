import React from 'react';
import styled from "styled-components";

const PopupOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const popupInner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const PropText = styled.h1`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

class Popup extends React.Component {
  render() {
    return (
      <PopupOuter>
        <popupInner>
          <PropText>{this.props.text}</PropText>
          {/*<button onClick={this.props.closePopup}>확인</button>*/}
        </popupInner>
      </PopupOuter>
    );
  }
}

export default Popup;