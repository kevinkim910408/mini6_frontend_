import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import flex from '../Common/flex'
import Logo from '../../Public/Image/LogoImage.PNG'
import { deleteAllCookies, getCookie } from '../../Shared/Cookie'
import { useImage } from '../CustomHooks/useImage'

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const userProfile = useImage();
    const temp = getCookie("is_login");
    console.log(temp)
    useEffect(()=>{
        setIsLogin(temp)
    },[temp])

    const logOutHandler = () => {
        deleteAllCookies();
        setIsLogin(false);
    }
    
  return (
    <StHeader>
        <StTitleLink to='/'>
            <img style={{width:'70px'}} src={Logo} alt="" />
            <StTitleSpan>Dev Box</StTitleSpan>
        </StTitleLink>
        {isLogin ? 
        <div style={{display:'flex'}}>
            <img style={{width:'70px', borderRadius:'100%'}} src={userProfile} alt="" />
            <StLogInOutButton onClick={logOutHandler}>
                <span>로그아웃</span>
            </StLogInOutButton>
         </div> : 
        <StLogInOutLink to='/login'>
            <span>로그인</span>
        </StLogInOutLink>
         }
    </StHeader>
  )
}

export default Header;

const StHeader = styled.header`
    ${flex({justify:'space-between'})}
    width: 100%;
    height: 110px;
    background-color: #f4f7fe;
    font-family: 'Noto Sans KR', sans-serif;
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

const StLogInOutButton = styled.button`
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
