import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      
      <a href="https://www.bose.com.au/en_au/products/headphones/noise_cancelling_headphones/bose-quietcomfort-headphones.html#v=QC-HEADPHONEARN-CHLILAC-WW">
      <div className="button">
        <div className="box">S</div>
        <div className="box">H</div>
        <div className="box">O</div>
        <div className="box">P</div>
        </div>
        </a>
     
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    display: flex;
    border-radius:20px;
    padding:1px;
  }

  .box {
    width: 32px;
    padding-top:10px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: rgb(0, 0, 0);
    overflow: hidden;
  }

  .box:before {
    content: "S";
    position: absolute;
    top: 0;
    background:rgb(229, 255, 0);
 padding-top:10px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
  }

  .box:nth-child(1)::before {
    
    content: 'S';
    color: #000000;
     padding-top:10px;
  }
  .box:nth-child(2)::before {
    transform: translateY(-100%);
    content: 'H';
    color: #000000;
     padding-top:10px;
  }

  .box:nth-child(3)::before {
    content: 'O';
    color: #000000;
     padding-top:10px;
  }

  .box:nth-child(4)::before {
    transform: translateY(-100%);
    content: 'P';
    color: #000000;
     padding-top:10px;
  }


  .button:hover .box:before {
    transform: translateY(0);
  }`;

export default Button;
