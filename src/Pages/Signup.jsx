import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import logo from "../Public/Image/logo.png";
import profile_1 from "../Public/Image/frofile_1.png";
import profile_2 from "../Public/Image/frofile_2.png";
import profile_3 from "../Public/Image/frofile_3.png";
import profile_4 from "../Public/Image/frofile_4.png";
import profile_5 from "../Public/Image/frofile_5.png";
import profile_6 from "../Public/Image/frofile_6.png";
import { actionCreators as userActions } from "../Redux/modules/users";
import { idCheck, passwordCheck } from "../shared/LoginCheck";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setName] = useState();
  const [password, setPw] = useState();
  const [passwordcheck, setPwCheck] = useState();
  const [profilePic, setProfile] = useState();
  const checkref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (password && passwordcheck && password === passwordcheck) {
    checkref.current.innerText = "✔️";
  } else if (password !== passwordcheck) {
    checkref.current.innerText = "❌";
  }
  const signUpDB = async () => {
    if (username === "" || password === "" || passwordcheck === "") {
      window.alert("아이디와 비밀번호를 모두 입력해주세요!");
      return;
    }
    dispatch(
      userActions.signupDB(username, password, passwordcheck, profilePic)
    );
    navigate("/login");
  };

  const handleChange = (e) => {
    setProfile(e.target.id);
    console.log(e.target.id);
  };
  return (
    <form action="/login" onSubmit={signUpDB}>
      <Form>
        <StFlex>
          <StInputList>
            <StHeader>
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
            />
            {idCheck(username) ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                형식에 맞는 아이디입니다.
              </p>
            ) : null}
            {!idCheck(username) ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                {" "}
                2~ 10자 한글, 영문, 숫자 가능, 특수문자 -_ 가능
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
            {passwordCheck(password) ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                형식에 맞는 비밀번호입니다.
              </p>
            ) : null}
            {!passwordCheck(password) ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                6~20자 영문 숫자 필수, 특수문자 !@#$%^&* 가능
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

            {password !== passwordcheck && password?.length >= 1 ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                비밀번호가 일치하지 않습니다.
              </p>
            ) : null}
            {password === passwordcheck && password?.length > 5 ? (
              <p style={{ fontSize: "12px", color: "green" }}>
                비밀번호가 일치합니다.
              </p>
            ) : null}
          </StInputList>
          <p ref={checkref}></p>
          <StLabellIST>
            <StLabel htmlFor="profile1">
              <input
                id="profile1"
                type="radio"
                name="profile"
                onChange={handleChange}
                value={profilePic}
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
            Sign up
          </StButton>
        </Stbtn>
      </Form>
    </form>
  );
};

export default Signup;

const Form = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const StFlex = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;
const StInput = styled.input`
  width: 70%;
  padding: 15px 20px;
`;
const Stbtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StButton = styled.button`
  background-color: var(--blue);
  padding: 20px;
  width: 20vw;
  border: 0;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
`;

const StLabellIST = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2vw 10vw;
  flex-wrap: wrap;
  gap: 15px;
`;
const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;