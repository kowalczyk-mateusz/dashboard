import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {usersAction} from './Actions/usersAction'
import styled from 'styled-components'
import Dashboard from './Components/Dashboard'
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(usersAction())
  }, [])

  return (
   <StyledApp>
     <h1>Dashboard</h1>
     <Dashboard/>
   </StyledApp>
  );
}

const StyledApp = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
h1{
  align-self: flex-start;
  padding: 2rem;
  font-size: 2rem;
}
`

export default App;
