import React from 'react';
import styled from 'styled-components';
interface InputProps {
  title: string;
}
const Input = (props:InputProps) => {
  return (
    <StyledWrapper>
      <div className="coolinput">
        <label htmlFor="input" className="text">{props.title}</label>
        <input type="text" placeholder="Write here..." name="input" className="input" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 600px;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: #818CF8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #ffffff;
    width: fit-content;
  }

  .coolinput input[type=text].input {
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818CF8 solid;
    border-radius: 5px;
    background: #ffffff;
  }

  .coolinput input[type=text].input:focus {
    outline: none;
  }`;

export default Input;
