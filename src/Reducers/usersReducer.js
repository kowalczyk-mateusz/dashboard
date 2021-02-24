const initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {

    switch(action.type){
        case "FETCH_DATA":
            return{
                ...state,
                users: action.payload.users,
                isLoading: false,
            }
        case "DELETE_DATA":
            return{
                ...state,
                users: state.users.filter(item => item !==action.payload)
            }
        case "SORT_USERS_ASC":
            return{
                ...state,
                users: state.users.sort(function(a,b){return a.username.localeCompare(b.username)})
            }
        case "SORT_USERS_DESC":
            return{
                ...state,
                users: state.users.sort(function(a,b){return b.username.localeCompare(a.username)})
            }
        default:
            return{...state}
    }
}

export default usersReducer