import React, { useState } from 'react'
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import Pagination from './Pagination'
import Card from './Card'
import NoPostImg from '../../Public/Image/NoPosts.jpg'

const CardTab = () => {
  const navigation = useParams();
  const emptyValue = Object.values(navigation);
  const {list} = useSelector(state => state.postReducer)
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  
  const lists = list.slice(offset, offset + limit).map((value, index)=> {
    return  <Card 
                key={index}
                time={value.createdAt}
                id={value.articleId} 
                title={value.title} 
                content={value.content}
                category={value.category}
                done={value.done}
                profilePic={value.profilePic}
                username={value.username}
              />
  })

  return (
    <>
      <StWrap>
        {lists}
      </StWrap>
      {lists.length > 0 ? 
       <Pagination 
       total={list.length}
       limit={limit}
       page={page}
       setPage={setPage}
       /> :  emptyValue[0] ? ""
       :  <img src={NoPostImg} alt="" /> 
      }
    </>
  )
}

export default CardTab;

const StWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
  @media (max-width: 800px) {
        width: 40%;
    }
`;