import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {newUser} from '../Actions/usersAction'
const NewUser = () =>{
    const dispatch = useDispatch()
    const {users} = useSelector((state)=> state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [validateName, setValidateName] = useState(false)
    const [validateEmail, setValidateEmail] = useState(false)
    const sortedUsers = users.sort(function(a,b){return a.id - b.id})
    const usersLength = sortedUsers.length - 1;
    const lastId = sortedUsers[usersLength].id + 1;

    const submitData = (e) =>{
        const emailError = document.querySelector('.email')
        const nameError = document.querySelector('.name')

    if(!name && !email){

        emailError.classList.add('error')
        nameError.classList.add('error')
        e.preventDefault()
        setValidateEmail(true)
        setValidateName(true)

    } else if(!name){

        e.preventDefault()
        setValidateName(true)
        setValidateEmail(false)
        emailError.classList.remove('error')
        nameError.classList.add('error')

    } else if(!email || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)){

        e.preventDefault()
        setValidateName(false)
        setValidateEmail(true)
        nameError.classList.remove('error')
        emailError.classList.add('error')

    }
    else{

        emailError.classList.remove('error')
        nameError.classList.remove('error')
        users.push({
            id: lastId,
            name: name,
            username: '',
            email: email,
            address: {
                city: '',
            }
        })
        dispatch(newUser(lastId, name, email))

    }

    }

    return(
        <StyledNewUser>
            <FormContainer>
                <Headline>Form</Headline>
                <Form>
                    <Name>
                        <NameBox>
                        <label  htmlFor="Name">Name</label>
                        <input onChange={(e)=> setName(e.target.value)} className="name" type="text" placeholder="Name" required/>
                        </NameBox>
                        {validateName &&(
                    <p>Name is required</p>
                    )}
                    </Name>

                    <Email>
                        <EmailBox>
                        <label htmlFor="Email" >Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} className="email" type="email" placeholder="Email" required/>
                        </EmailBox>
                        {validateEmail && (
                    <p>Email is required</p>      
                    )}
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
flex-direction: column;
p{
    padding-top: 1rem;
    padding-left: 6.5rem;
    color: red;
}
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
flex-direction: column;
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
p{
    padding-top: 1rem;
    padding-left: 6.5rem;
    color: red;
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
const NameBox = styled.div`
display: flex;
`
const EmailBox = styled.div`
display: flex;
`
export default NewUser