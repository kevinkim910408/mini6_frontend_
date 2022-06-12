import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, {keyframes} from 'styled-components'

const Category = ({text, icon}) => {
  return (
    <>
     <StButton>
        <FontAwesomeIcon className='icon' icon={icon} />
        {text}
    </StButton>
    </>
  )
}

export default Category

const animation = keyframes`
    50%{
        transform: translateX(20px) scale(1.1); 
    }
`;

const StButton = styled.button`
    width: 100%;
    height: 30px;
    margin: 2rem 0 0 2.5rem;
    background-color: transparent;
    font-size: 1.5rem;
    text-align: start;
    border: none;
    cursor: pointer;
    & > .icon{
        margin-right: 1.5rem;
    }
    &:hover{
        animation: ${animation} 0.6s
    }
    @media (max-width: 950px) {
        .icon{
            display: none;
        }
    }
`;

