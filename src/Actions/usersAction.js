import axios from 'axios'

export const usersAction = () => async (dispatch) =>{
    
    dispatch({
        type: "LOADING_DATA"
    })
    const data = await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`)

    dispatch({
        type: "FETCH_DATA",
        payload:{
            users: data.data,
        }
    })
}

export const updateAction = (id) => async (dispatch) =>{
    const data = await axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`)
    dispatch({
        type: "UPDATE_DATA",
        payload:{
            users: data.data,
        }
    })
}

export const sortAction = () => async (dispatch) =>{
    const data = await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`)
    dispatch({
        type: "SORT_USERS_ASC",
        payload:{
            users: data.data
        }
    })
    dispatch({
        type: "SORT_USERS_DESC",
        payload:{
            users: data.data
        }
    })
}

export const newUser = (id, name, email) => async (dispatch)=>{
    const data = await axios.post(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data?id=${id}&name=${name}&email=${email}`)
    dispatch({
        type: "UPDATE_DATA",
        payload:{
            users: data.data,
        }
    })
}

export const editUser = (id, name, username, city, email) => async (dispatch) =>{
    const data = await axios.put(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}/?name=${name}&email=${email}&username=${username}&city=${city}`)
    dispatch({
        type: "UPDATE_DATA",
        payload:{
            users: data.data,
        }
    })
}
