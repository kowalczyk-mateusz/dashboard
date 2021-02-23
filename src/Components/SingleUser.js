import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'

const SingleUser = ({id, name, username, email, city}) =>{
    const {users, isLoading} = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    const deleteItems = ()=>{
        const findUser = users.find(el => {
            return el.id === id;
        })
        if(findUser.id === id){
            users.splice(findUser.id - 1, 1)    
            dispatch({type: "DELETE_DATA"})
        }

    }
    return(
        <StyledSingleUser>
            <Id>
                {id}
            </Id>
            <Name>
                {name}
            </Name>
            <UserName>
                {username}
            </UserName>
            <Email>
                {email}
            </Email>
            <City>
                {city}
            </City>
            <Edit>
                <button>edit</button>
            </Edit>
            <Delete>
                <button value={id} onClick={deleteItems}>delete</button>
            </Delete>
        </StyledSingleUser>
    )
}

const StyledSingleUser = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(7, 1fr);
border-bottom: 1px solid #C4C4C4;
padding: 2rem 0rem;
align-items: center;
`
const Id = styled.p`
text-align: center;
`
const Name = styled.p`
text-align: center;
`
const UserName = styled.p`
text-align: center;
`
const Email = styled.p`
text-align: center;
`
const City = styled.p`
text-align: center;
`
const Edit = styled.div`
text-align: center;
button{
padding: 0.7rem 2rem;
background-color: #ffd483;
color: white;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #fdc55c; 
}}
`
const Delete = styled.div`
text-align: center;
button{
padding: 0.7rem 2rem;
background-color: #ff6d6d;
color: white;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #ff4040; 
}}
`
export default SingleUser