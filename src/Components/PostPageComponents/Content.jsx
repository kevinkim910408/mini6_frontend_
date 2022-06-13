import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { __addPost } from '../../Redux/modules/posts';
import { useDispatch} from "react-redux";
import styled from 'styled-components'
import flex from '../Common/flex'


const Content = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const [selectedValue, setSelectedValue] =useState("java");

  useEffect(()=>{
    titleInputRef.current.focus();
  },[])

  const onCategoryHandler = (event) =>{
    setSelectedValue(event.target.value)
  }

  const onPostHandler = () => {
    dispatch(__addPost({
      category: selectedValue.toUpperCase(),
      title:titleInputRef.current.value, 
      content:contentInputRef.current.value, 
      done: false,
    }))
    navigate('/')
  }

  const onCancelHandler = () => {
    navigate(-1)
  }
  return (
    <StContent>
      <StHeader>
        <StProfileImg src='https://www.w3schools.com/howto/img_avatar.png' alt='ProfileImg'/>
        <p>유저ID</p>
        <StSelect value={selectedValue} onChange={onCategoryHandler}>
          <option value="java">JAVA</option>
          <option value="javascript">JAVASCRIPT</option>
          <option value="react">REACT</option>
          <option value="nodejs">NODEJS</option>
          <option value="github">GITHUB</option>
          <option value="others">OTHERS</option>
        </StSelect>
      </StHeader>
      <StTitle>
        <StInput maxLength={14} ref={titleInputRef}/>
      </StTitle>
      <div style={{width:'80%', height:'2px', border:'1px solid #000', opacity:'0.1', marginTop:'1rem'}}/>
      <StBody>
        <StTextarea ref={contentInputRef}/>
      </StBody>
      <StFooter>
        <StButton onClick={onPostHandler}>
          업로드
          <FontAwesomeIcon className='icon' icon={faCheck} />
        </StButton>
        <StButton onClick={onCancelHandler}>
          취소
          <FontAwesomeIcon className='icon' icon={faArrowRotateLeft} />
        </StButton>
      </StFooter>
    </StContent>
  )
}

export default Content;

const StContent = styled.div`
    ${flex({direction:'column', justify:'flex-start'})}
    width: 90%;
    height: 90%;
    -webkit-box-shadow: 5px 5px 24px -11px var(--black); 
    box-shadow: 5px 5px 24px -11px var(--black);
`;

const StHeader = styled.div`
    ${flex({justify:'flex-start'})}
    width: 90%;
    height:10%;
    margin-top: 1rem;
    & > .icon{
      margin-left: 2rem;
    }
`;

const StProfileImg = styled.img`
    width: 5%;
    margin: 0 2rem 0 3rem;
    border-radius: 100%;
`;

const StTitle= styled.div`
    ${flex({direction:'column'})}
    width: 90%;
    height:10%;
`;

const StBody= styled.div`
    ${flex({justify:'flex-start', align:'flex-start'})}
    width: 90%;
    height:50%;
    margin: 2rem;
`;

const StSelect = styled.select`
  width: 120px;
  margin-left: 3rem;
  text-align: center;
  outline: none;
`;

const StInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 1.5rem;
  text-align: center;
  outline: none;
  border-radius: 10px;
`;


const StTextarea = styled.textarea`
  width: 100%;
  height: 400px;
  margin: 0.4rem 0 0 0.4rem;
  padding: 20px;
  font-size: 1.5rem;
  outline: none;
  border-radius: 10px;
`;

const StFooter = styled.div`
  ${flex({direction:'row'})}
  width: 100%;
`;

const StButton = styled.button`
    width: 150px;
    padding: 10px;
    margin: 3rem;
    background-color: var(--blue);
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 50px;
    border: none;
    &:hover{
      background-color: var(--Button-blue);
    }
`;