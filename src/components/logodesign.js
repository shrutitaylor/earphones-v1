import React from 'react';
import styled from 'styled-components';

const LogoDesign = () => {
  return (
    <StyledWrapper>
      <button href="/" className="button" data-text="Awesome">
        <span className="actual-text font-pressStart text-[20px] md:text-[35px] ">&nbsp;BOSE&nbsp;</span>
        <span aria-hidden="true" className="front-text font-pressStart text-[20px] md:text-[35px]">&nbsp;BOSE&nbsp;</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    border: none;
    background: transparent;
    --stroke-color:rgb(0, 0, 0);
    --ani-color: rgba(95, 3, 244, 0);
    --color-gar: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
    letter-spacing: 3px;
    font-family: "Arial";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--stroke-color);
    cursor: pointer;
  }

  .front-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    background: var(--color-gar);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 200%;
    overflow: hidden;
    transition: all 1s;
    animation: 8s ani infinite;
    
  }

  .button:hover .front-text {
    width: 100%;
    
    -webkit-text-stroke: 1px var(--ani-color);
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    50% {
      background-position: 400%;
    }

    100% {
      background-position: 0%;
    }
  }`;

export default LogoDesign;
