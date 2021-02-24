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

export const updateAction = () => async (dispatch) =>{
    const data = await axios.get(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data`)
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
