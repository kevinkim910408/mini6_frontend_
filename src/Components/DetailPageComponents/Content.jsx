import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { __deletePost, __donePost } from '../../Redux/modules/posts';
import styled from 'styled-components'
import flex from '../Common/flex'

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {list} = useSelector(state=> state.postReducer);
  const {id} = useParams(); // 10
  const [done, setDone] = useState(false);
 

  const onDoneHandler = () =>{
      setDone(value => !value)
      dispatch(__donePost({id, done}, id));
  } 

  const data = list.find((value)=>{
    return value.articleId === +id
  })
  
  const generateIdName = () => {
      if(done){
          return "done"
      }else{
          return "notDone"
      }
  }

  const onUpdateHandler = () => {
    navigate(`/update/${data.articleId}`)
  }

  const onDeleteHandler = (id) => {
    dispatch(__deletePost(id));
    navigate('/')
  }

  return (
    <StContent>
      <StHeader>
        <StProfileImg src='https://www.w3schools.com/howto/img_avatar.png' alt='ProfileImg'/>
        <p>{data.username}</p>
        <FontAwesomeIcon className='icon' icon={faPenToSquare} onClick={onUpdateHandler}/> 
        <FontAwesomeIcon className='icon' icon={faTrashCan} onClick={()=>{onDeleteHandler(id)}} />
        <button onClick={onDoneHandler}>
            <FontAwesomeIcon className='icon' icon={faCircleCheck} done={done} id={generateIdName()}/>
        </button>
      </StHeader>
      <StTitle>
        <p style={{fontSize:'1.4rem'}}>{data.title}</p>
      </StTitle>
      <div style={{width:'80%', height:'1px', border:'1px solid #000', opacity:'0.1'}}/>
      <StBody>
      <p style={{fontSize:'1.3rem', wordBreak:"break-all", lineHeight:'1.4', whiteSpace:'pre-wrap'}}>{data.content}</p>
      </StBody>
    </StContent>
  )
}

export default Content;

const StContent = styled.div`
    ${flex({direction:'column', justify:'flex-start'})}
    width: 90%;
    height: 70%;
    -webkit-box-shadow: 5px 5px 24px -11px var(--black); 
    box-shadow: 5px 5px 24px -11px var(--black);
    overflow: scroll;
    @media (max-width: 1700px) {
      overflow: auto;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
    #done{
        color: green;
    }
    #notDone{
        color: #000;
    }
`;

const StHeader = styled.div`
    ${flex({justify:'flex-start'})}
    width: 90%;
    height:10%;
    margin-top: 1rem;
    & > .icon{
      margin-left: 2rem;
    }
    @media (max-width: 1300px) {
      ${flex({})}
    }
`;

const StProfileImg = styled.img`
    width: 5%;
    margin: 0 2rem 0 3rem;
    border-radius: 100%;
    @media (max-width: 1300px) {
      display: none ;
    }
`;

const StTitle= styled.div`
    ${flex({direction:'column', justify:'flex-start', align:'flex-start'})}
    width: 90%;
    height:15%;
    & > p{
      margin: 1rem 0 0 3rem;
    }
    @media (max-width: 1300px) {
      ${flex({})}
    }
`;

const StBody= styled.div`
    ${flex({justify:'flex-start', align:'flex-start'})}
    width: 90%;
    height:50%;
    margin: 2rem;
`;

