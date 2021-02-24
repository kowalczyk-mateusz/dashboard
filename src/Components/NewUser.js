import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NewUser = () =>{
    const {users} = useSelector((state)=> state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const sortedUsers = users.sort(function(a,b){return a.id - b.id})
    const usersLength = sortedUsers.length - 1;
    const lastId = sortedUsers[usersLength].id + 1;
    const submitData = () =>{
    
        users.push({
            id: lastId,
            name: name,
            username: '',
            email: email,
            address: {
                city: '',
            }
        })
    }

    return(
        <StyledNewUser>
            <FormContainer>
                <Headline>Form</Headline>
                <Form>
                    <Name>
                        <label  htmlFor="Name">Name</label>
                        <input onChange={(e)=> setName(e.target.value)} className="name" type="text" placeholder="Name" required/>
                    </Name>
                    <Email>
                        <label htmlFor="Email" >Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} className="email" type="email" placeholder="Email" required/>
                    </Email>
                    <Buttons>
                        <StyledLink to='/'><Cancel>Cancle</Cancel></StyledLink>
                        <StyledLink to="/"><Submit onClick={submitData}>Submit</Submit></StyledLink>
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
label{
    font-size: 1rem;
    padding-right: 4rem;
}
input{
    width: 100%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}
&.error{
        border: 1px solid red;
    }
}
`
const Email = styled.div`
display: flex;
width: 100%;
label{
    font-size: 1rem;
    padding-right: 4rem;
}
input{
    width: 100%;
    border: 1px solid #C4C4C4;
    padding: 0.5rem;
    border-radius: 5px;
    &:focus{
    outline: none;
}
&.error{
        border: 1px solid red;
    }
}
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
&:hover{
    background-color: #035f03; 
}
`
const StyledLink = styled(Link)`
color: white;
`
export default NewUser