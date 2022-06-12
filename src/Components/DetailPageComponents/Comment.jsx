import React from 'react'
import styled from 'styled-components'
import flex from '../Common/flex'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const Lists = arr.map((value,index)=>{
    return <StExampleComment key={index}>
            <StProfileImg src='https://www.w3schools.com/howto/img_avatar.png' alt='ProfileImg' />
            <span>유저 ID</span>
            <span style={{margin:'0 2rem 0 2rem'}}> 코멘트는 여기에 들어옵니다 코멘트는 여기에요 여기</span>
            <div style={{margin:'0 2rem 0 0rem'}}>
              <FontAwesomeIcon className='icon' icon={faPenToSquare} />
            </div>
            <div>
              <FontAwesomeIcon className='icon' icon={faTrashCan} />
            </div>
          </StExampleComment>
  })
  return (
    <StComment>
      <StInputContainer>
       <StInput />
        <button>추가하기</button>
      </StInputContainer>
      <StCommentContainer>
        {Lists}
      </StCommentContainer>
    </StComment>
  )
}

export default Comment;

const StComment = styled.div`
    ${flex({direction:'column'})}
    width: 90%;
    height: 20%;
    margin-top: 2rem;
    -webkit-box-shadow: 5px 5px 24px -11px #000000; 
    box-shadow: 5px 5px 24px -11px #000000;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const StInputContainer = styled.div`
  ${flex({})}
  width: 100%;
  height: 20%;
  
`;

const StInput = styled.input`
  width: 90%;
  height: 100%;
  &:focus{
    outline: none;
  }
`;

const StCommentContainer = styled.div`
  ${flex({direction:'column', justify:'flex-start'})}
  width: 100%;
  overflow: scroll;
`;

const StExampleComment = styled.div`
 ${flex({})}
  width: 90%;
  margin-top: 0.2rem;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 30px;
`;

const StProfileImg = styled.img`
  width: 4%;
  margin: 0 2rem 0 3rem;
  border-radius: 100%;
`;
