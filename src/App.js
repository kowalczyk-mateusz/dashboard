import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {usersAction} from './Actions/usersAction'
import styled from 'styled-components'
import Dashboard from './Components/Dashboard'
import {Switch, Route} from 'react-router-dom'
import NewUser from './Components/NewUser'
import EditUser from './Components/EditUser'
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(usersAction())
  }, [])

  return (
   <StyledApp>
     <h1>Dashboard</h1>
     <Switch>
     <Route path="/" exact>
     <Dashboard/>
     </Route>
     <Route path="/newUserForm">
     <NewUser/>
     </Route>
     <Route path="/editUser/:id">
       <EditUser/>
     </Route>
     </Switch>
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
