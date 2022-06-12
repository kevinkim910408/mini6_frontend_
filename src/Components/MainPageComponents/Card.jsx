import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import flex from '../Common/flex'

const Card = ({id, title, content, category}) => {
    return (
        <StLink to={`/detail/${id}`}>
            <StCard>
                <StContents>
                    <div>
                        <StProfileImg src='https://www.w3schools.com/howto/img_avatar.png' alt='ProfileImg'/>
                        <span style={{fontSize:'0.5rem', textAlign:'center'}}>ID: 0{id}</span>
                    </div>
                    <StTextContents>
                        <span>{category}</span>
                        <StDivBos>{title}</StDivBos>
                        <StDivBos>{content}</StDivBos>
                    </StTextContents>
                    <StAdditionalContents>
                        <FontAwesomeIcon className='icon' icon={faCircleCheck}/>
                    </StAdditionalContents>
                </StContents>

            </StCard>
        </StLink>
  )
}

export default Card;

const StCard = styled.div`
    ${flex({justify:'space-between'})}
    width: 100%;
    height: calc((100vh - 110px) / 5);
    padding: 1rem;
    cursor: pointer;
    &:hover{
        background-color: #eff1f5;
    }
    @media (max-width: 1050px) {
        width: 98%;
    }
`;

const StContents = styled.div`
    ${flex({})}
    width: 100%;
    height: 100%;
    margin-left: 2rem;
`;

const StTextContents = styled.div`
    ${flex({direction:'column',align:'flex-start', justify:'space-evenly'})}
    width: 80%;
    height: 100%;
    margin-left: 2rem;
    @media (max-width: 1550px) {
        overflow: scroll;
    }
`;

const StProfileImg = styled.img`
    width: 100%;
    border-radius: 100%;
    @media (max-width: 1550px) {
        display:none;
    }
`;

const StAdditionalContents = styled.div`
    ${flex({direction:'column', align:'center', justify:'space-evenly'})}
    width: 20%;
    height: 100%;
    & > button{
        background-color: transparent;
        font-size: 2rem;
        border: none;
        &:hover{
            opacity: 0.5;
        }
    }
    
`;

const StLink = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;

const StDivBos = styled.div`
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;