import React from 'react'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Content from '../Components/PostPageComponents/Content'

const Post = () => {
  return (
    <StPost>
        <Content />
    </StPost>
  )
}

export default Post

const StPost = styled.div`
    ${flex({direction:'column'})}
    width: 45%;
    height: 100%;
`;
