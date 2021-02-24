import React, {useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Popup from './Popup'
const SingleUser = ({id, name, username, email, city}) =>{
const [popup, setpopup] = useState(false);
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
            <Link to={`/editUser/${id}`}><button>edit</button></Link>
            </Edit>
            <Delete>
                <button value={id} onClick={()=> setpopup(!popup) } >delete</button>
            </Delete>
            {popup && (
            <Popup id={id} popup={popup} setpopup={setpopup}/>)}
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
position: relative;
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
@media (max-width: 650px){
    button{
        padding: 0.7rem 0.25rem;
    }
}
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
@media (max-width: 650px){
    button{
        padding: 0.7rem 0.25rem;
    }
}
`
export default SingleUser