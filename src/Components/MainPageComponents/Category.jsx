import React from 'react'
import styled, {keyframes} from 'styled-components'
import { __loadCategories, __loadPosts, __loadSolved, __loadUnsolved } from '../../Redux/modules/posts';
import { useDispatch} from 'react-redux';
import flex from '../Common/flex';
import { useNavigate } from 'react-router-dom';

const Category = ({text, icon, done}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHanlder = () => {
        navigate('/')
        dispatch(__loadCategories({text}));
        if(text === "ALL")
            dispatch(__loadPosts());
        if(done){
            dispatch(__loadSolved());
        }
        if(done === false)
            dispatch(__loadUnsolved());
    }
        
    return (
    <>
     <StButton onClick={onClickHanlder}>
        <img src={icon} alt="" />
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
    ${flex({justify:'flex-start'})}
    width: 100%;
    height: 30px;
    margin: 2rem 0 0 0;
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
    &:focus{
        color: var(--Button-blue);
    }
    @media (max-width: 950px) {
        .icon{
            display: none;
        }
    }
`;

