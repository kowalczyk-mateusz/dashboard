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
        default:
            return{...state}
    }
}

export default usersReducer