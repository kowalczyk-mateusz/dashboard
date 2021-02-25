import React, { useState } from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import {editUser} from '../Actions/usersAction'
const EditUser = () =>{
    const dispatch = useDispatch()
    const {id} = useParams();
    const {users} = useSelector((state) => state.users)
    const idNumber = parseInt(id)
    const foundUser = users.filter(user => user.id === idNumber)
    const [name, setName] = useState(foundUser[0].name)
    const [city, setCity] = useState(foundUser[0].address.city)
    const [username, setUsername] = useState(foundUser[0].username)
    const [email, setEmail] = useState(foundUser[0].email)
    const editUserHandler = () =>{
        foundUser[0]["name"] = name
        foundUser[0]["email"] = email
        foundUser[0]["username"] = username
        foundUser[0]["address"]["city"] = city
        dispatch(editUser(idNumber, name, email, username, city))
    }
    return(
        <StyledNewUser>
            <FormContainer>
                <Headline>Form</Headline>
                <Form>
                    <Name>
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder={foundUser[0].name} onChange={(e)=> setName(e.target.value)}/>
                    </Name>
                    <Username>
                    <label htmlFor="Username">Username</label>
                        <input type="text" placeholder={foundUser[0].username} onChange={(e)=> setUsername(e.target.value)}/>
                    </Username>
                    <Email>
                        <label htmlFor="Email" >Email</label>
                        <input type="email" placeholder={foundUser[0].email} onChange={(e)=> setEmail(e.target.value)}/>
                    </Email>
                    <City>
                    <label htmlFor="City">City</label>
                        <input type="text" placeholder={foundUser[0].address.city} onChange={(e)=> setCity(e.target.value)}/>
                    </City>
                    <Buttons>
                        <StyledLink to='/'><Cancel>Cancle</Cancel></StyledLink>
                        <StyledLink to="/"><Submit onClick={editUserHandler}>Submit</Submit></StyledLink>
                    </Buttons>
                </Form>
            </FormContainer>
        </StyledNewUser>
    )
}

const StyledNewUser = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const FormContainer = styled.div`
width: 98%;
border: 1px solid #C4C4C4;
border-radius: 10px;
height: auto;
display: flex;
flex-direction: column;
`
const Headline = styled.div`
padding: 1rem 0rem 1.5rem 1rem;
font-size: 1.2rem;
border-bottom: 1px solid #C4C4C4;
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 3rem 3rem 3rem 8rem;
`
const Name = styled.div`
display: flex;
width: 100%;
margin-bottom: 2rem;
justify-content: space-between;
label{
    font-size: 1rem;
}
input{
    width: 80%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}}
`
const Email = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 2rem;
label{
    font-size: 1rem;
}
input{
    width: 80%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}}
`
const Buttons = styled.div`
padding-top: 3rem;
`
const Cancel = styled.button`
padding: 0.5rem 1rem;
color: red;
background-color: transparent;
border: 1px solid red;
border-radius: 5px;
transition: all 0.1s ease-in-out;
outline: none;
cursor: pointer;
&:hover{
    color: white;
    background-color: red;
}
`
const Submit = styled.button`
padding: 0.5rem 1rem;
color:white;
background-color: green;
border-radius: 5px;
margin-left: 1rem;
transition: all 0.1s ease-in-out;
cursor: pointer;
&:hover{
    background-color: #035f03; 
}
`
const StyledLink = styled(Link)`
color: white;
`
const City = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
label{
    font-size: 1rem;
}
input{
    width: 80%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}}
`
const Username = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 2rem;
label{
    font-size: 1rem;
}
input{
    width: 80%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}}
`
export default EditUser