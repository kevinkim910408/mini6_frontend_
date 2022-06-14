import React from "react";
import styled from "styled-components";
import profile_1 from "../../Public/Image/profile_profile1.png";
import Delete from "../../Public/Image/Delete.png";
import Pencil from "../../Public/Image/Pencil.png";

const Comment = () => {
  const arr = [0, 0, 0, 0, 0, 0];
  const Lists = arr.map((value, index) => {
    return (
      <StTextWrap key={index}>
        <StFlexBetween>
          <StFlex>
            <StProfileImg src={profile_1} alt="profileimg" />
            <span>username</span>
            <p>2022-06-10</p>
          </StFlex>
          <StFlexEnd>
            <StUpdatebutton>
              <StUpdateImg src={Pencil} alt="update" />
            </StUpdatebutton>
            <StUpdatebutton>
              <StUpdateImg src={Delete} alt="Delete" />
            </StUpdatebutton>
          </StFlexEnd>
        </StFlexBetween>

        <StText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          accusantium.
        </StText>
      </StTextWrap>
    );
  });
  return (
    <StContainer>
      <StCommentList>{Lists}</StCommentList>

      <StInputWrap>
        <StFlex>
          <StProfileImg src={profile_1} alt="profileimg" />
          <span>username</span>
        </StFlex>
        <form>
          <StInput type="text" />
          <Stbutton>Send</Stbutton>
        </form>
      </StInputWrap>
    </StContainer>
  );
};

export default Comment;
const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
`;
const StTextWrap = styled.div`
  width: 100%;
  box-shadow: 0px 4px 21px 0px rgba(89, 102, 122, 0.1);
  padding: 20px;
  margin-top: 20px;
`;
const StInputWrap = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 21px 0px rgba(89, 102, 122, 0.1);
  padding: 20px;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const StCommentList = styled.div`
  height: 50%;
  overflow: scroll;
`;
const StFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;
const StFlexBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StFlexEnd = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
const StProfileImg = styled.img`
  width: 40px;
`;
const StInput = styled.input`
  width: 100%;
  margin: 15px 0;
  border: 1px solid #ddd;
  padding: 5px 20px;
`;
const StText = styled.p`
  margin-top: 10px;
`;
const StUpdatebutton = styled.button`
  background-color: transparent;
  border: 0;
`;
const Stbutton = styled.button`
  background-color: #eef2f5;
  border: 0;
  color: #666;
  padding: 10px 30px;
  border-radius: 10px;
  font-weight: bold;
  float: right;
`;
const StUpdateImg = styled.img`
  width: 20px;
`;