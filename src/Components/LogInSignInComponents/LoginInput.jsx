import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../Redux/modules/users";
import logo from "../../Public/Image/logo.png";

const LoginInput = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setName] = useState();
    const [password, setPw] = useState();

    const loginDB = () => {
        if (username === "" || password === "") {
            window.alert("아이디와 비밀번호를 모두 입력해주세요!");
            return;
        }
     dispatch(userActions.loginDB(username, password));
     alert("Dev Box에 오신걸 환영합니다!")
     navigate("/");
    };
  return (
    <>
        <form action="/" onSubmit={loginDB}>
          <Form>
            <StInputList>
              <StHeader to={'/'}>
                <StImg src={logo} alt="logo" />
                <StTitle>Dev Box</StTitle>
              </StHeader>
              <StInput
                type="text"
                value={username}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Id"
                required
              />
              <StInput
                type="password"
                value={password}
                onChange={(event) => {
                  setPw(event.target.value);
                }}
                placeholder="Password"
                required
              />
              <StButton type="submit" variant="primary">
                로그인
              </StButton>
              <span>
                아직 회원이 아니시라면?  
                <Link to="/signup"> Dev Box와 함께하세요!</Link>
              </span>
            </StInputList>
          </Form>
        </form>
    </>
  )
}

export default LoginInput;

const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StHeader = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  text-decoration: none;
  &:hover{
    opacity: 0.8;
  }
`;
const StImg = styled.img`
  width: 60px;
`;
const StTitle = styled.h1`
  font-size: 38px;
  font-weight: bold;
  color: var(--black);
  
`;
const StInputList = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 2vw;
`;
const StInput = styled.input`
  width: 100%;
  padding: 15px 20px;
`;
const StButton = styled.button`
  width: 100%;
  background-color: var(--blue);
  padding: 20px;
  border: 0;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
`;