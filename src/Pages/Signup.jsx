import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import logo from "../Public/Image/logo.png";
import profile_1 from "../Public/Image/profile_profile1.png";
import profile_2 from "../Public/Image/profile_profile2.png";
import profile_3 from "../Public/Image/profile_profile3.png";
import profile_4 from "../Public/Image/profile_profile4.png";
import profile_5 from "../Public/Image/profile_profile5.png";
import profile_6 from "../Public/Image/profile_profile6.png";
import { actionCreators as userActions } from "../Redux/modules/users";
import { idCheck, passwordCheck } from "../Shared/LoginCheck";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import flex from '../Components/Common/flex'
import PasswordStrengthMeter from "../Components/PasswordStrength/PasswordStrengthMeter";

const Signup = () => {
  const [username, setName] = useState();
  const [password, setPw] = useState();
  const [passwordcheck, setPwCheck] = useState();
  const [profilePic, setProfile] = useState();
  const checkref = useRef();
  const focusRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    focusRef.current.focus();
  },[])


  const signUpDB = async () => {
    if (username === "" || password === "" || passwordcheck === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(userActions.signupDB(username, password, profilePic));
    navigate("/login");
  };

  const handleChange = (e) => {
    setProfile(e.target.id);
    console.log(e.target.id);
  };
  return (
    <form action="/login" onSubmit={signUpDB}>
      <p ref={checkref}></p>
      <Form>
        <StFlex>
           <StInputList>
            <StHeader to={'/'}>
                <StImg src={logo} alt="logo" />
                <StTitle>Dev Box</StTitle>
            </StHeader>
            <StInput
              type="text"
              value={username || ""}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Id"
              required
              ref={focusRef}
            />
            {idCheck(username) ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                Dev Box에 가입해 주셔서 감사합니다.
              </p>
            ) : null}
            {!idCheck(username) ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                {" "}
                숫자 그리고 영어를 모두 포함하여 4~15 사이로 만들어 주세요
              </p>
            ) : null}
            <StInput
              type="password"
              value={password || ""}
              onChange={(event) => {
                setPw(event.target.value);
              }}
              placeholder="Password"
              required
            />
            {/* ******************************************************************************************************************************* */}
            
            {passwordCheck(password) ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                형식에 맞는 비밀번호입니다.
              </p>
            ) : null}
            {!passwordCheck(password) ? (
              <p style={{ fontSize: "12px", color: "red" }}>
               영어 숫자 그리고 특수문자를 모두 포함하여 4~20 사이로 만들어 주세요
              </p>
            ) : null}
            <StInput
              type="password"
              value={passwordcheck || ""}
              onChange={(event) => {
                setPwCheck(event.target.value);
              }}
              placeholder="Confirm Password"
              required
            />
            {/* ******************************************************************************************************************************* */}

              <p style={{ fontSize: "12px", color: "red" }}>
                비밀번호가 일치하지 않거나 비어있습니다.
              </p>
            {password === passwordcheck && password?.length > 5 ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                비밀번호가 일치합니다.
              </p>
            ) : null}
          </StInputList>
          
          <StLabellIST>
            <StLabel htmlFor="profile1">
              <input
                id="profile1"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
                required
              />
              <img src={profile_1} />
            </StLabel>
            <StLabel htmlFor="profile2">
              <input
                id="profile2"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
              />
              <img src={profile_2} />
            </StLabel>
            <StLabel htmlFor="profile3">
              <input
                id="profile3"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
              />
              <img src={profile_3} />
            </StLabel>
            <StLabel htmlFor="profile4">
              <input
                id="profile4"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
              />
              <img src={profile_4} />
            </StLabel>
            <StLabel htmlFor="profile5">
              <input
                id="profile5"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
              />
              <img src={profile_5} />
            </StLabel>
            <StLabel htmlFor="profile6">
              <input
                id="profile6"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
              />
              <img src={profile_6} />
            </StLabel>
          </StLabellIST>
          
        </StFlex>
        <Stbtn>
          <StButton type="submit" variant="primary">
            가입하기
          </StButton>
        </Stbtn>
      </Form>
    </form>
  );
};

export default Signup;

const Form = styled.div`
  ${flex({direction:'column'})}
  width: 100%;
  height: 100vh;
  font-family: 'Noto Sans KR', sans-serif;
`;
const StFlex = styled.div`
  ${flex({})}
  width: 100%;
  height: 80%;
`;
const StHeader = styled(Link)`
  ${flex({})}
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
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--black);
`;
const StInputList = styled.div`
  ${flex({direction:'column'})}
  width: 100%;
  gap: 1.8rem;
`;
const StInput = styled.input`
  width: 70%;
  padding: 1rem 1.2rem;
`;
const Stbtn = styled.div`
  ${flex({direction:'column'})}
  width: 100%;
`;
const StButton = styled.button`
  background-color: var(--blue);
  padding: 20px;
  width: 20vw;
  border: 0;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
  &:hover{
    background-color: var(--Button-blue);
  }
`;

const StLabellIST = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;
const StLabel = styled.label`
  ${flex({direction:'column'})}
  gap: 1rem;
  cursor: pointer;
  & > input:hover{
      -webkit-box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E, -2px -1px 21px 1px rgba(0,0,0,0); 
      box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E, -2px -1px 21px 1px rgba(0,0,0,0);  
    }
`;
