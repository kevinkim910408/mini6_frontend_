import React from 'react'
import { Link } from 'react-router-dom';
import Spring from '../../Public/Image/sideIcons/spring.png'
import ReactIcon from '../../Public/Image/sideIcons/react.png'
import Node from '../../Public/Image/sideIcons/node.png'
import JAVA from '../../Public/Image/sideIcons/java.png'
import JS from '../../Public/Image/sideIcons/js.png'
import Guitar from '../../Public/Image/sideIcons/guitar.png'
import Star from '../../Public/Image/sideIcons/star.png'
import ADD from '../../Public/Image/sideIcons/ADD.png'
import ALL from '../../Public/Image/sideIcons/ALL.png'
import GITHUB from '../../Public/Image/sideIcons/GITHUB.png'
import SOLVED from '../../Public/Image/sideIcons/SOLVED.png'
import Team from '../../Public/Image/sideIcons/team.png'
import Unsolved from '../../Public/Image/sideIcons/unsolved.png'

import styled from 'styled-components'
import flex from '../Common/flex'
import Category from './Category';

const Side = () => {
  return (
    <StSide>
        <StPostButton to={'/post'}>
          POST
        </StPostButton>
        <div>
            <Category text="ALL" icon={ALL}/>
            <Category text="FAVOURITE" icon={Star}/>
            <Category text="SOLVED" icon={SOLVED}/>
            <Category text="UNSOLVED" icon={Unsolved}/>
            <Category text="SPRING" icon={Spring}/>
            <Category text="REACT" icon={ReactIcon}/>
            <Category text="NODEJS" icon={Node}/>
            <Category text="JAVA" icon={JAVA}/>
            <Category text="JAVASCRIPT" icon={JS}/>
            <Category text="GITHUB" icon={GITHUB}/>
            <Category text="OTHERS" icon={Guitar}/>
            <Link to={'/aboutUs'}>
              <Category text="About Us" icon={Team}/>
            </Link>
        </div>
    </StSide>
  )
}

export default Side

const StSide = styled.div`
    ${flex({direction:'column',justify:'flex-start'})}
    width: 20%;
    height: 100%;
    background-color: #f4f7fe;
    @media (max-width: 800px) {
        display: none;
    }
`;

const StPostButton = styled(Link)`
    ${flex({})}
    width: 80%;
    height: 50px;
    margin-top: 5px;
    background-color: var(--blue);
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    border: none;
    &:hover{
        color: #fff;
        background-color: var(--Button-blue);
    }
`;
