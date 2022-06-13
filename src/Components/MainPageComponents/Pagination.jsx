import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'
import flex from '../Common/flex'

const Pagination = ({total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  const onPrevPageHandler = () =>{
    setPage(page - 1)
  }
  const onNextPageHandler = () =>{
    setPage(page + 1)
  }
  const onFirstPageHandler = () =>{
    const temp = 1;
    setPage(temp)
  }
  const onLastPageHandler = () =>{
    const temp = numPages;
    setPage(temp)
  }

  return (
    <StPagination>
      <StButton onClick={onFirstPageHandler} disabled={page === 1}> 
        <FontAwesomeIcon className='icon' icon={faAnglesUp} />
      </StButton>
      <StButton onClick={onPrevPageHandler} disabled={page === 1}> 
        <FontAwesomeIcon className='icon' icon={faAngleUp} />
      </StButton>
      <p style={{margin:'2rem', fontWeight:'700'}}> 
        {page}/{numPages}
      </p>
      <StButton onClick={onNextPageHandler} disabled={page === numPages}>
        <FontAwesomeIcon className='icon' icon={faAngleDown} />
      </StButton>
      <StButton onClick={onLastPageHandler} disabled={page === numPages}>
        <FontAwesomeIcon className='icon' icon={faAnglesDown} />
      </StButton>
    </StPagination>
  )
}

export default Pagination

const StPagination = styled.div`
  ${flex({direction:'column'})}
  width: 3%;
  height: 100%;
  border-left: 1px solid #d0dcfd;
  @media (max-width: 800px) {
        width: 10%;
    }
`;

const StButton = styled.button`
  width: 100%;
  height: 50px;
  margin: 5px;
  background-color: var(--blue);
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  border: none;
  &:hover{
    color: #fff;
    background-color: var(--Button-blue);
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;
