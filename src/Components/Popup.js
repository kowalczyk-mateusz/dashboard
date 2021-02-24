import React from 'react'
import styled from 'styled-components'
import {updateAction} from '../Actions/usersAction'
import {useSelector, useDispatch} from 'react-redux'
const Popup = ({id, popup, setpopup}) =>{
    const {users, isLoading} = useSelector((state)=> state.users)
    const dispatch = useDispatch()
    const deleteItems = ()=>{
        const foundUser = users.filter(user => user.id === id)
        const foundUserId = users.indexOf(...foundUser);
        users.splice(foundUserId, 1)
        dispatch(updateAction())
        setpopup(false)
    }
    return(
        <StyledPopup>
            <PopupBox>
            <h2>Delete</h2>
            <Text>
                Are you sure you want to delete this user?
            </Text>
            <Buttons>
            <Cancel onClick={()=> setpopup(!popup)}>Cancel</Cancel>
            <Delete onClick={deleteItems}>Delete</Delete>
            </Buttons>
            </PopupBox>
        </StyledPopup>
    )
}
const StyledPopup = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 90;
`
const PopupBox = styled.div`
width: 400px;
height: auto;
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 10px;
justify-content: space-between;
h2{
    padding: 0.5rem 1rem;
    text-align: left;
}
`
const Buttons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding: 1rem 0rem;
`
const Text = styled.div`
padding: 2rem 0rem;
border-top: 1px solid #C4C4C4;
border-bottom: 1px solid #C4C4C4;
padding-left: 1rem;
font-size: 2rem;
`
const Cancel = styled.button`
background-color: gray;
color: white;
border-radius: 2px;
padding: 0.75rem 1rem;
`
const Delete = styled.button`
background-color: red;
color: white;
border-radius: 2px;
margin-left: 1rem;
margin-right: 1rem;
padding: 0.75rem 2.5rem;
`
export default Popup