import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import {useDispatch, useSelector } from "react-redux";
import { __loadPosts } from '../Redux/modules/posts';

import flex from '../Components/Common/flex'
import Header from '../Components/MainPageComponents/Header'
import Side from '../Components/MainPageComponents/Side'
import CardTab from '../Components/MainPageComponents/CardTab'

import Detail from "../Pages/Detail";
import Post from "../Pages/Post";
import Update from "../Pages/Update";

const Home = () => {
  const {error, loading} = useSelector(state => state.postReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__loadPosts())
  }, [dispatch])

  if(loading) return <>LOADING......</>
  if(error) return <>ERROR.........</>

  return (
    <>
      <Header />
      <StWrap>
        <Side />
        <CardTab />
        <Routes>
          <Route path="detail/:id" element={<Detail />}/>
          <Route path="Post" element={<Post />}/>
          <Route path="update/:id" element={<Update />}/>
        </Routes>
      </StWrap>
    </>
  )
}

export default Home

const StWrap = styled.div`
  ${flex({justify:'flex-start'})}
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #fff;
`;