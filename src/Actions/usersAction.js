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