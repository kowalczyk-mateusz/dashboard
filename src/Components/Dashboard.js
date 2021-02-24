import React, {useState} from 'react'
import styled from 'styled-components'
import SingleUser from './SingleUser'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {sortAction} from '../Actions/usersAction'
const Dashboard = () =>{
    const {users} = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    const [sort, setSort] = useState(false)
    const sortFunction = () =>{
        setSort(!sort)
        if(sort){
            dispatch({type: 'SORT_USERS_DESC'})
        }
        else{
            dispatch({type: "SORT_USERS_ASC"})
        }
    }
    
    return(
        <StyledDashboard>
            <Heading>
                <p>User list</p>
                <button><StyledLink to ="/newUserForm">Add new</StyledLink></button>
            </Heading>
            <DataContainer>
            <Data>
                <Labels>
                    <p>id</p>
                    <p>Name</p>
                    <p onClick={sortFunction}>Username                     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  enable-background="new 0 0 512 512">
  <g>
    <g>
      <g>
        <path d="m496.1,138.3l-120.4-120.4c-7.9-7.9-20.6-7.9-28.5-7.10543e-15l-120.3,120.4c-7.9,7.9-7.9,20.6 0,28.5 7.9,7.9 20.6,7.9 28.5,0l85.7-85.7v352.8c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-352.8l85.7,85.7c7.9,7.9 20.6,7.9 28.5,0 7.9-7.8 7.9-20.6 5.68434e-14-28.5z"/>
        <path d="m287.1,347.2c-7.9-7.9-20.6-7.9-28.5,0l-85.7,85.7v-352.8c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5,0-7.9,7.9-7.9,20.6 0,28.5l120.4,120.4c7.9,7.9 20.6,7.9 28.5,0l120.4-120.4c7.8-7.9 7.8-20.7-0.1-28.5l0,0z"/>
      </g>
    </g>
  </g>
</svg></p>

                    <p>Email</p>
                    <p>City</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </Labels>
                {users.length > 0 ?
                <Users>
                    {users.map(user=>(<SingleUser 
                    key={user.id} 
                    id={user.id} 
                    name={user.name} 
                    username={user.username} 
                    email={user.email} 
                    city={user.address.city} 
                    />))}
                </Users> : <Empty>Brak uzytkowników</Empty>}
            </Data>
            </DataContainer>
        </StyledDashboard>
    )
}
const StyledDashboard = styled.div`
width: 98%;
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
svg{
    width: 15px;
    height: 15px;
    font-size: 1.2rem;
}
p:nth-child(3){
    cursor: pointer;
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
const Empty = styled.div`
text-align: center;
padding: 1rem 0rem;
font-size: 2rem;
`
const StyledLink = styled(Link)`
color: white;
`
export default Dashboard