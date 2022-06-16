import React from 'react'
import styled from 'styled-components'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import {faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import ScrollButton from '../Components/ScrollTopComponents/ScrollButton';
import flex from '../Components/Common/flex'
import Pic1 from '../Public/Image/1.PNG'
import Pic2 from '../Public/Image/2.PNG'
import Pic3 from '../Public/Image/3.PNG'
import Pic4 from '../Public/Image/4.PNG'
import Pic5 from '../Public/Image/5.PNG'

const AboutUs = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div style={{fontFamily: 'MYYeongnamnu'}}>
      <ScrollButton />
      <ScrollContainer>
      
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
        <span style={{ fontSize: "30px" }}>항해7기 A반 6조 가보자고팀😀</span>
      </Animator>
    </ScrollPage>
    <ScrollPage page={1}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
        <p style={{ fontSize: "30px" }}>Dev Box💻</p>
        <p style={{ fontSize: "30px" }}>제작기간: 2022-06-10 ~ 2022-06-16 </p>
      </Animator>
    </ScrollPage>
    <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <img style={{width:'100px'}} src={Pic1} alt="" />
          <p style={{ fontSize: "40px", marginBottom:'5px' }}>교수님 📚</p>
          <p style={{ fontSize: "40px" }}>서 만 원 님 ✨</p>
          </StDiv>
        </Animator>
    </ScrollPage>
    <ScrollPage page={3}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 만원님의 한마디 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>  진짜 이름난 실력자들과 숨은실력자들과 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>팀을꾸리니까 한주동안 너무 편한거 같아요.</p>
          </StDiv>
        </Animator>
    </ScrollPage>

    <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <img style={{width:'100px'}} src={Pic5} alt="" />
          <p style={{ fontSize: "40px", marginBottom:'5px' }}>스프링 요정 🧚‍♂️</p>
          <p style={{ fontSize: "40px" }}>조 한 울 님 ✨</p>
          </StDiv>
        </Animator>
    </ScrollPage>
    <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 한울님의 한마디 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 다들 너무 잘하셔서 뭐.. 잠도 안주무시고 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 전 맨날 잠만자고 한것도 없고.. 버스 무임승차... </p>
          </StDiv>
        </Animator>
    </ScrollPage>

    <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <img style={{width:'100px'}} src={Pic3} alt="" />
          <p style={{ fontSize: "40px", marginBottom:'5px' }}>스프링 여제 👑</p>
          <p style={{ fontSize: "40px" }}>손 경 이 님 ✨</p>
          </StDiv>
        </Animator>
    </ScrollPage>
    <ScrollPage page={8}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 경이님의 한마디 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>  모두 항해 끝까지 잘해봅시다. </p>
          </StDiv>
        </Animator>
    </ScrollPage>

    <ScrollPage page={9}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <img style={{width:'100px'}} src={Pic4} alt="" />
          <p style={{ fontSize: "40px", marginBottom:'5px' }}>아침햇살 🌞 / 리액트 신 🧚‍♀️</p>
          <p style={{ fontSize: "40px" }}>손 유 정 님 ✨</p>
          </StDiv>
        </Animator>
    </ScrollPage>
    <ScrollPage page={10}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 유정님의 한마디 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>실력파 팀원들 덕분에 멋진 프로젝트가 완성된 것 같아요!  </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>같이해서 너무 든든합니다. 끝까지 파이팅!!.</p>
          </StDiv>
        </Animator>
    </ScrollPage>

    <ScrollPage page={11}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <img style={{width:'100px'}} src={Pic2} alt="" />
          <p style={{ fontSize: "40px", marginBottom:'5px' }}>리액트 화신 🔥</p>
          <p style={{ fontSize: "40px" }}>김 준 호 님 ✨</p>
          </StDiv>
        </Animator>
    </ScrollPage>
    <ScrollPage page={12}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <StDiv>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 준호님의 한마디 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}> 한주동안 좋은분들과 함께하면서 </p>
          <p style={{ fontSize: "40px", marginBottom:'20px' }}>많이배우고 정말 편한 한 주였습니다!</p>
          </StDiv>
        </Animator>
    </ScrollPage>

    <ScrollPage page={4}>
      <Animator animation={batch(Fade(), Sticky())}>
        <p style={{ fontSize: "40px", marginBottom:'50px' }}>한주동안 수고 많았습니다!</p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          Notion___
          <a target="_blank" href="https://remarkable-nautilus-6da.notion.site/SA-6-5cd78501002f4ac39ffede51c0e3f829"> 
          <FontAwesomeIcon className='icon' icon={faBook} />
          </a>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          Front-End Git___
          <a target="_blank" href="https://github.com/kevinkim910408/mini6_frontend_"> 
          <FontAwesomeIcon className='icon' icon={faGithub} />
          </a>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          Back-End Git___
          <a target="_blank" href="https://github.com/Luwin-Seo/mini6_backend">
          <FontAwesomeIcon className='icon' icon={faGithub} />
          </a>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          원래 About Us Page 테마, 눈아픔 주의-{'>'}
          <Link to='/crazy'>클릭해주세요 🎊</Link>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          뒤로 돌아가려면_
          <Link to='/'>여기를 클릭해주세요🏃‍♂️ </Link>
        </p>
        
      </Animator>
    </ScrollPage>

    </ScrollContainer>
  </div>
  )
}

export default AboutUs



const StDiv = styled.div`
  ${flex({direction:'column'})}
  width: 100%;
  height: 100%;
`;
