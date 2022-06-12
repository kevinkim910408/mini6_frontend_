import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import flex from '../Common/flex'
import Logo from '../../Public/Image/LogoImage.PNG'

const Header = () => {
  return (
    <StHeader>
        <StTitleLink to='/'>
            <img style={{width:'70px'}} src={Logo} alt="" />
            <StTitleSpan>Dev Box</StTitleSpan>
        </StTitleLink>
        <StLogInOutLink to='/login'>
            <span>로그인</span>
        </StLogInOutLink>
    </StHeader>
  )
}

export default Header;

const StHeader = styled.header`
    ${flex({justify:'space-between'})}
    width: 100%;
    height: 110px;
    background-color: #f4f7fe;
`;


const StTitleLink = styled(Link)`
    ${flex({})}
    width: 20%;
    height: 100%;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    text-align: center;
    @media (max-width: 800px) {
        display: none;
    }
`;

const StTitleSpan = styled.div`
    font-size: 1.3rem;
    font-weight: 700;
    @media (max-width: 800px) {
        display: none;
    }
`;

const StLogInOutLink = styled(Link)`
    ${flex({})}
    width: 200px;
    height: 50px;
    padding: 5px;
    margin-right: 3rem;
    background-color: var(--blue);
    color: #fff;
    font-weight: 700;
    font-size: 1.4rem;
    border-radius: 50px;
    border: none;
    text-decoration: none;
    &:hover{
        color: #fff
    }
`;