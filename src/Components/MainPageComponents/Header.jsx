import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import flex from '../Common/flex'
import Logo from '../../Public/Image/LogoImage.PNG'
import { getCookie } from '../../Shared/Cookie'
import { useImage } from '../CustomHooks/useImage'
const Header = () => {
    const isLogin = getCookie("is_login");
    const userProfile = useImage();
    console.log(userProfile)
  return (
    <StHeader>
        <StTitleLink to='/'>
            <img style={{width:'70px'}} src={Logo} alt="" />
            <StTitleSpan>Dev Box</StTitleSpan>
        </StTitleLink>
        {isLogin }
        {/* <StLogInOutLink to='/login'>
            <span>로그인</span>
        </StLogInOutLink> */}
        <div style={{display:'flex'}}>
            <img style={{width:'70px', borderRadius:'100%'}} src={userProfile} alt="" />
            {/* <div style={{width:'70px', borderRadius:'100%', backgroundImage:`url()`}} alt="" /> */}
            <StLogInOutLink to='/login'>
                <span>로그아웃</span>
            </StLogInOutLink>
        </div>
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
