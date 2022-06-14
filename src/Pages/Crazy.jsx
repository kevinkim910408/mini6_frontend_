import React from 'react'
import styled, {keyframes} from 'styled-components'
import flex from '../Components/Common/flex'
import Pic1 from '../Public/Image/1.PNG'
import Pic2 from '../Public/Image/2.PNG'
import Pic3 from '../Public/Image/3.PNG'
import Pic4 from '../Public/Image/4.PNG'
import Pic5 from '../Public/Image/5.PNG'
import bonobono from '../Public/Image/bonobono.png'

const Crazy = () => {
  return (
    <StWrap>
      <StDiv >
        <img style={{width:'200px'}} src={Pic1} alt="" />
      </StDiv>
      <StDiv>
        <img style={{width:'300px'}} src={Pic2} alt="" />
      </StDiv>
      <StDiv>
        <img style={{width:'300px'}} src={Pic3} alt="" />
      </StDiv>
      <StDiv>
        <img style={{width:'300px'}} src={Pic4} alt="" />
      </StDiv>
      <StDiv>
        <img style={{width:'300px'}} src={Pic5} alt="" />
      </StDiv>
        <img style={{width:'300px'}} src="https://i.imgur.com/T70tqx2.gif" alt="" />
        <img style={{width:'300px', position:'absolute', top:'40%', left:'5%'}} src={bonobono} alt="" />
        <img style={{width:'300px', position:'absolute', top:'50%', left:'0'}} src={bonobono} alt="" />
        <img style={{width:'300px', position:'absolute', top:'60%', left:'5%'}} src={bonobono} alt="" />
        <img style={{width:'300px', position:'absolute', top:'89%', left:'5%'}} src="https://i.imgur.com/bS6nNYW.gif" alt="" />
        <img style={{width:'300px', position:'absolute', top:'10%', left:'5%'}} src="http://25.media.tumblr.com/e5e401e35d609e217c19a24204360b8d/tumblr_mg3h0yvGFD1rgpyeqo1_500.gif" alt="" />
    </StWrap>
  )
}

export default Crazy

const animation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const StWrap = styled.div`
  ${flex({align:'flex-start'})}
  background-color: teal;
	background: linear-gradient(45deg, red, yellow, green, blue);
	background-size: 400% 400%;
	animation: ${animation} 0.5s ease infinite;
	height: 100vh;
`;

const animation3 = keyframes`
	0% {
		transform: translateY(0)
	}
  25%{
    transform: rotateY(180deg);
  }
  40%{
    transform: translateX(500px);
  }
  50% {
		transform: translateY(400px) rotateZ(360deg);
	}
  80%{
    transform: translateX(-300px);
  }
	100% {
		transform: translateY(0)
	}
`;

const StDiv = styled.div`
  ${flex({})}
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
   
   :nth-child(1){
    animation: ${animation3} 0.8s ease infinite; 
   }
   :nth-child(2){
    animation: ${animation3} 1.2s ease infinite; 
   }
   :nth-child(3){
    animation: ${animation3} 1s ease infinite; 
   }
   :nth-child(4){
    animation: ${animation3} 0.9s ease infinite; 
   }
   :nth-child(5){
    animation: ${animation3} 1.1s ease infinite; 
   }
`;