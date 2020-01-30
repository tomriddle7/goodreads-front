import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
    }
    
    .loader {
        margin: 5% auto 30px;
      }
      
      .book {
        border: 4px solid #FFFFFF;
        width: 60px;
        height: 45px;
        position: relative;
        perspective: 150px;
      }
      
      .page {
        display: block;
        width: 30px;
        height: 45px;
        border: 4px solid #FFFFFF;
        border-left: 1px solid rgba(255, 255, 255, 0.33);
        margin: 0;
        position: absolute;
        right: -4px;
        top: -4px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.33);
        transform-style: preserve-3d;
        -webkit-transform-origin: left center;
        transform-origin: left center;
      }
      
      .book .page:nth-child(1) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
      }
      
      .book .page:nth-child(2) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
      }
      
      .book .page:nth-child(3) {
        -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
        animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
      }
      
      @-webkit-keyframes pageTurn {
        0% {
          -webkit-transform: rotateY( 0deg);
          transform: rotateY( 0deg);
        }
        20% {
          background: rgba(255, 255, 255, 0.66);
        }
        40% {
          background: rgba(255, 255, 255, 0);
          -webkit-transform: rotateY( -180deg);
          transform: rotateY( -180deg);
        }
        100% {
          background: rgba(255, 255, 255, 0);
          -webkit-transform: rotateY( -180deg);
          transform: rotateY( -180deg);
        }
      }
      
      @keyframes pageTurn {
        0% {
          transform: rotateY( 0deg);
        }
        20% {
          background: rgba(255, 255, 255, 0.66);
        }
        40% {
          background: rgba(255, 255, 255, 0);
          transform: rotateY( -180deg);
        }
        100% {
          background: rgba(255, 255, 255, 0);
          transform: rotateY( -180deg);
        }
      }
      
      
`;

export default globalStyles;