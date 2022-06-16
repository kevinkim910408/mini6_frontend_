import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faCircleCheck,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { __deletePost, __donePost, __addLike, __toggleFav } from "../../Redux/modules/posts";
import styled from "styled-components";
import flex from "../Common/flex";
import profile_1 from "../../Public/Image/profile_profile1.png";
const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.postReducer);
  const { likes } = useSelector((state) => state.postReducer);
  const { id } = useParams(); // 10
  const [done, setDone] = useState(false);
  const [like, setLike] = useState(likes);
  const [fav, setFav] = useState(false);

  const data = list.find((value) => {
    return value.articleId === +id;
  });

  const generateIdName = () => {  
    if (done) {
      return "done";
    } else {
      return "notDone";
    }
  };

  const generateIdLike = () => {  
    if (like === 0) {
      return "noLike";
    } else {
      return "like";
    }
  };

  
  const generateIdFav = () => {  
    if (fav) {
      return "fav";
    } else {
      return "notFav";
    }
  };

  const onDoneHandler = () => {
    dispatch(__donePost({ id }));
  };

  const onLikeHandler = () => {
    dispatch(__addLike({id: data.articleId}))
  }

  const onFavHandler = () => {
    dispatch(__toggleFav({ id }))
    // setFav(value => !value)
  }
  

  const onUpdateHandler = () => {
    navigate(`/update/${data.articleId}`);
  };

  const onDeleteHandler = (id) => {
    dispatch(__deletePost(id));
    navigate("/");
  };



  useEffect(()=>{
    setDone(data.done)
    setLike(likes)
  },[data.done, likes])

  return (
    <StContent>
      <StHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <StProfileImg
            style={{ width: "30px" }}
            src={profile_1}
            alt="ProfileImg"
          />
          <p>{data.username}</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            style={{ marginRight: "30px" }}
            className="icon"
            icon={faPenToSquare}
            onClick={onUpdateHandler}
          />
          <FontAwesomeIcon
            style={{ marginRight: "30px" }}
            className="icon"
            icon={faTrashCan}
            onClick={() => {
              onDeleteHandler(id);
            }}
          />
         <StButton onClick={onFavHandler} >
            <FontAwesomeIcon
              className="icon"
              icon={faStar}
              id={generateIdFav()}
            />
          </StButton>

          <StButton onClick={onLikeHandler} >
            <FontAwesomeIcon
              className="icon"
              icon={faHeart}
              id={generateIdLike()}
            />
            {like}
          </StButton>

          <button onClick={onDoneHandler} style={{ border: "none" }} >
            <FontAwesomeIcon
              className="icon"
              icon={faCircleCheck}
              done={done}
              id={generateIdName()}
            />
          </button>
        </div>
      </StHeader>

      <StBody>
        <StTitle>
          <p>{data.title}</p>
        </StTitle>
        <p>{data.content}</p>
      </StBody>
    </StContent>
  );
};

export default Content;

const StContent = styled.div`
  ${flex({ direction: "column", justify: "flex-start" })}
  width: 100%;
  height: 40%;
  padding: 20px;

  -webkit-box-shadow: 0px 4px 21px 0px rgba(89, 102, 122, 0.1);
  box-shadow: 0px 4px 21px 0px rgba(89, 102, 122, 0.1);

  overflow: scroll;
  @media (max-width: 1700px) {
    overflow: auto;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  #done {
    color: green;
  }
  #notDone {
    color: #000;
  }
  .icon:hover {
    cursor: pointer;
    color: var(--Button-blue);
  }
  #noLike{
    color: #000;
  }
  #like{
    color: red;
  }
  #fav{
    color: orange;
  }
  #notFav{
    color: #000
  }
`;

const StHeader = styled.div`
  ${flex({ justify: "flex-start" })}
  width: 100%;
  height: 50px;
  & > .icon {
    margin-left: 2rem;
  }
  @media (max-width: 1300px) {
    ${flex({})}
  }
`;

const StProfileImg = styled.img`
  width: 5%;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const StTitle = styled.div`
  ${flex({ direction: "column", justify: "flex-start", align: "flex-start" })}
  font-size: 18px;
  color: #4a4d53;
  font-weight: bold;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 1300px) {
    ${flex({})}
  }
`;

const StBody = styled.div`
  margin-top: 20px;
  width: 100%;
  color: #4a4d53;
  white-space: pre-wrap;
`;

const StButton = styled.button`
  margin-right: 30px;
  border:none;
`;
