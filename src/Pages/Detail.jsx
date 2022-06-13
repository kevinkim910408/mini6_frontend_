import React from 'react'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Content from '../Components/DetailPageComponents/Content'
import Comment from '../Components/DetailPageComponents/Comment'

const Detail = () => {
  return (
    <>
      <StDetail>
        <Content></Content>
        <Comment></Comment>
      </StDetail>
    </>
  )
}

export default Detail

const StDetail = styled.div`
    ${flex({direction:'column'})}
    width: 45%;
    height: 100%;
    
`;



