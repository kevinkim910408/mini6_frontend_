import React from 'react'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Content from '../Components/UpdatePageComponents/Content'

const Update = () => {
  return (
    <StPost>
        <Content />
    </StPost>
  )
}

export default Update

const StPost = styled.div`
    ${flex({direction:'column'})}
    width: 45%;
    height: 100%;
`;
