import React from 'react'
import { Link } from 'react-router-dom';
import { faFolderPlus, faCircleCheck, faCircleXmark, faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faJava, faJs, faReact, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
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
            <Category text="ALL" icon={faFolderPlus}/>
            <Category text="SOLVED" icon={faCircleCheck}/>
            <Category text="UNSOLVED" icon={faCircleXmark}/>
            <Category text="JAVA" icon={faJava}/>
            <Category text="JAVASCRIPT" icon={faJs}/>
            <Category text="REACT" icon={faReact}/>
            <Category text="NODEJS" icon={faNodeJs}/>
            <Category text="GITHUB" icon={faGithub}/>
            <Category text="FAVOURITE" icon={faStar}/>
            <Link to={'/aboutUs'}>
              <Category text="About Us" icon={faUserGroup}/>
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
    margin: 20px;
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
