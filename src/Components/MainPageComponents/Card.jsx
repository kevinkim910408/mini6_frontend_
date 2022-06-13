import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import flex from '../Common/flex'

const Card = ({id, title, content, category, username, time, done}) => {
    const yearMonth = time.split("-") // year, month
    const day = yearMonth[2].split("T") // day
    const timeVal = day[1].split(":") // hour, minute
    return (
        <StLink to={`/detail/${id}`}>
            <StCard>
                <StContents>
                    <StDiv>
                        <StProfileImg src='https://www.w3schools.com/howto/img_avatar.png' alt='ProfileImg'/>
                        <span style={{fontSize:'0.8rem', textAlign:'center'}}>ID: {username}</span>
                    </StDiv>
                    <StTextContents>
                        <span>- {category} - {yearMonth[0]}/{yearMonth[1]}/{day[0]} {timeVal[0]}시{timeVal[0]}분 </span>
                        <StDivBos>{title}</StDivBos>
                        <StDivBos>{content}</StDivBos>
                    </StTextContents>
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
    width: 100px;
    border-radius: 100%;
    @media (max-width: 1550px) {
        display:none;
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

const StDiv = styled.div`
    ${flex({direction:'column'})}
    width: 20%;
`;