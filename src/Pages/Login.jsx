import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import login_bg from "../Public/Image/login_bg.jpg";
import LoginInput from "../Components/LogInSignInComponents/LoginInput";

const Login = (props) => {
  return (
    <StFlex>
      <Col lg={6}>
      <LoginInput />
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

