import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Public/Image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import login_bg from "../Public/Image/login_bg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../Redux/modules/users";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 로그인 정보
  const [username, setName] = useState();
  const [password, setPw] = useState();

  // 로그인, API 호출
  const loginDB = () => {
    if (username === "" || password === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.loginDB(username, password));
    navigate("/");
  };

  return (
    <StFlex>
      <Col lg={6}>
        <form action="/" onSubmit={loginDB}>
          <Form>
            <StInputList>
              <StHeader>
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
                Sign in
              </StButton>
              <p>
                Don't have an account yet?
                <Link to="/signup">Join Hire Ground</Link>
              </p>
            </StInputList>
          </Form>
        </form>
      </Col>
      <Col lg={6}>
        <BgContainer>
          <BlueBg></BlueBg>
          <BgWrap></BgWrap>
        </BgContainer>
      </Col>
    </StFlex>
  );
};

export default Login;

const StFlex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const BgContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlueBg = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(75, 122, 254, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const BgWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${login_bg}) center center no-repeat;
  background-size: cover;
`;
const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 2vw;
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
