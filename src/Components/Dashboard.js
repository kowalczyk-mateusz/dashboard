import React from 'react'
import styled from 'styled-components'
import SingleUser from './SingleUser'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'

const Dashboard = () =>{
    const {isLoading, users} = useSelector((state)=> state.users)
   const dispatch = useDispatch()

    return(
        <StyledDashboard>
            <Heading>
                <p>User list</p>
                <button>Add new</button>
            </Heading>
            <DataContainer>
            <Data>
                <Labels>
                    <p>id</p>
                    <p>Name</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>City</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </Labels>
                {users.length > 0 &&(
                <Users>
                    {users.map(user=>(<SingleUser 
                    key={user.id} 
                    id={user.id} 
                    name={user.name} 
                    username={user.username} 
                    email={user.email} 
                    city={user.address.city} 
                    />))}
                </Users>)}
            </Data>
            </DataContainer>
        </StyledDashboard>
    )
}
const StyledDashboard = styled.div`
width: 90%;
margin: 0 auto;
border: 1px solid #C4C4C4;
border-radius: 5px;
box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
`
const Heading = styled.div`
display: flex;
padding: 1.5rem 0.5rem;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #C4C4C4;
p{
    font-size: 1.2rem;

}
button{
    background-color: #0070FF;
    padding: 0.7rem 3rem;
    border-radius: 5px;
    color: white;
}
`
const Labels = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(7, 1fr);
border-bottom: 1px solid #C4C4C4;
background-color: #F4F4F4;
padding: 2rem 0rem;
p{
    text-align: center;
    font-weight: 600;
}
`
const DataContainer = styled.div`
padding: 0.5rem;
`
const Data = styled.div`
border-top: 1px solid #C4C4C4;
border-left: 1px solid #C4C4C4;
border-right: 1px solid #C4C4C4;
border-radius: 2px;
`
const Users = styled.div`

`
export default Dashboard